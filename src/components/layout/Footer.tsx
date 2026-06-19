import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.svg" alt="Nest & Dwell Interiors" className="h-9 mb-4 brightness-0 invert opacity-80" />
            <p className="text-sm text-slate-400">Transforming houses into homes with thoughtful design and expert staging.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
              <Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link>
              <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>Interior Design</span>
              <span>Home Staging</span>
              <span>Color Consulting</span>
              <span>Space Planning</span>
              <span>Furniture Selection</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3 text-secondary" />
                <span>(555) 234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3 text-secondary" />
                <span>hello@nestdwell.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3 text-secondary" />
                <span>Portland, OR</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <FontAwesomeIcon icon={faInstagram} className="size-4 hover:text-secondary cursor-pointer transition-colors" />
              <FontAwesomeIcon icon={faPinterest} className="size-4 hover:text-secondary cursor-pointer transition-colors" />
              <FontAwesomeIcon icon={faFacebook} className="size-4 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Nest & Dwell Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
