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
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Palette className="size-6 text-primary" aria-hidden="true" />
              <span>{businessName}</span>
            </Link>
            <p className="mt-4 max-w-[45ch] text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" aria-hidden="true" />
                <a
                  href="tel:+14065982444"
                  className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  (406) 598-2444
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" aria-hidden="true" />
                <a
                  href="mailto:chuckyoung1970@gmail.com"
                  className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  chuckyoung1970@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Billings, MT</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-12" />
        <div className="pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}