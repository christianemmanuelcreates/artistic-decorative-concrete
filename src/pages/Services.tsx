import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <Layout
      seo={{
        title: "Concrete Services in Billings, MT | Artistic Decorative",
        description:
          "Decorative concrete, stamped concrete, flatwork, retaining walls, foundations, slab-on-grade, and polished concrete in Billings, MT. Serving Montana since 2006.",
        canonical: "https://artisticdecorativeconcrete.com/services",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList", "ItemList"],
      }}
      hasLocalBusiness={true}
    >
      {/* Hero */}
      <section className="bg-[#1A1A1D] pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Concrete Contractors in Billings, MT
          </Badge>
          <h1 className="text-3xl md:text-5xl tracking-tighter leading-none font-bold text-white max-w-3xl text-balance">
            Complete Concrete Construction &amp; Decorative Services
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-[60ch]">
            Artistic Decorative Concrete is the trusted concrete contractor in Billings, MT for
            stamped concrete, flatwork, retaining walls, foundations, slab-on-grade, and polished
            concrete. Serving residential and commercial properties across Montana since 2006.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/contact">
              <Button size="lg">
                <Sparkles data-icon="inline-start" />
                Get Your Free Estimate
              </Button>
            </Link>
            <a href="tel:+14065982444">
              <Button size="lg" variant="secondary">
                <Phone data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Service cards grid - 3 columns on desktop */}
      <section className="bg-background py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-2xl md:text-3xl tracking-tighter leading-none font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-[55ch]">
              Complete concrete and decorative services for residential and commercial properties in Billings, Laurel, and surrounding Montana communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="flex h-full flex-col overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="gap-2 p-4">
                  <div className="flex items-center gap-2">
                    <service.icon className="size-5 text-primary shrink-0" aria-hidden="true" />
                    <CardTitle className="text-base">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-4 pt-0">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80">
                    {service.seoDescription}
                  </p>
                  <Link to="/contact" className="mt-4 block">
                    <Button size="sm" className="w-full">
                      Get a Free Estimate
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1A1A1D] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl tracking-tighter leading-none font-bold text-white max-w-2xl text-balance">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-[60ch]">
            Trust us to deliver lasting results with precision and craftsmanship. Get your free estimate today.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/contact">
              <Button size="lg">
                <Sparkles data-icon="inline-start" />
                Get Your Free Estimate
              </Button>
            </Link>
            <a href="tel:+14065982444">
              <Button size="lg" variant="secondary">
                <Phone data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
