import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { LOCATIONS } from "@/data/locations";

interface FooterProps {
  description: string;
  links: { label: string; href: string }[];
  businessName: string;
}

const LOGO_SRC = "/Artistic_Decorative_Concrete_logo-removebg-preview.png";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Artistic-Decorative-Concrete/61555235653912/",
  icon: FacebookIcon,
  ariaLabel: "Artistic Decorative Concrete on Facebook",
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/artistic-decorative-concrete-laurel",
    icon: YelpIcon,
    ariaLabel: "Artistic Decorative Concrete on Yelp",
  },
  {
    label: "Google Business",
    href: "https://share.google/u8u46DlI07uhgJnWy",
    icon: GoogleBusinessIcon,
    ariaLabel: "Artistic Decorative Concrete on Google Business",
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 2.5l.27 10.25c.02.79.94 1.25 1.59.78l8.4-6.04c.59-.42.53-1.34-.1-1.69-2.94-1.62-6.78-3.1-9.55-3.59-.4-.07-.63.06-.61.29zm-1.95 7.55c.34.71 1.39.8 1.79.14l4.9-9.4c.27-.51-.12-1.1-.7-1.02C14.18.1 10.7 1.9 8.4 3.3c-.5.3-.5 1.02 0 1.32l3.15 4.43zm-7.6 2.04c-.3.73.37 1.45 1.12 1.2l9.7-3.1c.74-.24.83-1.27.14-1.62L7.4 5.2c-.5-.2-1.08.1-1.2.62l-.25 6.27zm.7 8.6c.02.7.8 1.08 1.37.68l7.7-5.4c.6-.42.43-1.37-.3-1.53l-9.6-2.1c-.5-.1-.98.3-.98.82l.81 7.53zm10.2 1.1c.02.74.84 1.12 1.42.66l7.1-5.6c.5-.4.35-1.2-.25-1.36l-9.3-2.5c-.7-.2-1.35.5-1.1 1.18l1.83 7.62z" />
    </svg>
  );
}

function GoogleBusinessIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

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
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary hover:text-white"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
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
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-white/70" aria-hidden="true" />
                <span className="text-sm text-white/70">
                  3100 S Park City Rd, Laurel, MT 59044, United States
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-white/70" aria-hidden="true" />
                <a
                  href="tel:+14065982444"
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  +1 406-598-2444
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
                <Clock className="size-4 text-white/70" aria-hidden="true" />
                <span className="text-sm text-white/70">Open 24 hours</span>
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
