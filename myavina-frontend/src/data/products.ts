// data/products.ts

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  slug: string;
  description: string;
  benefits: string[];
  usage: string;
  ingredients: string[];
  safety?: string;
  faqs?: ProductFAQ[]; // ✅ New optional FAQs array
}

export const products: Product[] = [
  {
    id: "1",
    name: "Progesterone Capsules",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Body Creams",
    slug: "progesterone-capsules",
    description: "Supports hormone balance and overall wellness. Ideal for menopause symptom relief.",
    benefits: [
      "Helps regulate menstrual cycles",
      "Reduces menopause symptoms",
      "Improves sleep quality"
    ],
    usage: "Take one capsule daily, preferably at bedtime.",
    ingredients: [
      "Micronized Progesterone",
      "Vegetable Cellulose",
      "Silica",
      "Magnesium Stearate"
    ],
    faqs: [
      {
        q: "Why would I need both estrogen and progesterone?",
        a: "Both hormones work together to provide comprehensive menopause symptom relief and hormonal balance."
      },
      {
        q: "Is progesterone safe to use in a cream?",
        a: "Yes, topical progesterone is considered safe when used as directed by a healthcare provider."
      },
      {
        q: 'What does "bioest" mean?',
        a: "Bioest refers to bioidentical estrogen that matches your body's natural hormone structure."
      },
      {
        q: "Why isn't the bottle full?",
        a: "The bottle contains the exact amount needed for your prescribed dosage and treatment duration."
      },
      {
        q: "Is the progesterone in the cream safe if I have a peanut allergy?",
        a: "Please consult with your healthcare provider about any allergies before starting treatment."
      }
    ],
    safety: "Consult your healthcare provider before use, especially if you have a history of hormone-sensitive conditions.",

  },
  {
    id: "2",
    name: "Estrogen Cream",
    price: "$49/month",
    image: "/Images/products/product.png",
    rating: 4.5,
    category: "Body Creams",
    slug: "estrogen-cream",
    description: "Topical cream to help alleviate menopause symptoms like hot flashes and mood swings.",
    benefits: [
      "Reduces hot flashes and night sweats",
      "Improves skin elasticity",
      "Supports mood stability"
    ],
    usage: "Apply a pea-sized amount to clean, dry skin once daily.",
    ingredients: [
      "Bioidentical Estrogen",
      "Aloe Vera Extract",
      "Vitamin E",
      "Jojoba Oil"
    ],
    faqs: [
      {
        q: "How long does it take to feel the effects?",
        a: "Many users report symptom relief within 1-2 weeks of consistent use."
      },
      {
        q: "Can I use this cream with other medications?",
        a: "Consult your healthcare provider to ensure no interactions with your current medications."
      }
    ],
  },
  {
    id: "3",
    name: "Menopause Relief Bundle",
    price: "$79/month",
    image: "/Images/products/product.png",
    rating: 4.8,
    category: "Bundles",
    slug: "menopause-relief-bundle",
    description: "A comprehensive bundle including progesterone capsules and estrogen cream for holistic menopause support.",
    benefits: [
      "Combines benefits of both progesterone and estrogen",
      "Convenient monthly supply",
      "Tailored for menopause symptom relief"
    ],
    usage: "Take one capsule daily and apply cream as directed.",
    ingredients: [
      "Progesterone Capsules",
      "Estrogen Cream"
    ],
    faqs: [
      {
        q: "What is included in the bundle?",
        a: "The bundle includes both progesterone capsules and estrogen cream for complete menopause support."
      },
      {
        q: "Is this bundle more cost-effective?",
        a: "Yes, purchasing the bundle saves you compared to buying each product separately."
      }
    ],
  },
  {
    id: "4",
    name: "Hormone Harmony Drops",
    price: "$29/month",
    image: "/Images/products/product.png",
    rating: 4.2,
    category: "Drops",
    slug: "hormone-harmony-drops",
    description: "Liquid drops formulated to help balance hormones and reduce menopause symptoms.",
    benefits: [
      "Supports hormonal balance",
      "Reduces mood swings",
      "Enhances energy levels"
    ],
    usage: "Take 10 drops under the tongue twice daily.",
    ingredients: [
      "Natural Herbal Extracts",
      "Vitamin D3",
      "Zinc"
    ],
    faqs: [
      {
        q: "How do I take the drops?",
        a: "Place 10 drops under your tongue and hold for 30 seconds before swallowing."
      },
      {
        q: "Can I mix the drops with water?",
        a: "For best results, take the drops directly without mixing with other liquids."
      }
    ],
  }
 ,
  {
    id: "5",
    name: "Calm & Cool Tea",
    price: "$19/month",
    image: "/Images/products/product.png",
    rating: 4.0,
    category: "Teas",
    slug: "calm-cool-tea",
    description: "Herbal tea blend designed to promote relaxation and reduce stress during menopause.",
    benefits: [
      "Promotes relaxation and calmness",
      "Supports digestive health",
      "Helps with sleep quality"
    ],
    usage: "Steep one tea bag in hot water for 5-7 minutes, drink once daily.",
    ingredients: [
      "Chamomile",
      "Lemon Balm",
      "Peppermint"
    ],
    faqs: [
      {
        q: "How often can I drink this tea?",
        a: "You can enjoy this tea daily to help manage stress and promote relaxation."
      },
      {
        q: "Is this tea caffeine-free?",
        a: "Yes, Calm & Cool Tea is naturally caffeine-free."
      }
    ],
  },
  {
    id: "6",
    name: "Vitality Multivitamin",
    price: "$24/month",
    image: "/Images/products/product.png",
    rating: 4.7,
    category: "Supplements",
    slug: "vitality-multivitamin",
    description: "Daily multivitamin formulated to support overall health and wellness during menopause.",
    benefits: [
      "Boosts immune system",
      "Supports bone health",
      "Enhances energy levels"
    ],
    usage: "Take one tablet daily with food.",
    ingredients: [
      "Vitamins A, C, D, E, K",
      "B Vitamins",
      "Zinc",
      "Magnesium"
    ],
    faqs: [
      {
        q: "Can I take this multivitamin with other supplements?",
        a: "Yes, but consult your healthcare provider for personalized advice."
      },
      {
        q: "Is this multivitamin suitable for vegetarians?",
        a: "Yes, Vitality Multivitamin is vegetarian-friendly."
      }
    ],
  },
  {
    id: "7",
    name: "Menopause Support Probiotic",
    price: "$34/month",
    image: "/Images/products/product.png",
    rating: 4.3,
    category: "Probiotics",
    slug: "menopause-support-probiotic",
    description: "Probiotic supplement designed to support digestive health and hormonal balance during menopause.",
    benefits: [
      "Promotes gut health",
      "Supports immune function",
      "Helps with hormonal balance"
    ],
    usage: "Take one capsule daily with water.",
    ingredients: [
      "Lactobacillus Acidophilus",
      "Bifidobacterium Bifidum",
      "Prebiotic Fiber"
    ],
    faqs: [
      {
        q: "How long does it take to see results?",
        a: "Many users notice improvements in digestion and energy levels within a few weeks."
      },
      {
        q: "Can I take this probiotic with antibiotics?",
        a: "Consult your healthcare provider before combining probiotics with antibiotics."
      }
    ],
  },
  {
    id: "8",
    name: "Mood Boost Essential Oil Blend",
    price: "$15/month",
    image: "/Images/products/product.png",
    rating: 4.6,
    category: "Essential Oils",
    slug: "mood-boost-essential-oil-blend",
    description: "A calming essential oil blend to help uplift mood and reduce stress during menopause.",
    benefits: [
      "Enhances mood and emotional well-being",
      "Reduces anxiety and stress",
      "Promotes relaxation"
    ],
    usage: "Diffuse in a diffuser or apply diluted to pulse points.",
    ingredients: [
      "Lavender Oil",
      "Bergamot Oil",
      "Ylang Ylang Oil"
    ],
    faqs: [
      {
        q: "How do I use this essential oil blend?",
        a: "You can diffuse it in a diffuser or apply it diluted to your pulse points."
      },
      {
        q: "Is this essential oil safe for sensitive skin?",
        a: "Always dilute essential oils before applying to the skin, especially if you have sensitive skin."
      }
    ],
  },
  {
    id: "9",
    name: "Sleep Well Herbal Supplement",
    price: "$22/month",
    image: "/Images/products/product.png",
    rating: 4.1,
    category: "Supplements",
    slug: "sleep-well-herbal-supplement",
    description: "Herbal supplement designed to promote restful sleep and reduce insomnia during menopause.",
    benefits: [
      "Supports restful sleep",
      "Reduces insomnia symptoms",
      "Promotes relaxation"
    ],
    usage: "Take two capsules 30 minutes before bedtime.",
    ingredients: [
      "Valerian Root Extract",
      "L-Theanine",
      "Melatonin"
    ],
    faqs: [
      {
        q: "How long before bed should I take this supplement?",
        a: "Take it 30 minutes before bedtime for best results."
      },
      {
        q: "Is this supplement habit-forming?",
        a: "No, Sleep Well is formulated to be non-habit forming."
      }
    ],
  },
  {
    id: "10",
    name: "Hydration Boost Electrolyte Powder",
    price: "$18/month",
    image: "/Images/products/product.png",
    rating: 4.4,
    category: "Hydration",
    slug: "hydration-boost-electrolyte-powder",
    description: "Electrolyte powder to help maintain hydration and energy levels during menopause.",
    benefits: [
      "Replenishes electrolytes lost through sweat",
      "Supports hydration and energy levels",
      "Helps reduce fatigue"
    ],
    usage: "Mix one scoop with 8-12 oz of water and drink before or after exercise.",
    ingredients: [
      "Sodium Chloride",
      "Potassium Citrate",
      "Magnesium Citrate"
    ],
    faqs: [
      {
        q: "Can I use this electrolyte powder daily?",
        a: "Yes, it can be used daily to support hydration, especially during exercise."
      },
      {
        q: "Is this product gluten-free?",
        a: "Yes, Hydration Boost is gluten-free."
      }
    ],
  },
  {
    id: "11",
    name: "Stress Relief Aromatherapy Roll-On",
    price: "$12/month",
    image: "/Images/products/product.png",
    rating: 4.5,
    category: "Aromatherapy",
    slug: "stress-relief-aromatherapy-roll-on",
    description: "Convenient roll-on blend to help reduce stress and promote relaxation throughout the day.",
    benefits: [
      "Easy to apply on-the-go",
      "Promotes relaxation and calmness",
      "Reduces stress and anxiety"
    ],
    usage: "Roll onto pulse points as needed throughout the day.",
    ingredients: [
      "Lavender Oil",
      "Frankincense Oil",
      "Coconut Oil"
    ],
    faqs: [
      {
        q: "How often can I use this roll-on?",
        a: "You can use it as often as needed to help manage stress."
      },
      {
        q: "Is this product safe for sensitive skin?",
        a: "Yes, but always do a patch test before full application."
      }
    ],
  },
  {
    id: "12",
    name: "Joint Support Formula",
    price: "$27/month",
    image: "/Images/products/product.png",
    rating: 4.3,
    category: "Supplements",
    slug: "joint-support-formula",
    description: "Supplement designed to support joint health and mobility during menopause.",
    benefits: [
      "Supports joint flexibility",
      "Reduces discomfort and stiffness",
      "Promotes overall joint health"
    ],
    usage: "Take two capsules daily with meals.",
    ingredients: [
      "Glucosamine Sulfate",
      "Chondroitin Sulfate",
      "Turmeric Extract"
    ],
    faqs: [
      {
        q: "How long does it take to see results?",
        a: "Many users report improved joint comfort within 4-6 weeks of consistent use."
      },
      {
        q: "Can I take this with other joint supplements?",
        a: "Consult your healthcare provider for personalized advice on combining supplements."
      }
    ],
  },
  {
    id: "13",
    name: "Energy Boost Herbal Blend",
    price: "$20/month",
    image: "/Images/products/product.png",
    rating: 4.6,
    category: "Herbal Blends",
    slug: "energy-boost-herbal-blend",
    description: "Herbal blend designed to naturally boost energy levels and combat fatigue during menopause.",
    benefits: [
      "Enhances energy and vitality",
      "Reduces fatigue",
      "Supports mental clarity"
    ],
    usage: "Take one teaspoon in warm water or tea twice daily.",
    ingredients: [
      "Ginseng Root",
      "Ashwagandha",
      "Green Tea Extract"
    ],
    faqs: [
      {
        q: "How quickly can I expect an energy boost?",
        a: "Many users feel increased energy within 30 minutes of consumption."
      },
      {
        q: "Is this blend safe for daily use?",
        a: "Yes, it is formulated for daily use to support sustained energy levels."
      }
    ],
  }
];
