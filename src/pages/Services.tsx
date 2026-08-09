import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Sparkles } from "lucide-react";

interface ServiceCategory {
  title: string;
  summary: string;
  images: { src: string; caption: string }[];
}

const categories: ServiceCategory[] = [
  {
    title: "Decorative & Stamped Concrete",
    summary:
      "Custom stamped and decorative concrete that replicates the look of natural stone, brick, or slate. Sealed for UV and weather resistance, and built to handle Montana's freeze-thaw cycles.",
    images: [
      { src: "/images/services/Stamped_concrete_compass.jpg", caption: "Stamped concrete compass inlay" },
      { src: "/images/services/stone_patio_floor.jpeg", caption: "Decorative stone patio floor" },
      { src: "/images/services/stone_entry_patio.jpeg", caption: "Stone entry patio" },
    ],
  },
  {
    title: "Patios, Driveways & Flatwork",
    summary:
      "Driveways, patios, walkways, and sidewalks poured and finished with attention to grading, reinforcement, and joint placement. Clean, level surfaces that perform for decades.",
    images: [
      { src: "/images/services/concrete_flatwork.jpeg", caption: "Concrete flatwork" },
      { src: "/images/services/stone_driveway.jpg", caption: "Stone driveway" },
      { src: "/images/services/Concrete_walkway_side.jpg", caption: "Concrete walkway" },
    ],
  },
  {
    title: "Stone Work & Outdoor Features",
    summary:
      "Custom stone patios, courtyards, walkways, fire pits, and water features that shape your landscape and add lasting visual structure to your property.",
    images: [
      { src: "/images/services/stone_courtyard.jpg", caption: "Stone courtyard" },
      { src: "/images/services/firepit_active.jpg", caption: "Active fire pit" },
      { src: "/images/services/stone_water_fountain.jpg", caption: "Stone water fountain" },
    ],
  },
  {
    title: "Retaining Walls",
    summary:
      "Retaining walls engineered to handle soil pressure and drainage, preventing erosion while adding clean visual structure to your landscape.",
    images: [
      { src: "/images/services/retaining_walls.jpeg", caption: "Retaining wall" },
      { src: "/images/services/stone_walkway_treepit.jpg", caption: "Stone walkway with tree pit" },
      { src: "/images/services/stone_work.jpg", caption: "Stone work detail" },
    ],
  },
  {
    title: "Foundations & Slab on Grade",
    summary:
      "Code-compliant footings, foundation walls, and slab-on-grade construction for homes, garages, and light commercial buildings. Proper reinforcement and vapor barriers throughout.",
    images: [
      { src: "/images/foundations/foundations.jpg", caption: "Foundation pour" },
      { src: "/images/foundations/slab_on_grade.jpeg", caption: "Slab on grade" },
    ],
  },
];

const showcaseImages = [
  { src: "/images/services/stone_patio.jpg", caption: "Stone patio" },
  { src: "/images/services/fire_pit_waterfall.jpg", caption: "Fire pit with waterfall" },
  { src: "/images/services/stone_table.jpg", caption: "Stone table" },
  { src: "/images/services/water_feature.jpg", caption: "Water feature" },
  { src: "/images/services/image000008.JPG", caption: "Project showcase" },
  { src: "/images/services/stone_driveway.jpg", caption: "Stone driveway" },
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

      {/* Service categories with photos */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-24">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl tracking-tighter leading-none font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {category.summary}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.images.map((image) => (
                  <figure key={image.src} className="flex flex-col gap-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.caption}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <figcaption className="text-sm text-muted-foreground">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase gallery */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-bold text-foreground">
              Project Showcase
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-[65ch]">
              A selection of completed work across Montana
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {showcaseImages.map((image) => (
              <figure key={image.src} className="flex flex-col gap-2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.caption}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">
                  {image.caption}
                </figcaption>
              </figure>
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
            Trust us to deliver lasting results with precision and craftsmanship. Get your free estimate today.
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
