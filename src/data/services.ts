import {
  Layers,
  RefreshCw,
  Shapes,
  Shield,
  Home,
  Flame,
  Trees,
  Hammer,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  seoDescription: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "decorative-stamped-concrete",
    title: "Decorative & Stamped Concrete",
    description:
      "Custom stamped and decorative concrete that replicates the look of natural stone, brick, or slate. Sealed for UV and weather resistance.",
    seoDescription:
      "Stamped concrete contractor in Billings, MT offering decorative concrete patios, driveways, and walkways with stone, brick, and slate patterns sealed for Montana weather.",
    icon: Shapes,
    image: "/images/services/Stamped_concrete_compass.jpg",
    imageAlt: "Stamped concrete compass inlay in Billings MT",
  },
  {
    slug: "patios-driveways-flatwork",
    title: "Patios, Driveways & Flatwork",
    description:
      "Driveways, patios, walkways, and sidewalks poured and finished with attention to grading, reinforcement, and joint placement.",
    seoDescription:
      "Concrete flatwork contractor in Billings, MT specializing in concrete driveways, patios, walkways, and sidewalks built to handle Montana freeze-thaw cycles.",
    icon: Home,
    image: "/images/services/concrete_flatwork.jpeg",
    imageAlt: "Concrete flatwork driveway and patio in Billings MT",
  },
  {
    slug: "stone-work-outdoor-features",
    title: "Stone Work & Outdoor Features",
    description:
      "Custom stone patios, walkways, fire pits, and water features that shape your landscape and add lasting visual structure.",
    seoDescription:
      "Custom stone work and outdoor concrete features in Billings, MT including stone patios, fire pits, water features, and walkways built for Montana landscapes.",
    icon: Flame,
    image: "/images/services/firepit_active.jpg",
    imageAlt: "Custom stone fire pit outdoor feature in Billings MT",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    description:
      "Retaining walls engineered to handle soil pressure and drainage, preventing erosion while adding clean visual structure.",
    seoDescription:
      "Concrete and stone retaining wall contractor in Billings, MT building engineered retaining walls for erosion control, drainage, and landscape structure.",
    icon: Trees,
    image: "/images/services/retaining_walls.jpeg",
    imageAlt: "Concrete retaining wall in Billings MT",
  },
  {
    slug: "foundations-slab-on-grade",
    title: "Foundations & Slab on Grade",
    description:
      "Code-compliant footings, foundation walls, and slab-on-grade construction for homes, garages, and light commercial buildings.",
    seoDescription:
      "Concrete foundation and slab on grade contractor in Billings, MT providing code-compliant footings, foundation walls, and slab-on-grade for residential and commercial builds.",
    icon: Hammer,
    image: "/images/foundations/foundations.jpg",
    imageAlt: "Concrete foundation pour in Billings MT",
  },
  {
    slug: "polished-concrete",
    title: "Polished Concrete",
    description:
      "Smooth, glossy polished concrete surfaces ideal for garages, basements, and commercial interiors.",
    seoDescription:
      "Polished concrete contractor in Billings, MT delivering smooth, glossy polished concrete floors for garages, basements, and commercial interiors.",
    icon: Layers,
    image: "/images/services/stone_patio_floor.jpeg",
    imageAlt: "Polished concrete floor surface in Billings MT",
  },
  {
    slug: "concrete-restoration",
    title: "Concrete Restoration",
    description:
      "Cost-effective resurfacing and restoration to rejuvenate worn or damaged concrete surfaces without full replacement.",
    seoDescription:
      "Concrete restoration and resurfacing in Billings, MT repairing and rejuvenating worn or damaged concrete driveways, patios, and walkways without full replacement.",
    icon: RefreshCw,
    image: "/images/services/stone_work.jpg",
    imageAlt: "Concrete restoration and resurfacing in Billings MT",
  },
  {
    slug: "custom-concrete-solutions",
    title: "Custom Concrete Solutions",
    description:
      "Custom concrete solutions finished with a penetrating sealer for superb weather and UV resistance, tailored to your property.",
    seoDescription:
      "Custom decorative concrete solutions in Billings, MT sealed for UV and weather resistance, tailored to residential and commercial properties across Montana.",
    icon: Shield,
    image: "/images/services/stone_entry_patio.jpeg",
    imageAlt: "Custom decorative concrete entry patio in Billings MT",
  },
];

export const SHOWCASE_IMAGES = [
  { src: "/images/services/stone_patio.jpg", caption: "Stone patio" },
  { src: "/images/services/Stamped_concrete_compass.jpg", caption: "Stamped concrete inlay" },
  { src: "/images/services/firepit_active.jpg", caption: "Custom fire pit" },
  { src: "/images/services/retaining_walls.jpeg", caption: "Retaining wall" },
  { src: "/images/foundations/foundations.jpg", caption: "Foundation pour" },
  { src: "/images/services/stone_water_fountain.jpg", caption: "Stone water fountain" },
  { src: "/images/services/fire_pit_waterfall.jpg", caption: "Fire pit with waterfall" },
  { src: "/images/services/stone_table.jpg", caption: "Stone table" },
  { src: "/images/services/water_feature.jpg", caption: "Water feature" },
  { src: "/images/services/Concrete_walkway_side.jpg", caption: "Concrete walkway" },
  { src: "/images/services/stone_walkway_treepit.jpg", caption: "Stone walkway with tree pit" },
  { src: "/images/services/image000008.JPG", caption: "Project showcase" },
];

export function buildLocalizedSeoParagraph(locationName: string): string {
  return `Artistic Decorative Concrete is the trusted decorative concrete contractor in ${locationName}, MT for stamped concrete patios, concrete driveways, retaining walls, foundations, slab-on-grade, and polished concrete floors. We have served ${locationName} and the surrounding Montana communities since 2006, delivering residential and commercial concrete built to withstand Montana freeze-thaw cycles. Call (406) 598-2444 for a free estimate on your ${locationName} concrete project.`;
}
