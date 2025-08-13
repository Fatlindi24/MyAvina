// src/data/testimonials.ts
export type Testimonial = {
    id: number; // Unique identifier for each testimonial
    stars: 1 | 2 | 3 | 4 | 5;
    text: string;
    name: string;
    role: string;
    date: string;        // e.g. "07/07/25"
    avatar: string;      // path to image
  };
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,  
      stars: 5,
      text:
        "After struggling for years, MyAvina’s treatments finally gave me relief from my night sweats. I sleep through the night now — it’s life-changing.",
      name: "Monica L.",
      role: "Verified Buyer",
      date: "07/07/25",
      avatar: "/Images/authors/dr-sarah.png", 
    },
    { 
        id: 2,
      stars: 2,
      text:
        "I felt listened to and supported from day one. My customized plan really helped balance my hormones and my mood is so much better.",
      name: "Monica L.",
      role: "Verified Buyer",
      date: "07/07/25",
      avatar: "/Images/authors/dr-sarah.png",
    },
    {
        id: 3,
        stars: 4,
      text:
        "Hot flashes and brain fog were ruining my days. MyAvina made it easy to get real help, delivered discreetly to my door.",
      name: "Monica L.",
      role: "Verified Buyer",
      date: "07/07/25",
      avatar: "/Images/authors/dr-sarah.png",
    },
    {
        id: 4,
        stars: 4,
      text:
        "Hot flashes and brain fog were ruining my days. MyAvina made it easy to get real help, delivered discreetly to my door.",
      name: "Monica L.",
      role: "Verified Buyer",
      date: "07/07/25",
      avatar: "/Images/authors/dr-sarah.png",
    },
    {
        id: 5,
        stars: 4,
      text:
        "Hot flashes and brain fog were ruining my days. MyAvina made it easy to get real help, delivered discreetly to my door.",
      name: "Monica L.",
      role: "Verified Buyer",
      date: "07/07/25",
      avatar: "/Images/authors/dr-sarah.png",
    },
  ];
  