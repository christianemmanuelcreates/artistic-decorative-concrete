import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Hop as Home, LayoutDashboard, PhoneCall, Shield, Sparkles, Truck } from "lucide-react";

const services = [
  {
    title: "Concrete Flat Work",
    description:
      "High-quality concrete flatwork for driveways, patios, and walkways designed for durability, clean finishes, and long-term performance.",
    icon: LayoutDashboard,
  },
  {
    title: "Stamped Concrete",
    description:
      "Decorative stamped concrete that mimics stone, brick, or wood, offering beauty and low-maintenance charm year-round.",
    icon: Sparkles,
  },
  {
    title: "Retaining Walls",
    description:
      "Durable, custom-designed retaining walls that prevent erosion, manage elevation changes, and add structure and beauty to your outdoor space.",
    icon: Shield,
  },
  {
    title: "Foundations",
    description:
      "Durable, level, and code-compliant foundations that provide lasting structural support for homes, garages, and commercial buildings.",
    icon: Home,
  },
  {
    title: "Slab on Grade",
    description:
      "Stable, moisture-resistant foundations ideal for residential homes, garages, and light commercial buildings.",
    icon: Building,
  },
  {
    title: "Excavation Services",
    description:
      "Precise grading, trenching, and site preparation for concrete installations, foundations, and landscaping, ensuring a strong base for your project.",
    icon: Truck,
  },
];

export default function Services() {
  return (
    <Layout
      seo={{
        title: "Concrete Services in Billings, MT | Artistic Decorative",
        description:
          "Explore complete concrete construction services: flatwork, stamped concrete, retaining walls, foundations, slab-on-grade, and excavation in Billings, MT.",
        canonical: "https://artisticdecorativeconcrete.com/services",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList", "ItemList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      {/* Hero */}
      <section className="bg-[#1A1A1D] pt-12 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6">
            Concrete Contractors in Billings, MT
          </Badge>
          <h1 className="text-4xl md:text-6xl tracking-tighter leading-none font-bold text-white max-w-4xl text-balance">
            Complete Concrete Construction &amp; Decorative Services
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-[65ch]">
            From stamped patios and driveways to strong foundations and retaining walls, we offer complete
            professional concrete services tailored to meet the functional and aesthetic needs of every property.
          </p>
          <a href="tel:+14065982444" className="mt-8">
            <Button size="lg">
              <PhoneCall data-icon="inline-start" />
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-foreground">
            Our Core Concrete Solutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[65ch]">
            Complete professional concrete services tailored to meet the functional and aesthetic needs of every
            property.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full transition-all duration-200 ease-in-out hover:shadow-md"
              >
                <CardHeader className="gap-4">
                  <service.icon className="size-8 text-primary" aria-hidden="true" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1A1A1D] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-white max-w-2xl text-balance">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[60ch]">
            Trust us to deliver lasting results with precision and craftsmanship. Get a free consultation by calling
            (406) 598-2444.
          </p>
          <a href="tel:+14065982444" className="mt-8">
            <Button size="lg">
              <PhoneCall data-icon="inline-start" />
              Call (406) 598-2444
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}