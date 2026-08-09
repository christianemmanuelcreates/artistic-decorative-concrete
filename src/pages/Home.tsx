import Layout from "@/components/Layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheck as CheckCircle2, Hop as HomeIcon, MapPin, Phone, Shield, Sparkles, Star } from "lucide-react";

const services = [
  {
    title: "Decorative Concrete",
    description:
      "Custom decorative concrete that combines the strength of cement with the durability and bonding power of acrylics.",
    icon: Sparkles,
  },
  {
    title: "Driveways & Patios",
    description:
      "Attractive, long-lasting driveways and patios that boost property value and enhance curb appeal.",
    icon: HomeIcon,
  },
  {
    title: "Custom Concrete Solutions",
    description:
      "Cost-effective solutions finished with a penetrating sealer for superb weather and UV resistance.",
    icon: Shield,
  },
];

const stats = [
  {
    value: "20+",
    label: "Years of Industry Experience",
    icon: Star,
  },
  {
    value: "100%",
    label: "Custom Concrete Solutions",
    icon: CheckCircle2,
  },
  {
    value: "2006",
    label: "Serving Montana Since 2006",
    icon: MapPin,
  },
];

const testimonials = [
  {
    quote:
      "\u201CI had a foundation and driveway project done, and these guys nailed it. Clean work, fair pricing, and excellent communication throughout. Highly recommend for any concrete work.\u201D",
    author: "Mark Reynolds",
    initials: "MR",
  },
  {
    quote:
      "\u201CArtistic Decorative Concrete and the entire staff did an outstanding job. These are professionals and the best of class in their field.\u201D",
    author: "Patrick Johnson",
    initials: "PJ",
  },
  {
    quote:
      "\u201CArtistic Decorative Concrete exceeded our expectations. The stamped patio turned out beautiful, and the crew was courteous, on time, and highly skilled.\u201D",
    author: "Sarah Thompson",
    initials: "ST",
  },
];

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Decorative Concrete Billings, MT | Artistic Decorative",
        description:
          "Artistic Decorative Concrete provides expert decorative concrete, flatwork, and foundations in Billings, MT. Serving Montana since 2006. Call for a free estimate.",
        canonical: "https://artisticdecorativeconcrete.com/",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "WebSite", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      {/* Hero */}
      <section className="bg-[#1A1A1D] px-4 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6">
            Serving Montana Since 2006
          </Badge>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-none tracking-tighter text-white md:text-6xl">
            Artistic Decorative Concrete in Billings, MT
          </h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/70">
            Expert decorative concrete solutions, flatwork, and foundations in Billings, MT and the surrounding areas.
          </p>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/70">
            Serving Montana since 2006, we transform old and new concrete surfaces into attractive, long-lasting features for residential and commercial properties.
          </p>
          <div className="mt-8">
            <a href="tel:+14065982444">
              <Button size="lg">
                <Phone data-icon="inline-start" />
                Get Your Free Estimate
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
              Expert Concrete Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Upscale decorative concrete for residential and commercial properties
            </p>
            <p className="mt-4 max-w-[65ch] leading-relaxed text-muted-foreground">
              Artistic Decorative Concrete creates an upscale look with decorative concrete, driveways, and patios. Our experienced team offers cost-effective, custom concrete solutions that boost property value, enhance curb appeal, and ensure lasting strength.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader className="flex flex-col items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="size-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
            By the Numbers
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
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

      {/* Testimonials */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tighter text-foreground md:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 max-w-[65ch] text-muted-foreground">
              Hear from property owners across Billings who trusted us with their concrete projects.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="h-full">
                <CardHeader>
                  <div
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                    className="flex gap-1"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <p className="leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <Separator className="my-6" />
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1D] px-4 py-16 text-white md:py-20">
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
          <div className="mt-8">
            <a href="tel:+14065982444">
              <Button size="lg">
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