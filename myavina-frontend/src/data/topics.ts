export interface Topic {
  name: string;
  slug: string;
  description: string;
  image: string;
  longDescription: string;
}

export const topics: Topic[] = [
  {
    name: "Drynes",
    slug: "drynes",
    description: "Understand and manage vaginal dryness with expert advice.",
    image: "/images/learn/learn-1.png",
    longDescription: "Vaginal dryness is a common symptom during menopause. Learn its causes and effective ways to manage it for better comfort."
  },
  {
    name: "Hot Flashes",
    slug: "hot-flashes",
    description: "Explore tips to manage hot flashes and stay comfortable.",
    image: "/images/learn/learn-1.png",
    longDescription: "A hot flash feels like a sudden wave of heat that spreads through the body, often bringing a flushed face and sweating. They can also cause a racing heartbeat, dizziness, or anxiety for some women. The good news? There are simple ways to ease hot flashes — like wearing light clothing, avoiding triggers such as spicy foods or alcohol, and practicing stress-relieving habits like deep breathing. Hormone replacement therapy (HRT) can also help reduce hot flashes and protect your overall health if they’re severe. Knowing what to expect and how to manage them can make a real difference in your day-to-day comfort"
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Healthy living tips for women during and after menopause.",
    image: "/images/learn/learn-1.png",
    longDescription: "Your lifestyle plays a big role in managing menopause symptoms. Find tips for diet, exercise, and overall well-being."
  },
  {
    name: "Menopause",
    slug: "menopause",
    description: "Learn everything you need to know about menopause.",
    image: "/images/learn/learn-1.png",
    longDescription: "Menopause marks a significant life stage. Understand the changes, symptoms, and treatments to navigate it confidently."
  },
  {
    name: "Mood, Anxiety & Depression",
    slug: "mood-anxiety-depression",
    description: "Manage emotional changes during menopause.",
    image: "/images/learn/learn-1.png",
    longDescription: "Menopause can affect mood, causing anxiety or depression. Learn coping mechanisms and when to seek professional help."
  },
  {
    name: "Relationships",
    slug: "relationships",
    description: "Navigate relationship changes during menopause.",
    image: "/images/learn/learn-1.png",
    longDescription: "Hormonal changes can impact relationships. Discover communication tips and strategies for intimacy."
  },
  {
    name: "Regenerative Care",
    slug: "regenerative-care",
    description: "Discover regenerative treatments for women's health.",
    image: "/images/learn/learn-1.png",
    longDescription: "Regenerative care can help restore tissue health and function during menopause. Learn more about available therapies."
  },
  {
    name: "Preventive Care",
    slug: "preventive-care",
    description: "Stay proactive with preventive health measures.",
    image: "/images/learn/learn-1.png",
    longDescription: "Preventive care helps detect issues early and maintain well-being. Explore screenings and healthy habits."
  },
  {
    name: "Women's Health Initiative",
    slug: "womens-health-initiative",
    description: "Insights from the Women's Health Initiative studies.",
    image: "/images/learn/learn-1.png",
    longDescription: "The Women's Health Initiative provides valuable data on women's health. Learn what it means for you."
  }
];
