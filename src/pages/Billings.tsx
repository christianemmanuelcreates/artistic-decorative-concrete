import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layers, MapPin, PhoneCall, RefreshCw, Shapes } from "lucide-react";

const services = [
  {
    title: "Stamped Concrete Patios",
    description:
      "Recreate the beauty of natural stone, brick, and wood for patios, walkways, and driveways with lasting durability.",
    icon: Shapes,
  },
  {
    title: "Polished Concrete Floors",
    description:
      "Install a clean, contemporary finish with minimal maintenance ideal for homes, garages, and commercial properties.",
    icon: Layers,
  },
  {
    title: "Concrete Resurfacing",
    description:
      "Restore aging or damaged surfaces without the expense of complete replacement, improving both appearance and strength.",
    icon: RefreshCw,
  },
];

const areas = [
  { name: "Billings", description: "Serving Billings, MT" },
  { name: "Laurel", description: "Serving Laurel, MT" },
  { name: "Columbus", description: "Serving Columbus, MT" },
];

export default function Billings() {
  return (
    <Layout
      seo={{
        title: "Decorative Concrete in Billings, MT | Artistic",
        description:
          "Artistic Decorative Concrete provides stamped concrete, polished floors, and resurfacing in Billings, MT. Get a custom quote for your property today.",
        canonical: "https://artisticdecorativeconcrete.com/billings",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      <div className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Serving Billings, MT Since 2006</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Decorative Concrete Services in Billings, MT
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              When it comes to expert decorative concrete services in Billings,
              MT, Artistic Decorative Concrete delivers beautiful and durable
              results. We specialize in enhancing residential and commercial
              spaces through high-quality concrete finishes tailored to
              withstand Montana's climate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14065982444">
                <Button size="lg">
                  <PhoneCall data-icon="inline-start" />
                  Call (406) 598-2444
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Available in Billings */}
        <section className="flex flex-col bg-muted py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-left">
              Services Available in Billings
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <service.icon
                        className="size-8 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve in Billings */}
        <section className="flex flex-col py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-left">
              Areas We Serve in Billings
            </h2>
            <p className="mt-2 text-muted-foreground">
              We proudly serve Billings, Laurel, and Columbus, MT.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Card key={area.name} className="flex flex-row items-center p-6">
                  <MapPin
                    className="size-8 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="flex flex-col items-center text-center bg-primary py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground">
              Upgrade Your Billings Property
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Transform your outdoor and indoor spaces today. Call (406) 598-2444
              for a custom quote.
            </p>
            <div className="mt-8">
              <a href="tel:+14065982444">
                <Button size="lg" variant="secondary">
                  Get a Custom Quote
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}