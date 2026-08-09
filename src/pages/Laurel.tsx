import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, MapPin, PhoneCall, RefreshCw, Shapes } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  mapPin: MapPin,
  phoneCall: PhoneCall,
  refreshCw: RefreshCw,
  shapes: Shapes,
};

export default function Laurel() {
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

  const areas = [
    { title: "Laurel", description: "Serving Laurel, MT", icon: "mapPin" as const },
    { title: "Billings", description: "Serving Billings, MT", icon: "mapPin" as const },
    { title: "Columbus", description: "Serving Columbus, MT", icon: "mapPin" as const },
  ];

  return (
    <Layout
      seo={{
        title: "Decorative Concrete in Laurel, MT | Artistic",
        description:
          "Artistic Decorative Concrete offers stamped concrete, polished concrete, and concrete restoration in Laurel, MT. Call (406) 598-2444 to get started.",
        canonical: "https://artisticdecorativeconcrete.com/laurel",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
    >
      <section className="flex flex-col min-h-screen">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Decorative Concrete Services in Laurel, MT
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We proudly serve the Laurel, MT community with expert decorative
            concrete services designed to enhance both residential and commercial
            properties. Our skilled team uses innovative stamping, polishing, and
            resurfacing techniques to turn plain concrete into stunning surfaces.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="tel:+14065982444">
              <Button size="lg">Start Your Laurel Project</Button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance">
              Services Available in Laurel
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <Card key={service.title} className="h-full">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-6" aria-hidden="true" />
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

        {/* Areas Served */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance">
              Areas We Serve in Laurel
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              We proudly serve Laurel, Billings, and Columbus, MT.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {areas.map((area) => {
                const Icon = iconMap[area.icon];
                return (
                  <Card key={area.title} className="h-full">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <CardTitle>{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
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
        <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-primary-foreground">
              Start Your Laurel Project
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              Enhance the value and curb appeal of your property. Call (406)
              598-2444 to get started.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="tel:+14065982444">
                <Button size="lg" variant="secondary">
                  <PhoneCall data-icon="inline-start" />
                  Call (406) 598-2444
                </Button>
              </a>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}