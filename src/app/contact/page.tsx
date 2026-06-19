import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch for a free consultation. Serving Portland and surrounding areas.",
};

export default function ContactPage() {
  return <ContactClient />;
}
