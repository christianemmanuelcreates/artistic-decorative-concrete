import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  CircleCheck as CheckCircle2,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { SERVICES, SHOWCASE_IMAGES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

const stats = [
  { value: "20+", label: "Years of Industry Experience", icon: Star },
  { value: "100%", label: "Custom Concrete Solutions", icon: CheckCircle2 },
  { value: "2006", label: "Serving Montana Since 2006", icon: Sparkles },
];

export default function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;
    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);
    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <Layout
      seo={{
        title: "Decorative Concrete Billings & Laurel, MT | Artistic Decorative",
        description:
          "Artistic Decorative Concrete provides expert decorative concrete, flatwork, and foundations in Billings and Laurel, MT. Serving Montana since 2006. Call for a free estimate.",
        canonical: "https://artisticdecorativeconcrete.com/",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "WebSite", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{
        region: "US-MT",
        placename: "Billings",
        latitude: 45.7833,
        longitude: -108.5007,
      }}
      business={{
        name: "Artistic Decorative Concrete",
        phone: "+1-406-598-2444",
        address: {
          streetAddress: "3100 S Park City Rd",
          addressLocality: "Laurel",
          addressRegion: "MT",
          postalCode: "59044",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/people/Artistic-Decorative-Concrete/61555235653912/",
          "https://www.yelp.com/biz/artistic-decorative-concrete-laurel",
          "https://share.google/sEh0QIiwbGpCY3nN7",
        ],
        areaServed: LOCATIONS.map((loc) => ({ name: loc.name })),
        openingHours: [
          {
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/Stamped_concrete_compass.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay: strong on left for text, lighter on right for form */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,26,29,0.92) 0%, rgba(26,26,29,0.82) 35%, rgba(26,26,29,0.55) 60%, rgba(26,26,29,0.35) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:py-24 lg:grid-cols-2 lg:gap-12">
          {/* Left: text content */}
          <div className="flex flex-col items-start text-left">
            <Badge variant="secondary" className="mb-6">
              Serving Montana Since 2006
            </Badge>
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
              Artistic Decorative Concrete in Billings &amp; Laurel, MT
            </h1>
            <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-white/80">
              Expert decorative concrete solutions, flatwork, and foundations serving Billings, Laurel, and the surrounding Montana communities.
            </p>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-white/70">
              Serving Montana since 2006, we transform old and new concrete surfaces into attractive, long-lasting features for residential and commercial properties across Billings and Laurel, MT.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="tel:+14065982444">
                <Button size="lg" variant="secondary">
                  <Phone data-icon="inline-start" />
                  Call (406) 598-2444
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Sparkles data-icon="inline-start" />
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Constrained Photo Carousel */}
      <section className="bg-background px-4 py-8 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
              Our Project Gallery
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              A look at the decorative concrete work we deliver across Montana
            </p>
          </div>
          <div className="mt-6">
            <Carousel
              opts={{ loop: true }}
              setApi={setCarouselApi}
              className="mx-auto h-[184px] max-w-3xl md:h-[208px]"
            >
              <CarouselContent className="h-full items-start">
                {SHOWCASE_IMAGES.map((slide) => (
                  <CarouselItem key={slide.src} className="h-full sm:basis-1/2 lg:basis-1/3">
                    <div className="flex h-full flex-col gap-2">
                      <div className="h-36 w-full shrink-0 overflow-hidden rounded-lg md:h-40">
                        <img
                          src={slide.src}
                          alt={slide.caption}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-center text-xs text-muted-foreground">
                        {slide.caption}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
              Expert Concrete Services
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Upscale decorative concrete for residential and commercial properties in Billings, Laurel, and across Montana
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
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
                  <Link to="/contact" className="mt-4 block">
                    <Button size="sm" className="w-full">
                      Get a Free Estimate
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
            By the Numbers
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <stat.icon className="size-7" aria-hidden="true" />
                </div>
                <p className="mt-4 text-4xl font-bold leading-none tracking-tighter text-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA */}
      <section className="bg-[#1A1A1D] px-4 py-14 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">
            Ready to Enhance Your Property?
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/80">
            Get your free estimate today. Call us at (406) 598-2444 or email{" "}
            <a
              href="mailto:chuckyoung1970@gmail.com"
              className="underline underline-offset-4"
            >
              chuckyoung1970@gmail.com
            </a>{" "}
            to get started.
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
