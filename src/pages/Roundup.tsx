import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, MapPin, PhoneCall, RefreshCw, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Layers,
  RefreshCw,
  MapPin,
};

const serviceItems = [
  {
    title: "Stamped Concrete",
    description:
      "Mimics the look of natural stone, slate, or wood without the high cost for your outdoor living spaces.",
    icon: "Sparkles",
  },
  {
    title: "Polished Concrete",
    description:
      "Provides a low-maintenance, sleek surface ideal for basements and commercial properties.",
    icon: "Layers",
  },
  {
    title: "Concrete Resurfacing",
    description:
      "Restores strength and beauty to aging concrete without full demolition.",
    icon: "RefreshCw",
  },
];

const areaItems = [
  { title: "Roundup", description: "Serving Roundup, MT", icon: "MapPin" },
  { title: "Huntley", description: "Serving Huntley, MT", icon: "MapPin" },
  { title: "Hardin", description: "Serving Hardin, MT", icon: "MapPin" },
];

export default function Roundup() {
  return (
    <Layout
      seo={{
        title: "Decorative Concrete in Roundup, MT | Artistic",
        description:
          "Artistic Decorative Concrete brings artistic beauty and lasting strength to concrete in Roundup, MT. Stamped, polished, and resurfaced concrete. Call today.",
        canonical: "https://artisticdecorativeconcrete.com/roundup",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      <div className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center gap-8 bg-background px-4 py-16 md:py-24">
          <div className="flex flex-col items-center gap-4">
            <h1 className="max-w-3xl text-center text-4xl font-bold tracking-tighter text-foreground md:text-6xl">
              Decorative Concrete Services in Roundup, MT
            </h1>
            <p className="max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
              We specialize in bringing artistic beauty and lasting strength to
              concrete surfaces across Roundup, MT. Transform ordinary driveways,
              patios, walkways, and floors into stunning custom designs that
              withstand Montana's changing weather.
            </p>
          </div>
          <a href="tel:+14065982444">
            <Button size="lg">
              <PhoneCall data-icon="inline-start" />
              Call (406) 598-2444
            </Button>
          </a>
        </section>

        {/* Services */}
        <section className="bg-muted px-4 py-16 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Services Available in Roundup
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Complete professional concrete services tailored to meet the
                functional and aesthetic needs of every Roundup property.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {serviceItems.map((item) => {
                const Icon = iconMap[item.icon] ?? Sparkles;
                return (
                  <Card key={item.title}>
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                        <Icon
                          className="size-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-background px-4 py-16 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Areas We Serve in Roundup
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                We proudly serve Roundup, Huntley, and Hardin, MT.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {areaItems.map((item) => {
                const Icon = iconMap[item.icon] ?? MapPin;
                return (
                  <Card key={item.title}>
                    <CardContent className="flex items-center gap-3 p-5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                        <Icon
                          className="size-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-primary px-4 py-16 md:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Upgrade Your Roundup Space
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/90">
              Improve your property's value and appeal. Call (406) 598-2444 to
              schedule your free consultation.
            </p>
            <a href="tel:+14065982444">
              <Button size="lg" variant="secondary">
                <PhoneCall data-icon="inline-start" />
                Schedule a Free Consultation
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}