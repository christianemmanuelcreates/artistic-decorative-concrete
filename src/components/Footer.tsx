import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { LOCATIONS } from "@/data/locations";

interface FooterProps {
  description: string;
  links: { label: string; href: string }[];
  businessName: string;
}

const LOGO_SRC = "/Artistic_Decorative_Concrete_logo-removebg-preview.png";

export function Footer({ description, links, businessName }: FooterProps) {
  const mainLinks = links.filter(
    (link) => !LOCATIONS.some((loc) => `/${loc.slug}` === link.href)
  );

  return (
    <footer className="border-t border-white/10 bg-[#1A1A1D] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={LOGO_SRC}
                alt="Artistic Decorative Concrete logo"
                className="h-12 w-auto"
              />
              <span className="sr-only">{businessName}</span>
            </Link>
            <p className="mt-4 max-w-[45ch] text-sm leading-relaxed text-white/70">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {mainLinks.map((link) => (
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
            <h2 className="text-sm font-semibold text-white">Service Areas</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/${loc.slug}`}
                    className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                  >
                    {loc.name}, MT
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
