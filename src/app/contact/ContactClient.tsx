"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setService(""); setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Talk</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Ready to transform your space? Reach out and we&apos;ll schedule your free consultation.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Select value={service} onValueChange={(v: string | null) => setService(v || "")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interior-design">Interior Design</SelectItem>
                      <SelectItem value="home-staging">Home Staging</SelectItem>
                      <SelectItem value="virtual-design">Virtual Design</SelectItem>
                      <SelectItem value="color-consulting">Color Consulting</SelectItem>
                      <SelectItem value="furniture-selection">Furniture Selection</SelectItem>
                      <SelectItem value="space-planning">Space Planning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Tell us about your project..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
                  <Button type="submit" className="w-full" disabled={status === "sending"}>
                    <FontAwesomeIcon icon={faPaperPlane} className="size-3 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "error" && <p className="text-sm text-destructive text-center">Something went wrong. Please try again.</p>}
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faPhone} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">hello@nestdwell.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="size-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Studio</p>
                      <p className="text-sm text-muted-foreground">1234 NW Design Ave, Portland, OR 97209</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Mon – Fri</span><span>9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
