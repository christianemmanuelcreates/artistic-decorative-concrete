import { Helmet } from "react-helmet-async";

const SITE_URL = "https://artisticdecorativeconcrete.com";

const BUSINESS_DESCRIPTION =
  "Artistic Decorative Concrete provides expert decorative concrete, flatwork, and foundations in Billings, MT. Serving Montana since 2006.";

const SERVICES_ITEM_LIST = [
  "Decorative & Stamped Concrete",
  "Patios, Driveways & Flatwork",
  "Stone Work & Outdoor Features",
  "Retaining Walls",
  "Foundations & Slab on Grade",
  "Polished Concrete",
  "Concrete Restoration",
  "Custom Concrete Solutions",
];

interface SEOHeadProps {
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

export function SEOHead({ seo, hasLocalBusiness = false, geo, business }: SEOHeadProps) {
  const canonicalUrl = `${SITE_URL}${seo.canonical}`;
  const organizationId = `${SITE_URL}/#organization`;
  const businessName = business?.name || "Artistic Decorative Concrete";

  // Build breadcrumb label from canonical path
  const breadcrumbName =
    seo.canonical === "/"
      ? "Home"
      : seo.canonical
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()) || "Home";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: businessName,
      url: SITE_URL,
      description: BUSINESS_DESCRIPTION,
      ...(business?.sameAs && business.sameAs.length > 0 ? { sameAs: business.sameAs } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business?.phone || "+1-406-598-2444",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
  ];

  if (hasLocalBusiness) {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: businessName,
      url: SITE_URL,
      description: BUSINESS_DESCRIPTION,
      telephone: business?.phone || "+1-406-598-2444",
      priceRange: "$$",
      ...(business?.address
        ? {
            address: {
              "@type": "PostalAddress",
              ...(business.address.streetAddress ? { streetAddress: business.address.streetAddress } : {}),
              ...(business.address.addressLocality ? { addressLocality: business.address.addressLocality } : {}),
              ...(business.address.addressRegion ? { addressRegion: business.address.addressRegion } : {}),
              ...(business.address.postalCode ? { postalCode: business.address.postalCode } : {}),
              ...(business.address.addressCountry ? { addressCountry: business.address.addressCountry } : {}),
            },
          }
        : {}),
      ...(geo
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: geo.latitude,
              longitude: geo.longitude,
            },
          }
        : {}),
      ...(business?.areaServed && business.areaServed.length > 0
        ? {
            areaServed: business.areaServed.map((area) => ({
              "@type": "City",
              name: area.name,
            })),
          }
        : {}),
      ...(business?.openingHours && business.openingHours.length > 0
        ? {
            openingHoursSpecification: business.openingHours.map((hours) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: hours.dayOfWeek,
              opens: hours.opens,
              closes: hours.closes,
            })),
          }
        : {}),
    });
  }

  if (seo.schemaTypes?.includes("WebSite")) {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: businessName,
      url: SITE_URL,
    });
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...(seo.canonical !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: breadcrumbName,
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  });

  if (seo.schemaTypes?.includes("ItemList") && seo.canonical === "/services") {
    graph.push({
      "@type": "ItemList",
      name: "Concrete Services in Billings, MT",
      description: seo.description,
      itemListElement: SERVICES_ITEM_LIST.map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    });
  }

  if (seo.schemaTypes?.includes("Article")) {
    graph.push({
      "@type": "Article",
      headline: seo.title,
      description: seo.description,
      url: canonicalUrl,
      author: {
        "@type": "Organization",
        "@id": organizationId,
      },
      publisher: {
        "@type": "Organization",
        "@id": organizationId,
      },
      mainEntityOfPage: canonicalUrl,
    });
  }

  if (seo.schemaTypes?.includes("Product")) {
    graph.push({
      "@type": "Product",
      name: businessName,
      description: seo.description,
      url: canonicalUrl,
    });
  }

  if (seo.schemaTypes?.includes("SoftwareApplication")) {
    graph.push({
      "@type": "SoftwareApplication",
      name: businessName,
      description: seo.description,
      url: canonicalUrl,
      applicationCategory: "BusinessApplication",
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={seo.ogType || "website"} />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      {hasLocalBusiness && geo && (
        <>
          <meta name="geo.region" content={geo.region} />
          <meta name="geo.placename" content={geo.placename} />
          <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
          <meta name="ICBM" content={`${geo.latitude}, ${geo.longitude}`} />
        </>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Helmet>
  );
}