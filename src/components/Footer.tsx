import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Palette } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  description: string;
  links: { label: string; href: string }[];
  businessName: string;
}

export function Footer({ description, links, businessName }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#1A1A1D] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold text-white">
              <Palette className="size-6 text-primary" aria-hidden="true" />
              <span>{businessName}</span>
            </Link>
            <p className="mt-4 max-w-[45ch] text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-white/70" aria-hidden="true" />
                <a
                  href="tel:+14065982444"
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  (406) 598-2444
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-white/70" aria-hidden="true" />
                <a
                  href="mailto:chuckyoung1970@gmail.com"
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  chuckyoung1970@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-white/70" aria-hidden="true" />
                <span className="text-sm text-white/70">Billings, MT</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-12 bg-white/10" />
        <div className="pt-8">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}