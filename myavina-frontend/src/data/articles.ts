export interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
  updatedDate: string;
  readTime: string;
  image: string;
  excerpt: string;
  longDescription: string;
  author: { name: string; role: string; image: string };
  sections: { heading: string; content: string; images?: string[] }[];
  relatedArticles: string[];
}

export const articles: Article[] = [
  {
    slug: "drynes-article-1",
    category: "Drynes",
    title: "Drynes: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-2",
      "drynes-article-3",
      "drynes-article-4",
    ]
  },
  {
    slug: "drynes-article-2",
    category: "Drynes",
    title: "Drynes: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-3",
      "drynes-article-4",
    ]
  },
  {
    slug: "drynes-article-3",
    category: "Drynes",
    title: "Drynes: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-4",
    ]
  },
  {
    slug: "drynes-article-4",
    category: "Drynes",
    title: "Drynes: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-3",
    ]
  },
  {
    slug: "drynes-article-5",
    category: "Drynes",
    title: "Drynes: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-3",
    ]
  },
  {
    slug: "drynes-article-6",
    category: "Drynes",
    title: "Drynes: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-3",
    ]
  },
  {
    slug: "drynes-article-7",
    category: "Drynes",
    title: "Drynes: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-3",
    ]
  },
  {
    slug: "drynes-article-8",
    category: "Drynes",
    title: "Drynes: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to drynes and how to manage it effectively.",
    longDescription: "This article explores drynes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Drynes", content: "A short overview of drynes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to drynes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of drynes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing drynes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of drynes." },
    ],
    relatedArticles: [
      "drynes-article-1",
      "drynes-article-2",
      "drynes-article-3",
    ]
  },
  {
    slug: "hot-flashes-article-1",
    category: "Hot Flashes",
    title: "Hot Flashes: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-2",
      "hot-flashes-article-3",
      "hot-flashes-article-4",
    ]
  },
  {
    slug: "hot-flashes-article-2",
    category: "Hot Flashes",
    title: "Hot Flashes: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-3",
      "hot-flashes-article-4",
    ]
  },
  {
    slug: "hot-flashes-article-3",
    category: "Hot Flashes",
    title: "Hot Flashes: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-4",
    ]
  },
  {
    slug: "hot-flashes-article-4",
    category: "Hot Flashes",
    title: "Hot Flashes: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-3",
    ]
  },
  {
    slug: "hot-flashes-article-5",
    category: "Hot Flashes",
    title: "Hot Flashes: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-3",
    ]
  },
  {
    slug: "hot-flashes-article-6",
    category: "Hot Flashes",
    title: "Hot Flashes: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-3",
    ]
  },
  {
    slug: "hot-flashes-article-7",
    category: "Hot Flashes",
    title: "Hot Flashes: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-3",
    ]
  },
  {
    slug: "hot-flashes-article-8",
    category: "Hot Flashes",
    title: "Hot Flashes: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to hot flashes and how to manage it effectively.",
    longDescription: "This article explores hot flashes, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Hot Flashes", content: "A short overview of hot flashes for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to hot flashes and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of hot flashes to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing hot flashes effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of hot flashes." },
    ],
    relatedArticles: [
      "hot-flashes-article-1",
      "hot-flashes-article-2",
      "hot-flashes-article-3",
    ]
  },
  {
    slug: "lifestyle-article-1",
    category: "Lifestyle",
    title: "Lifestyle: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-2",
      "lifestyle-article-3",
      "lifestyle-article-4",
    ]
  },
  {
    slug: "lifestyle-article-2",
    category: "Lifestyle",
    title: "Lifestyle: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-3",
      "lifestyle-article-4",
    ]
  },
  {
    slug: "lifestyle-article-3",
    category: "Lifestyle",
    title: "Lifestyle: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-4",
    ]
  },
  {
    slug: "lifestyle-article-4",
    category: "Lifestyle",
    title: "Lifestyle: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-3",
    ]
  },
  {
    slug: "lifestyle-article-5",
    category: "Lifestyle",
    title: "Lifestyle: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-3",
    ]
  },
  {
    slug: "lifestyle-article-6",
    category: "Lifestyle",
    title: "Lifestyle: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-3",
    ]
  },
  {
    slug: "lifestyle-article-7",
    category: "Lifestyle",
    title: "Lifestyle: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-3",
    ]
  },
  {
    slug: "lifestyle-article-8",
    category: "Lifestyle",
    title: "Lifestyle: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to lifestyle and how to manage it effectively.",
    longDescription: "This article explores lifestyle, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Lifestyle", content: "A short overview of lifestyle for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to lifestyle and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of lifestyle to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing lifestyle effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of lifestyle." },
    ],
    relatedArticles: [
      "lifestyle-article-1",
      "lifestyle-article-2",
      "lifestyle-article-3",
    ]
  },
  {
    slug: "menopause-article-1",
    category: "Menopause",
    title: "Menopause: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-2",
      "menopause-article-3",
      "menopause-article-4",
    ]
  },
  {
    slug: "menopause-article-2",
    category: "Menopause",
    title: "Menopause: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-3",
      "menopause-article-4",
    ]
  },
  {
    slug: "menopause-article-3",
    category: "Menopause",
    title: "Menopause: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-4",
    ]
  },
  {
    slug: "menopause-article-4",
    category: "Menopause",
    title: "Menopause: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-3",
    ]
  },
  {
    slug: "menopause-article-5",
    category: "Menopause",
    title: "Menopause: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-3",
    ]
  },
  {
    slug: "menopause-article-6",
    category: "Menopause",
    title: "Menopause: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-3",
    ]
  },
  {
    slug: "menopause-article-7",
    category: "Menopause",
    title: "Menopause: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-3",
    ]
  },
  {
    slug: "menopause-article-8",
    category: "Menopause",
    title: "Menopause: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to menopause and how to manage it effectively.",
    longDescription: "This article explores menopause, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Menopause", content: "A short overview of menopause for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to menopause and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of menopause to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing menopause effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of menopause." },
    ],
    relatedArticles: [
      "menopause-article-1",
      "menopause-article-2",
      "menopause-article-3",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-1",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
      "mood-anxiety-&-depression-article-4",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-2",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-3",
      "mood-anxiety-&-depression-article-4",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-3",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-4",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-4",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-5",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-6",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-7",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
    ]
  },
  {
    slug: "mood-anxiety-&-depression-article-8",
    category: "Mood, Anxiety & Depression",
    title: "Mood, Anxiety & Depression: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to mood, anxiety & depression and how to manage it effectively.",
    longDescription: "This article explores mood, anxiety & depression, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Mood, Anxiety & Depression", content: "A short overview of mood, anxiety & depression for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to mood, anxiety & depression and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of mood, anxiety & depression to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing mood, anxiety & depression effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of mood, anxiety & depression." },
    ],
    relatedArticles: [
      "mood-anxiety-&-depression-article-1",
      "mood-anxiety-&-depression-article-2",
      "mood-anxiety-&-depression-article-3",
    ]
  },
  {
    slug: "relationships-article-1",
    category: "Relationships",
    title: "Relationships: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-2",
      "relationships-article-3",
      "relationships-article-4",
    ]
  },
  {
    slug: "relationships-article-2",
    category: "Relationships",
    title: "Relationships: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-3",
      "relationships-article-4",
    ]
  },
  {
    slug: "relationships-article-3",
    category: "Relationships",
    title: "Relationships: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-4",
    ]
  },
  {
    slug: "relationships-article-4",
    category: "Relationships",
    title: "Relationships: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-3",
    ]
  },
  {
    slug: "relationships-article-5",
    category: "Relationships",
    title: "Relationships: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-3",
    ]
  },
  {
    slug: "relationships-article-6",
    category: "Relationships",
    title: "Relationships: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-3",
    ]
  },
  {
    slug: "relationships-article-7",
    category: "Relationships",
    title: "Relationships: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-3",
    ]
  },
  {
    slug: "relationships-article-8",
    category: "Relationships",
    title: "Relationships: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to relationships and how to manage it effectively.",
    longDescription: "This article explores relationships, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Relationships", content: "A short overview of relationships for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to relationships and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of relationships to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing relationships effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of relationships." },
    ],
    relatedArticles: [
      "relationships-article-1",
      "relationships-article-2",
      "relationships-article-3",
    ]
  },
  {
    slug: "regenerative-care-article-1",
    category: "Regenerative Care",
    title: "Regenerative Care: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-2",
      "regenerative-care-article-3",
      "regenerative-care-article-4",
    ]
  },
  {
    slug: "regenerative-care-article-2",
    category: "Regenerative Care",
    title: "Regenerative Care: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-3",
      "regenerative-care-article-4",
    ]
  },
  {
    slug: "regenerative-care-article-3",
    category: "Regenerative Care",
    title: "Regenerative Care: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-4",
    ]
  },
  {
    slug: "regenerative-care-article-4",
    category: "Regenerative Care",
    title: "Regenerative Care: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-3",
    ]
  },
  {
    slug: "regenerative-care-article-5",
    category: "Regenerative Care",
    title: "Regenerative Care: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-3",
    ]
  },
  {
    slug: "regenerative-care-article-6",
    category: "Regenerative Care",
    title: "Regenerative Care: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-3",
    ]
  },
  {
    slug: "regenerative-care-article-7",
    category: "Regenerative Care",
    title: "Regenerative Care: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-3",
    ]
  },
  {
    slug: "regenerative-care-article-8",
    category: "Regenerative Care",
    title: "Regenerative Care: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to regenerative care and how to manage it effectively.",
    longDescription: "This article explores regenerative care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Regenerative Care", content: "A short overview of regenerative care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to regenerative care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of regenerative care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing regenerative care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of regenerative care." },
    ],
    relatedArticles: [
      "regenerative-care-article-1",
      "regenerative-care-article-2",
      "regenerative-care-article-3",
    ]
  },
  {
    slug: "preventive-care-article-1",
    category: "Preventive Care",
    title: "Preventive Care: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-2",
      "preventive-care-article-3",
      "preventive-care-article-4",
    ]
  },
  {
    slug: "preventive-care-article-2",
    category: "Preventive Care",
    title: "Preventive Care: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-3",
      "preventive-care-article-4",
    ]
  },
  {
    slug: "preventive-care-article-3",
    category: "Preventive Care",
    title: "Preventive Care: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-4",
    ]
  },
  {
    slug: "preventive-care-article-4",
    category: "Preventive Care",
    title: "Preventive Care: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-3",
    ]
  },
  {
    slug: "preventive-care-article-5",
    category: "Preventive Care",
    title: "Preventive Care: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-3",
    ]
  },
  {
    slug: "preventive-care-article-6",
    category: "Preventive Care",
    title: "Preventive Care: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-3",
    ]
  },
  {
    slug: "preventive-care-article-7",
    category: "Preventive Care",
    title: "Preventive Care: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-3",
    ]
  },
  {
    slug: "preventive-care-article-8",
    category: "Preventive Care",
    title: "Preventive Care: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to preventive care and how to manage it effectively.",
    longDescription: "This article explores preventive care, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Preventive Care", content: "A short overview of preventive care for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to preventive care and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of preventive care to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing preventive care effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of preventive care." },
    ],
    relatedArticles: [
      "preventive-care-article-1",
      "preventive-care-article-2",
      "preventive-care-article-3",
    ]
  },
  {
    slug: "women's-health-initiative-article-1",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Understanding the Basics",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
      "women's-health-initiative-article-4",
    ]
  },
  {
    slug: "women's-health-initiative-article-2",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Key Causes Explained",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-3",
      "women's-health-initiative-article-4",
    ]
  },
  {
    slug: "women's-health-initiative-article-3",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Symptoms You Should Know",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-4",
    ]
  },
  {
    slug: "women's-health-initiative-article-4",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Effective Treatments",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
    ]
  },
  {
    slug: "women's-health-initiative-article-5",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Prevention Strategies",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
    ]
  },
  {
    slug: "women's-health-initiative-article-6",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Expert Tips",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
    ]
  },
  {
    slug: "women's-health-initiative-article-7",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Common Myths",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
    ]
  },
  {
    slug: "women's-health-initiative-article-8",
    category: "Women's Health Initiative",
    title: "Women's Health Initiative: Latest Research Insights",
    date: "July 08, 2025",
    updatedDate: "July 25, 2025",
    readTime: "5 mins",
    image: "/images/learn/learn-1.png",
    excerpt: "A quick guide to women's health initiative and how to manage it effectively.",
    longDescription: "This article explores women's health initiative, offering insights into causes, symptoms, treatments, and prevention strategies to help women navigate this aspect of their health.",
    author: {
      name: "Dr. Sarah Perman, MD",
      role: "Medically Reviewed By",
      image: "/images/authors/dr-sarah.png"
    },
    sections: [
      { heading: "Introduction to Women's Health Initiative", content: "A short overview of women's health initiative for better understanding.", images: ["/images/learn/learn-1.png", "/images/learn/learn-1.png"] },
      { heading: "Causes", content: "Common causes related to women's health initiative and how they affect women." },
      { heading: "Symptoms", content: "Identifying key symptoms of women's health initiative to recognize it early." },
      { heading: "Treatment", content: "Popular treatment options for managing women's health initiative effectively." },
      { heading: "Prevention", content: "Simple prevention tips to reduce the impact of women's health initiative." },
    ],
    relatedArticles: [
      "women's-health-initiative-article-1",
      "women's-health-initiative-article-2",
      "women's-health-initiative-article-3",
    ]
  },
];