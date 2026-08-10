import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { MapPin, PhoneCall, Sparkles } from "lucide-react";
import { SERVICES, SHOWCASE_IMAGES, buildLocalizedSeoParagraph } from "@/data/services";
import type { LocationData } from "@/data/locations";

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
        <section className="flex flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:py-16 lg:px-8 bg-[#1A1A1D]">
          <Badge className="mb-4">Serving {location.name}, MT Since 2006</Badge>
          <h1 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {location.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {location.description}
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
                <PhoneCall data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </section>

        {/* All Services */}
        <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance text-foreground">
                {location.servicesHeading}
              </h2>
              <p className="mt-2 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
                {location.servicesIntro}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {SERVICES.map((service) => (
                <Card key={service.slug} className="flex h-full flex-col overflow-hidden">
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
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
            {/* Localized SEO paragraph */}
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              {buildLocalizedSeoParagraph(location.name)}
            </p>
          </div>
        </section>

        {/* Project Carousel */}
        <section className="bg-background px-4 py-8 sm:px-6 lg:px-8 md:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance text-foreground">
                Our Work in {location.name}
              </h2>
              <p className="mt-2 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
                A showcase of decorative concrete projects completed in and around {location.name}, MT.
              </p>
            </div>
            <Carousel opts={{ loop: true }} className="mx-auto h-[184px] max-w-3xl md:h-[208px]">
              <CarouselContent className="h-full items-start">
                {SHOWCASE_IMAGES.map((image) => (
                  <CarouselItem key={image.src} className="h-full sm:basis-1/2 lg:basis-1/3">
                    <div className="flex h-full flex-col gap-2">
                      <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg md:h-40">
                        <img
                          src={image.src}
                          alt={image.caption}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-center text-xs text-muted-foreground">
                        {image.caption}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-balance text-foreground">
              Areas We Serve Near {location.name}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {location.nearbyAreas.map((area) => (
                <Link key={area.slug} to={`/${area.slug}`}>
                  <Card className="h-full transition-all duration-200 ease-in-out hover:shadow-md">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="size-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {area.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
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
        <section className="bg-[#1A1A1D] px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance text-white">
              {location.ctaHeading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              {location.ctaDescription}
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
