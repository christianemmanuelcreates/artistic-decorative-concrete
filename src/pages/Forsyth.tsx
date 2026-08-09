import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, MapPin, Phone, RefreshCw, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Layers,
  RefreshCw,
  MapPin,
};

const services = [
  {
    title: "Stamped Concrete Installations",
    description:
      "Creates distinctive patios, driveways, and walkways that replicate premium paving materials.",
    icon: "Sparkles",
  },
  {
    title: "Polished Concrete Flooring",
    description:
      "Offers a clean, modern finish that is durable and easy to maintain for interior spaces.",
    icon: "Layers",
  },
  {
    title: "Concrete Resurfacing",
    description:
      "Restores your existing concrete's strength and appearance affordably and effectively.",
    icon: "RefreshCw",
  },
];

const areas = [
  { title: "Forsyth", description: "Serving Forsyth, MT", icon: "MapPin" },
  { title: "Hardin", description: "Serving Hardin, MT", icon: "MapPin" },
  { title: "Huntley", description: "Serving Huntley, MT", icon: "MapPin" },
];

export default function Forsyth() {
  return (
    <Layout
      seo={{
        title: "Decorative Concrete in Forsyth, MT | Artistic",
        description:
          "Artistic Decorative Concrete is Forsyth, MT's premier provider of stamped concrete, polished flooring, and concrete resurfacing for homes and businesses.",
        canonical: "https://artisticdecorativeconcrete.com/forsyth",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      <div className="flex flex-col">
        {/* Hero */}
        <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
              Decorative Concrete Services in Forsyth, MT
            </h1>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Artistic Decorative Concrete proudly serves Forsyth, MT, as the
              premier provider of decorative concrete solutions for residential
              and commercial properties. We transform ordinary concrete surfaces
              into stunning works of art that are both stylish and resilient.
            </p>
            <a href="tel:+14065982444">
              <Button size="lg">
                <Phone data-icon="inline-start" />
                Get a Custom Estimate
              </Button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="bg-muted px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
                Services Available in Forsyth
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon] ?? Sparkles;
                return (
                  <Card key={service.title} className="h-full">
                    <CardHeader>
                      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
                Areas We Serve in Forsyth
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We proudly serve Forsyth, Hardin, and Huntley, MT.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {areas.map((area) => {
                const Icon = iconMap[area.icon] ?? MapPin;
                return (
                  <Card key={area.title} className="h-full">
                    <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                      <Icon className="size-10 text-primary" aria-hidden="true" />
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {area.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl">
              Transform Your Forsyth Property
            </h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-primary-foreground">
              Upgrade your outdoor or indoor spaces today. Call us at (406)
              598-2444 to get a custom estimate.
            </p>
            <a href="tel:+14065982444">
              <Button size="lg" variant="secondary">
                <Phone data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}