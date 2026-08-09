export interface LocationData {
  slug: string;
  name: string;
  heading: string;
  description: string;
  servicesHeading: string;
  servicesIntro: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  nearbyAreas: { name: string; slug: string }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "billings",
    name: "Billings",
    heading: "Decorative Concrete Services in Billings, MT",
    description:
      "When it comes to expert decorative concrete services in Billings, MT, Artistic Decorative Concrete delivers beautiful and durable results. We specialize in enhancing residential and commercial spaces through high-quality concrete finishes tailored to withstand Montana's climate.",
    servicesHeading: "Services Available in Billings",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Billings property.",
    ctaHeading: "Upgrade Your Billings Property",
    ctaDescription:
      "Transform your outdoor and indoor spaces today. Call (406) 598-2444 for a custom quote.",
    ctaButton: "Get a Custom Quote",
    seo: {
      title: "Decorative Concrete in Billings, MT | Artistic",
      description:
        "Artistic Decorative Concrete provides stamped concrete, polished floors, and resurfacing in Billings, MT. Get a custom quote for your property today.",
      canonical: "https://artisticdecorativeconcrete.com/billings",
    },
    nearbyAreas: [
      { name: "Laurel", slug: "laurel" },
      { name: "Huntley", slug: "huntley" },
      { name: "Columbus", slug: "columbus" },
    ],
  },
  {
    slug: "laurel",
    name: "Laurel",
    heading: "Decorative Concrete Services in Laurel, MT",
    description:
      "We proudly serve the Laurel, MT community with expert decorative concrete services designed to enhance both residential and commercial properties. Our skilled team uses innovative stamping, polishing, and resurfacing techniques to turn plain concrete into stunning surfaces.",
    servicesHeading: "Services Available in Laurel",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Laurel property.",
    ctaHeading: "Start Your Laurel Project",
    ctaDescription:
      "Enhance the value and curb appeal of your property. Call (406) 598-2444 to get started.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Laurel, MT | Artistic",
      description:
        "Artistic Decorative Concrete offers stamped concrete, polished concrete, and concrete restoration in Laurel, MT. Call (406) 598-2444 to get started.",
      canonical: "https://artisticdecorativeconcrete.com/laurel",
    },
    nearbyAreas: [
      { name: "Billings", slug: "billings" },
      { name: "Columbus", slug: "columbus" },
      { name: "Absarokee", slug: "absarokee" },
    ],
  },
  {
    slug: "columbus",
    name: "Columbus",
    heading: "Decorative Concrete Services in Columbus, MT",
    description:
      "Looking for reliable and professional concrete services in Columbus, MT? Artistic Decorative Concrete is your local expert for high-quality decorative, stamped, and polished concrete solutions.",
    servicesHeading: "Services Available in Columbus",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Columbus property.",
    ctaHeading: "Enhance Your Columbus Property",
    ctaDescription:
      "Get a custom quote for your concrete needs. Call (406) 598-2444 today.",
    ctaButton: "Get a Custom Quote",
    seo: {
      title: "Decorative Concrete in Columbus, MT | Artistic",
      description:
        "Reliable decorative concrete services in Columbus, MT: stamped concrete, polished flooring, and concrete resurfacing. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/columbus",
    },
    nearbyAreas: [
      { name: "Absarokee", slug: "absarokee" },
      { name: "Red Lodge", slug: "red-lodge" },
      { name: "Laurel", slug: "laurel" },
    ],
  },
  {
    slug: "roundup",
    name: "Roundup",
    heading: "Decorative Concrete Services in Roundup, MT",
    description:
      "We specialize in bringing artistic beauty and lasting strength to concrete surfaces across Roundup, MT. Transform ordinary driveways, patios, walkways, and floors into stunning custom designs that withstand Montana's changing weather.",
    servicesHeading: "Services Available in Roundup",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Roundup property.",
    ctaHeading: "Upgrade Your Roundup Space",
    ctaDescription:
      "Improve your property's value and appeal. Call (406) 598-2444 to schedule your free consultation.",
    ctaButton: "Schedule a Free Consultation",
    seo: {
      title: "Decorative Concrete in Roundup, MT | Artistic",
      description:
        "Artistic Decorative Concrete brings artistic beauty and lasting strength to concrete in Roundup, MT. Stamped, polished, and resurfaced concrete. Call today.",
      canonical: "https://artisticdecorativeconcrete.com/roundup",
    },
    nearbyAreas: [
      { name: "Billings", slug: "billings" },
      { name: "Huntley", slug: "huntley" },
      { name: "Hardin", slug: "hardin" },
    ],
  },
  {
    slug: "forsyth",
    name: "Forsyth",
    heading: "Decorative Concrete Services in Forsyth, MT",
    description:
      "Artistic Decorative Concrete proudly serves Forsyth, MT, as the premier provider of decorative concrete solutions for residential and commercial properties. We transform ordinary concrete surfaces into stunning works of art that are both stylish and resilient.",
    servicesHeading: "Services Available in Forsyth",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Forsyth property.",
    ctaHeading: "Transform Your Forsyth Property",
    ctaDescription:
      "Upgrade your outdoor or indoor spaces today. Call us at (406) 598-2444 to get a custom estimate.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Forsyth, MT | Artistic",
      description:
        "Artistic Decorative Concrete is Forsyth, MT's premier provider of stamped concrete, polished flooring, and concrete resurfacing for homes and businesses.",
      canonical: "https://artisticdecorativeconcrete.com/forsyth",
    },
    nearbyAreas: [
      { name: "Miles City", slug: "miles-city" },
      { name: "Hardin", slug: "hardin" },
      { name: "Huntley", slug: "huntley" },
    ],
  },
  {
    slug: "hardin",
    name: "Hardin",
    heading: "Decorative Concrete Services in Hardin, MT",
    description:
      "Artistic Decorative Concrete brings expert decorative concrete solutions to Hardin, MT. From stamped patios to polished floors and durable foundations, we deliver beautiful, long-lasting results for residential and commercial properties throughout the area.",
    servicesHeading: "Services Available in Hardin",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Hardin property.",
    ctaHeading: "Enhance Your Hardin Property",
    ctaDescription:
      "Ready to upgrade your concrete surfaces? Call (406) 598-2444 for a free estimate today.",
    ctaButton: "Get a Free Estimate",
    seo: {
      title: "Decorative Concrete in Hardin, MT | Artistic",
      description:
        "Artistic Decorative Concrete provides stamped concrete, polished floors, and concrete resurfacing in Hardin, MT. Call (406) 598-2444 for a free estimate.",
      canonical: "https://artisticdecorativeconcrete.com/hardin",
    },
    nearbyAreas: [
      { name: "Billings", slug: "billings" },
      { name: "Forsyth", slug: "forsyth" },
      { name: "Miles City", slug: "miles-city" },
    ],
  },
  {
    slug: "huntley",
    name: "Huntley",
    heading: "Decorative Concrete Services in Huntley, MT",
    description:
      "Serving Huntley, MT with pride, Artistic Decorative Concrete offers custom decorative concrete, driveways, patios, and foundations. Our experienced team combines craftsmanship with durable materials to create surfaces that stand up to Montana's climate.",
    servicesHeading: "Services Available in Huntley",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Huntley property.",
    ctaHeading: "Start Your Huntley Project",
    ctaDescription:
      "Transform your property with expert concrete work. Call (406) 598-2444 to get started.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Huntley, MT | Artistic",
      description:
        "Artistic Decorative Concrete offers stamped concrete, polished floors, and concrete resurfacing in Huntley, MT. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/huntley",
    },
    nearbyAreas: [
      { name: "Billings", slug: "billings" },
      { name: "Laurel", slug: "laurel" },
      { name: "Roundup", slug: "roundup" },
    ],
  },
  {
    slug: "red-lodge",
    name: "Red Lodge",
    heading: "Decorative Concrete Services in Red Lodge, MT",
    description:
      "Artistic Decorative Concrete proudly serves Red Lodge, MT with premium decorative concrete solutions. Whether you need a stamped patio, polished interior floors, or a durable driveway, our team delivers results that enhance the beauty and value of your property.",
    servicesHeading: "Services Available in Red Lodge",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Red Lodge property.",
    ctaHeading: "Enhance Your Red Lodge Property",
    ctaDescription:
      "Bring lasting beauty to your property. Call (406) 598-2444 for a free consultation.",
    ctaButton: "Get a Free Consultation",
    seo: {
      title: "Decorative Concrete in Red Lodge, MT | Artistic",
      description:
        "Artistic Decorative Concrete provides stamped concrete, polished floors, and concrete resurfacing in Red Lodge, MT. Call (406) 598-2444 for a free consultation.",
      canonical: "https://artisticdecorativeconcrete.com/red-lodge",
    },
    nearbyAreas: [
      { name: "Columbus", slug: "columbus" },
      { name: "Absarokee", slug: "absarokee" },
      { name: "Belfry", slug: "belfry" },
    ],
  },
  {
    slug: "absarokee",
    name: "Absarokee",
    heading: "Decorative Concrete Services in Absarokee, MT",
    description:
      "Artistic Decorative Concrete brings expert decorative concrete services to Absarokee, MT. We specialize in stamped concrete, polished flooring, and concrete resurfacing that transforms ordinary surfaces into stunning, durable features for homes and businesses.",
    servicesHeading: "Services Available in Absarokee",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Absarokee property.",
    ctaHeading: "Start Your Absarokee Project",
    ctaDescription:
      "Upgrade your property with custom concrete solutions. Call (406) 598-2444 to get started.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Absarokee, MT | Artistic",
      description:
        "Artistic Decorative Concrete offers stamped concrete, polished floors, and concrete resurfacing in Absarokee, MT. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/absarokee",
    },
    nearbyAreas: [
      { name: "Columbus", slug: "columbus" },
      { name: "Red Lodge", slug: "red-lodge" },
      { name: "Big Timber", slug: "big-timber" },
    ],
  },
  {
    slug: "miles-city",
    name: "Miles City",
    heading: "Decorative Concrete Services in Miles City, MT",
    description:
      "Artistic Decorative Concrete is proud to serve Miles City, MT with top-quality decorative concrete solutions. From stamped patios and driveways to polished floors and foundations, we deliver craftsmanship and durability that stands the test of time.",
    servicesHeading: "Services Available in Miles City",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Miles City property.",
    ctaHeading: "Enhance Your Miles City Property",
    ctaDescription:
      "Get a custom quote for your concrete project. Call (406) 598-2444 today.",
    ctaButton: "Get a Custom Quote",
    seo: {
      title: "Decorative Concrete in Miles City, MT | Artistic",
      description:
        "Artistic Decorative Concrete provides stamped concrete, polished floors, and concrete resurfacing in Miles City, MT. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/miles-city",
    },
    nearbyAreas: [
      { name: "Forsyth", slug: "forsyth" },
      { name: "Hardin", slug: "hardin" },
      { name: "Big Timber", slug: "big-timber" },
    ],
  },
  {
    slug: "big-timber",
    name: "Big Timber",
    heading: "Decorative Concrete Services in Big Timber, MT",
    description:
      "Artistic Decorative Concrete proudly serves Big Timber, MT with expert decorative concrete solutions. We create beautiful, durable concrete surfaces including stamped patios, polished floors, and sturdy driveways that enhance the value and appeal of any property.",
    servicesHeading: "Services Available in Big Timber",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Big Timber property.",
    ctaHeading: "Start Your Big Timber Project",
    ctaDescription:
      "Transform your property with custom concrete work. Call (406) 598-2444 to get started.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Big Timber, MT | Artistic",
      description:
        "Artistic Decorative Concrete offers stamped concrete, polished floors, and concrete resurfacing in Big Timber, MT. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/big-timber",
    },
    nearbyAreas: [
      { name: "Columbus", slug: "columbus" },
      { name: "Absarokee", slug: "absarokee" },
      { name: "Red Lodge", slug: "red-lodge" },
    ],
  },
  {
    slug: "belfry",
    name: "Belfry",
    heading: "Decorative Concrete Services in Belfry, MT",
    description:
      "Artistic Decorative Concrete brings professional decorative concrete services to Belfry, MT. We specialize in stamped concrete, polished flooring, and resurfacing that transforms ordinary surfaces into stunning, long-lasting features for residential and commercial properties.",
    servicesHeading: "Services Available in Belfry",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Belfry property.",
    ctaHeading: "Enhance Your Belfry Property",
    ctaDescription:
      "Ready to upgrade your concrete surfaces? Call (406) 598-2444 for a free estimate today.",
    ctaButton: "Get a Free Estimate",
    seo: {
      title: "Decorative Concrete in Belfry, MT | Artistic",
      description:
        "Artistic Decorative Concrete provides stamped concrete, polished floors, and concrete resurfacing in Belfry, MT. Call (406) 598-2444 for a free estimate.",
      canonical: "https://artisticdecorativeconcrete.com/belfry",
    },
    nearbyAreas: [
      { name: "Red Lodge", slug: "red-lodge" },
      { name: "Bridger", slug: "bridger" },
      { name: "Absarokee", slug: "absarokee" },
    ],
  },
  {
    slug: "bridger",
    name: "Bridger",
    heading: "Decorative Concrete Services in Bridger, MT",
    description:
      "Artistic Decorative Concrete proudly serves Bridger, MT with high-quality decorative concrete solutions. From stamped patios and driveways to polished floors and foundations, our experienced team delivers beautiful, durable results tailored to your property.",
    servicesHeading: "Services Available in Bridger",
    servicesIntro:
      "Complete professional concrete services tailored to meet the functional and aesthetic needs of every Bridger property.",
    ctaHeading: "Start Your Bridger Project",
    ctaDescription:
      "Transform your property with expert concrete work. Call (406) 598-2444 to get started.",
    ctaButton: "Call (406) 598-2444",
    seo: {
      title: "Decorative Concrete in Bridger, MT | Artistic",
      description:
        "Artistic Decorative Concrete offers stamped concrete, polished floors, and concrete resurfacing in Bridger, MT. Call (406) 598-2444 for a custom quote.",
      canonical: "https://artisticdecorativeconcrete.com/bridger",
    },
    nearbyAreas: [
      { name: "Belfry", slug: "belfry" },
      { name: "Red Lodge", slug: "red-lodge" },
      { name: "Billings", slug: "billings" },
    ],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}
