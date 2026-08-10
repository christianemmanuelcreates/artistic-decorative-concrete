import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LOCATIONS } from "@/data/locations";

interface LayoutProps {
  children: ReactNode;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogType?: string;
    schemaTypes?: string[];
  };
  hasLocalBusiness?: boolean;
  geo?: {
    region: string;
    placename: string;
    latitude: number;
    longitude: number;
  };
  business?: {
    name: string;
    url?: string;
    sameAs?: string[];
    phone?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    openingHours?: { dayOfWeek: string[]; opens: string; closes: string }[];
    areaServed?: { name: string }[];
  };
}

const SITE_URL = "https://artisticdecorativeconcrete.com";

const BUSINESS_NAME = "Artistic Decorative Concrete";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  ...LOCATIONS.map((loc) => ({ label: loc.name, href: `/${loc.slug}` })),
];

const NAV_CTA = { text: "Get a Free Estimate", href: "/contact" };

const FOOTER_DESCRIPTION =
  "Artistic Decorative Concrete provides expert decorative concrete, flatwork, and foundations in Billings, Laurel, MT, and surrounding areas. Serving Montana since 2006.";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  ...LOCATIONS.map((loc) => ({ label: loc.name, href: `/${loc.slug}` })),
];

const SITE_GEO = {
  region: "US-MT",
  placename: "Laurel",
  latitude: 45.6666,
  longitude: -108.7719,
};

const HAS_LOCAL_BUSINESS = true;

const SOCIAL_LINKS = [
  "https://www.facebook.com/people/Artistic-Decorative-Concrete/61555235653912/",
  "https://www.yelp.com/biz/artistic-decorative-concrete-laurel",
  "https://share.google/sEh0QIiwbGpCY3nN7",
];

const SITE_BUSINESS = {
  name: BUSINESS_NAME,
  url: SITE_URL,
  phone: "+1-406-598-2444",
  sameAs: SOCIAL_LINKS,
  address: {
    streetAddress: "3100 S Park City Rd",
    addressLocality: "Laurel",
    addressRegion: "MT",
    postalCode: "59044",
    addressCountry: "US",
  },
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: LOCATIONS.map((loc) => ({ name: loc.name })),
};

export default function Layout({ children, seo, hasLocalBusiness, geo, business }: LayoutProps) {
  const mergedBusiness = { ...SITE_BUSINESS, ...business };
  const mergedGeo = geo ?? SITE_GEO;
  const showLocalBusiness = hasLocalBusiness ?? HAS_LOCAL_BUSINESS;

  return (
    <>
      <SEOHead
        seo={seo}
        hasLocalBusiness={showLocalBusiness}
        geo={mergedGeo}
        business={mergedBusiness}
      />
      <Navbar items={NAV_ITEMS} cta={NAV_CTA} businessName={BUSINESS_NAME} />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer description={FOOTER_DESCRIPTION} links={FOOTER_LINKS} businessName={BUSINESS_NAME} />
    </>
  );
}
