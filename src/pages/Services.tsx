import Layout from "@/components/Layout";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  Hop as Home,
  LayoutDashboard,
  PhoneCall,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceDetail {
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  benefits: string[];
  galleryLabels: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Concrete Flat Work",
    icon: LayoutDashboard,
    summary:
      "High-quality concrete flatwork for driveways, patios, and walkways designed for durability, clean finishes, and long-term performance.",
    description:
      "Concrete flatwork forms the foundation of most outdoor surfaces — driveways, patios, walkways, and sidewalks. We pour and finish every slab with attention to proper grading, reinforcement, and joint placement so the surface resists cracking and holds up through Montana's freeze-thaw cycles. The result is a clean, level finish that performs for decades.",
    benefits: [
      "Proper grading and site preparation for drainage",
      "Reinforced concrete to resist cracking and shifting",
      "Clean, level finishes suitable for any property",
    ],
    galleryLabels: ["Driveway Pour", "Patio Finish", "Walkway Detail", "Flatwork Showcase"],
  },
  {
    title: "Stamped Concrete",
    icon: Sparkles,
    summary:
      "Decorative stamped concrete that mimics stone, brick, or wood, offering beauty and low-maintenance charm year-round.",
    description:
      "Stamped concrete lets you achieve the look of natural stone, brick, slate, or wood at a fraction of the cost. We press texture mats into freshly poured concrete and apply integral and release colors to create rich, realistic patterns. A penetrating sealer locks in the color and protects against wear, UV, and weather — giving you a surface that stays beautiful with minimal upkeep.",
    benefits: [
      "Replicates premium materials like stone, slate, and wood",
      "Integral color and release agents for rich, lasting tones",
      "Sealed surface resists UV, weather, and wear",
    ],
    galleryLabels: ["Stamped Patio", "Stone Pattern", "Brick Texture", "Stamped Walkway"],
  },
  {
    title: "Retaining Walls",
    icon: Shield,
    summary:
      "Durable, custom-designed retaining walls that prevent erosion, manage elevation changes, and add structure and beauty to your outdoor space.",
    description:
      "Retaining walls do more than hold back soil — they shape your landscape. We build walls that manage elevation changes, control drainage, and prevent erosion while adding clean visual structure to your property. Whether you need a small garden wall or a tall structural wall, we engineer each one to handle the load and stand up to the elements.",
    benefits: [
      "Engineered to handle soil pressure and drainage",
      "Prevents erosion and manages elevation changes",
      "Adds structure and visual appeal to landscapes",
    ],
    galleryLabels: ["Garden Wall", "Structural Wall", "Tiered Landscape", "Wall Detail"],
  },
  {
    title: "Foundations",
    icon: Home,
    summary:
      "Durable, level, and code-compliant foundations that provide lasting structural support for homes, garages, and commercial buildings.",
    description:
      "A solid foundation is the most important part of any structure. We pour footings and foundation walls that are level, properly reinforced, and built to local code. From residential homes and garages to light commercial buildings, our foundations provide the stable, long-lasting base your structure depends on.",
    benefits: [
      "Code-compliant footings and walls",
      "Properly reinforced for structural integrity",
      "Suitable for homes, garages, and commercial builds",
    ],
    galleryLabels: ["Footing Pour", "Foundation Wall", "Slab Foundation", "Foundation Detail"],
  },
  {
    title: "Slab on Grade",
    icon: Building,
    summary:
      "Stable, moisture-resistant foundations ideal for residential homes, garages, and light commercial buildings.",
    description:
      "Slab-on-grade construction places a single concrete slab directly on prepared ground, creating a stable, moisture-resistant base. It is a cost-effective choice for homes, garages, shops, and light commercial buildings where a full basement is not needed. We handle site prep, vapor barriers, reinforcement, and finishing to deliver a slab that performs.",
    benefits: [
      "Cost-effective alternative to full foundations",
      "Moisture-resistant with proper vapor barriers",
      "Ideal for garages, shops, and light commercial builds",
    ],
    galleryLabels: ["Slab Pour", "Garage Slab", "Vapor Barrier", "Finished Slab"],
  },
  {
    title: "Excavation Services",
    icon: Truck,
    summary:
      "Precise grading, trenching, and site preparation for concrete installations, foundations, and landscaping, ensuring a strong base for your project.",
    description:
      "Before any concrete goes in, the ground has to be right. We provide grading, trenching, and site preparation so your concrete installation, foundation, or landscape starts from a solid base. Proper excavation prevents settling, drainage issues, and structural problems down the line.",
    benefits: [
      "Precise grading for proper drainage",
      "Trenching for utilities and footings",
      "Site prep that prevents settling and structural issues",
    ],
    galleryLabels: ["Site Grading", "Trenching", "Site Prep", "Excavation Detail"],
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
            From stamped patios and driveways to strong foundations and retaining walls, we offer
            complete professional concrete services tailored to meet the functional and aesthetic
            needs of every property.
          </p>
          <a href="tel:+14065982444" className="mt-8">
            <Button size="lg">
              <PhoneCall data-icon="inline-start" />
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Service overview cards */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-foreground">
            Our Core Concrete Solutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[65ch]">
            Complete professional concrete services tailored to meet the functional and aesthetic
            needs of every property.
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
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections with galleries */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={index % 2 === 0 ? "bg-background py-16 md:py-24" : "bg-muted py-16 md:py-24"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="flex flex-col gap-4">
                <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="size-7" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a href="tel:+14065982444">
                    <Button>
                      <PhoneCall data-icon="inline-start" />
                      Get a Free Estimate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {service.galleryLabels.map((label) => (
                  <ImagePlaceholder key={label} label={label} aspectRatio="square" />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Banner */}
      <section className="bg-[#1A1A1D] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-white max-w-2xl text-balance">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[60ch]">
            Trust us to deliver lasting results with precision and craftsmanship. Get a free
            consultation by calling (406) 598-2444.
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
