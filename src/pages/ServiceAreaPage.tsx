import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, MapPin, PhoneCall, RefreshCw, Shapes, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LocationData } from "@/data/locations";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  mapPin: MapPin,
  phoneCall: PhoneCall,
  refreshCw: RefreshCw,
  shapes: Shapes,
};

const services = [
  {
    title: "Stamped Concrete",
    description:
      "Replicates the natural beauty of stone, brick, or wood, adding texture and elegance to your outdoor areas.",
    icon: "shapes" as const,
  },
  {
    title: "Polished Concrete",
    description:
      "Delivers smooth, glossy surfaces ideal for garages, basements, and commercial interiors.",
    icon: "layers" as const,
  },
  {
    title: "Concrete Restoration",
    description:
      "Provides a cost-effective way to rejuvenate worn or damaged concrete surfaces.",
    icon: "refreshCw" as const,
  },
];

const galleryImages = [
  { src: "/images/services/stone_patio.jpg", caption: "Stone patio" },
  { src: "/images/services/Stamped_concrete_compass.jpg", caption: "Stamped concrete inlay" },
  { src: "/images/services/stone_driveway.jpg", caption: "Stone driveway" },
  { src: "/images/services/firepit_active.jpg", caption: "Custom fire pit" },
  { src: "/images/services/retaining_walls.jpeg", caption: "Retaining wall" },
  { src: "/images/foundations/foundations.jpg", caption: "Foundation work" },
];

interface ServiceAreaPageProps {
  location: LocationData;
}

export function ServiceAreaPage({ location }: ServiceAreaPageProps) {
  return (
    <Layout
      seo={{
        title: location.seo.title,
        description: location.seo.description,
        canonical: location.seo.canonical,
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
    >
      <div className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8 bg-[#1A1A1D]">
          <Badge className="mb-6">Serving {location.name}, MT Since 2006</Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {location.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {location.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/contact">
              <Button size="lg">
                <Sparkles data-icon="inline-start" />
                Get Your Free Estimate
              </Button>
            </Link>
            <a href="tel:+14065982444">
              <Button size="lg" variant="secondary">
                <PhoneCall data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance text-foreground">
              {location.servicesHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              {location.servicesIntro}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <Card key={service.title} className="h-full">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance text-foreground">
              Our Work in {location.name}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A showcase of decorative concrete projects completed in and around {location.name}, MT.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <figure key={image.src} className="flex flex-col gap-2">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.caption}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <figcaption className="text-sm text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance text-foreground">
              Areas We Serve Near {location.name}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {location.nearbyAreas.map((area) => (
                <Link key={area.slug} to={`/${area.slug}`}>
                  <Card className="h-full transition-all duration-200 ease-in-out hover:shadow-md">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="size-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {area.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Serving {area.name}, MT
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#1A1A1D] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white">
              {location.ctaHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {location.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/contact">
                <Button size="lg">
                  <Sparkles data-icon="inline-start" />
                  Get Your Free Estimate
                </Button>
              </Link>
              <a href="tel:+14065982444">
                <Button size="lg" variant="secondary">
                  <PhoneCall data-icon="inline-start" />
                  Call (406) 598-2444
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
