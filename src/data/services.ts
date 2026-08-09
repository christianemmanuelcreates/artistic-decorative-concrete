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
    icon: Shapes,
    image: "/images/services/Stamped_concrete_compass.jpg",
    imageAlt: "Stamped concrete compass inlay",
  },
  {
    slug: "patios-driveways-flatwork",
    title: "Patios, Driveways & Flatwork",
    description:
      "Driveways, patios, walkways, and sidewalks poured and finished with attention to grading, reinforcement, and joint placement.",
    icon: Home,
    image: "/images/services/concrete_flatwork.jpeg",
    imageAlt: "Concrete flatwork",
  },
  {
    slug: "stone-work-outdoor-features",
    title: "Stone Work & Outdoor Features",
    description:
      "Custom stone patios, walkways, fire pits, and water features that shape your landscape and add lasting visual structure.",
    icon: Flame,
    image: "/images/services/firepit_active.jpg",
    imageAlt: "Active fire pit",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    description:
      "Retaining walls engineered to handle soil pressure and drainage, preventing erosion while adding clean visual structure.",
    icon: Trees,
    image: "/images/services/retaining_walls.jpeg",
    imageAlt: "Retaining wall",
  },
  {
    slug: "foundations-slab-on-grade",
    title: "Foundations & Slab on Grade",
    description:
      "Code-compliant footings, foundation walls, and slab-on-grade construction for homes, garages, and light commercial buildings.",
    icon: Hammer,
    image: "/images/foundations/foundations.jpg",
    imageAlt: "Foundation pour",
  },
  {
    slug: "polished-concrete",
    title: "Polished Concrete",
    description:
      "Smooth, glossy polished concrete surfaces ideal for garages, basements, and commercial interiors.",
    icon: Layers,
    image: "/images/services/stone_patio_floor.jpeg",
    imageAlt: "Polished concrete surface",
  },
  {
    slug: "concrete-restoration",
    title: "Concrete Restoration",
    description:
      "Cost-effective resurfacing and restoration to rejuvenate worn or damaged concrete surfaces without full replacement.",
    icon: RefreshCw,
    image: "/images/services/stone_work.jpg",
    imageAlt: "Concrete restoration detail",
  },
  {
    slug: "custom-concrete-solutions",
    title: "Custom Concrete Solutions",
    description:
      "Custom concrete solutions finished with a penetrating sealer for superb weather and UV resistance, tailored to your property.",
    icon: Shield,
    image: "/images/services/stone_entry_patio.jpeg",
    imageAlt: "Custom stone entry patio",
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
