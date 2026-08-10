export interface Review {
  author: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  hasReply?: boolean;
}

export const GOOGLE_BUSINESS_URL = "https://share.google/sEh0QIiwbGpCY3nN7";

export const REVIEWS: Review[] = [
  {
    author: "Bill Strong",
    initials: "BS",
    rating: 5,
    date: "3 weeks ago",
    text: "Great price. They did an excellent job as promised. Dustin and crew were awesome!",
    hasReply: true,
  },
  {
    author: "Echo Fritz",
    initials: "EF",
    rating: 5,
    date: "6 weeks ago",
    text: "Thank you Echo, for review. We truly appreciate your support and are grateful you chose our team. It was a pleasure working with you.",
    hasReply: true,
  },
  {
    author: "Shane Wells",
    initials: "SW",
    rating: 5,
    date: "11 weeks ago",
    text: "Great price. Very friendly, fast, affordable. Got it done — driveway and sidewalk. Will not use anybody else, these are the go-to guys.",
  },
  {
    author: "Corey Salter",
    initials: "CS",
    rating: 5,
    date: "12 weeks ago",
    text: "Great price. Hired Chuck for a big project without knowing much about him. Him and his boys absolutely knocked it out of the park!",
    hasReply: true,
  },
  {
    author: "Mitch Selbe",
    initials: "MS",
    rating: 5,
    date: "12 weeks ago",
    text: "We were contracted to build a large patio and structure here in Laurel, Montana. Being from Kansas City we didn't know who to trust, and Artistic Decorative Concrete delivered beyond expectations.",
    hasReply: true,
  },
  {
    author: "Bill Isaacks",
    initials: "BI",
    rating: 5,
    date: "14 weeks ago",
    text: "This company is absolutely amazing. These guys did a retaining decorative wall at my home — this wall was massive, standing tall and looking incredible.",
    hasReply: true,
  },
  {
    author: "Keith Miller",
    initials: "KM",
    rating: 5,
    date: "14 weeks ago",
    text: "Very good work and a job well done, fast. Great people to work with.",
    hasReply: true,
  },
  {
    author: "Jordan Mueller",
    initials: "JM",
    rating: 5,
    date: "14 weeks ago",
    text: "Outstanding work from start to finish. Highly recommend Artistic Decorative Concrete.",
    hasReply: true,
  },
  {
    author: "Justin Rife",
    initials: "JR",
    rating: 5,
    date: "14 weeks ago",
    text: "Great price. Chuck and his crew are fantastic! They treat people fair and do excellent work. I highly recommend them.",
    hasReply: true,
  },
  {
    author: "Jeff Rupp",
    initials: "JR",
    rating: 5,
    date: "14 weeks ago",
    text: "I couldn't be happier with the work from this concrete and excavation team. They were professional, dependable, and delivered excellent results.",
    hasReply: true,
  },
  {
    author: "Rosalee Rupp",
    initials: "RR",
    rating: 5,
    date: "14 weeks ago",
    text: "Great price. Chuck is a beast! He comes in and knocks it out of the park! He did a bunch of dirt work for us — excavating an old pond. The man knows how to move dirt!",
    hasReply: true,
  },
  {
    author: "Erika Lopez",
    initials: "EL",
    rating: 5,
    date: "16 weeks ago",
    text: "Great price. These guys have been amazing start to finish.",
    hasReply: true,
  },
  {
    author: "Lesli G",
    initials: "LG",
    rating: 5,
    date: "17 weeks ago",
    text: "Artistic Decorative Concrete does beautiful work. The owner is involved from the planning stage all the way to the end. Highly recommend.",
    hasReply: true,
  },
  {
    author: "Devidwarner",
    initials: "DW",
    rating: 5,
    date: "17 weeks ago",
    text: "After working with several concrete contractors in the past, Artistic Decorative Concrete was a breath of fresh air. Professional, on-time, and top-quality work.",
  },
  {
    author: "Henry Parker",
    initials: "HP",
    rating: 5,
    date: "17 weeks ago",
    text: "We hired Artistic Decorative Concrete for our commercial concrete foundation and they knocked it out of the park. From start to finish, everything was handled professionally.",
    hasReply: true,
  },
  {
    author: "Sam William",
    initials: "SW",
    rating: 5,
    date: "17 weeks ago",
    text: "Artistic Decorative Concrete did an outstanding job on our commercial concrete foundation. The team was professional, skilled, and delivered on time.",
  },
  {
    author: "Jessica Graesser",
    initials: "JG",
    rating: 5,
    date: "18 weeks ago",
    text: "Great price. Chuck with Artistic Concrete Designs is great to work with. Chuck and his team don't mess around — they work quickly and efficiently. I highly recommend!",
  },
  {
    author: "Guffran Latif",
    initials: "GL",
    rating: 5,
    date: "18 weeks ago",
    text: "Artistic Decorative Concrete did an amazing job on our concrete flatwork. The finish was smooth, clean, and incredibly durable.",
  },
  {
    author: "Daniel Osse",
    initials: "DO",
    rating: 5,
    date: "23 May 2025",
    text: "These guys did a wonderful job on my patio.",
    hasReply: true,
  },
  {
    author: "Bob Jestrab",
    initials: "BJ",
    rating: 5,
    date: "17 Apr 2025",
    text: "Great job — crew went over and above to get the job done on time, quality work, and cleaned up the mess! Highly recommend!",
  },
  {
    author: "Mike Kinsey",
    initials: "MK",
    rating: 5,
    date: "22 Mar 2025",
    text: "When I hired Chuck and Mike to make a hearth for my woodstove there was over 2 feet of snow in my yard. Amazingly, Chuck still showed up and did incredible work.",
  },
];

export const REVIEW_STATS = {
  total: REVIEWS.length,
  averageRating: 5.0,
  googleUrl: GOOGLE_BUSINESS_URL,
};
