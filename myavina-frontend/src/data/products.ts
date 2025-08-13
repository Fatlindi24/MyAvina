// data/products.ts

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
    ]
  },
  {
    id: "2",
    name: "Estrogen Patch",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 4,
    category: "Body Creams",
    slug: "estrogen-patch",
    description: "Estrogen patches deliver consistent hormone therapy through the skin.",
    benefits: [
      "Reduces hot flashes and night sweats",
      "Improves mood and energy",
      "Promotes skin hydration"
    ],
    usage: "Apply to clean, dry skin on the lower abdomen. Replace twice weekly.",
    ingredients: [
      "Estradiol",
      "Acrylic Adhesive",
      "Backing Film"
    ]
  },
  {
    id: "3",
    name: "Estrogen Patch 2",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 4,
    category: "Testosterone Patches",
    slug: "estrogen-patch-2",
    description: "A convenient supplement to support hormonal balance.",
    benefits: [
      "Regulates mood",
      "Supports vaginal health"
    ],
    usage: "Apply one patch and replace every 3 days.",
    ingredients: [
      "Estradiol",
      "Medical Adhesive"
    ]
  },
  {
    id: "4",
    name: "Estrogen Patch 3",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Patch",
    slug: "estrogen-patch-3",
    description: "Advanced transdermal delivery for fast relief from menopause symptoms.",
    benefits: [
      "Balances hormones",
      "Boosts energy",
      "Minimizes bloating"
    ],
    usage: "Use as directed by your physician.",
    ingredients: [
      "Estradiol USP",
      "Polymer Matrix"
    ]
  },
  {
    id: "5",
    name: "Progesterone Cream",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Body Creams",
    slug: "progesterone-cream",
    description: "A soothing cream to help balance hormones and alleviate menopause symptoms.",
    benefits: [
      "Reduces anxiety and irritability",
      "Supports restful sleep",
      "Improves skin elasticity"
    ],
    usage: "Apply a small amount to the skin daily, as directed by your healthcare provider.",
    ingredients: [
      "Micronized Progesterone",
      "Emollients",
      "Preservatives"
    ]
  },
  {
    id: "6",
    name: "Estrogen Cream",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 4,
    category: "Body Creams",
    slug: "estrogen-cream",
    description: "Topical estrogen cream for menopause symptom relief.",
    benefits: [
      "Alleviates hot flashes",
      "Enhances mood stability",
      "Improves skin hydration"
    ],
    usage: "Apply to the skin as directed by your healthcare provider.",
    ingredients: [
      "Estradiol",
      "Emollients",
      "Preservatives"
    ]
  },
  {
    id: "7",
    name: "Testosterone Cream",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Body Creams",
    slug: "testosterone-cream",
    description: "Testosterone cream to help boost energy and libido during menopause.",
    benefits: [
      "Increases energy levels",
      "Enhances libido",
      "Supports muscle mass"
    ],
    usage: "Apply a small amount to the skin daily, as directed by your healthcare provider.",
    ingredients: [
      "Testosterone Propionate",
      "Emollients",
      "Preservatives"
    ]
  },
  {
    id: "8",
    name: "DHEA Supplement",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 4,
    category: "Supplements",
    slug: "dhea-supplement",
    description: "DHEA supplement to support hormone balance and energy levels.",
    benefits: [
      "Boosts energy and mood",
      "Supports hormonal balance",
      "Enhances libido"
    ],
    usage: "Take one capsule daily with food.",
    ingredients: [
      "Dehydroepiandrosterone (DHEA)",
      "Gelatin Capsule"
    ]
  },
  {
    id: "9",
    name: "Vitamin D3 Supplement",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Supplements",
    slug: "vitamin-d3-supplement",
    description: "Vitamin D3 to support bone health and immune function.",
    benefits: [
      "Supports bone density",
      "Boosts immune system",
      "Improves mood"
    ],
    usage: "Take one capsule daily with a meal.",
    ingredients: [
      "Cholecalciferol (Vitamin D3)",
      "Gelatin Capsule"
    ]
  },
  {
    id: "10",
    name: "Calcium + Magnesium Supplement",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Supplements",
    slug: "calcium-magnesium-supplement",
    description: "A balanced supplement to support bone health during menopause.",
    benefits: [
      "Strengthens bones",
      "Supports muscle function",
      "Reduces risk of osteoporosis"
    ],
    usage: "Take two tablets daily with meals.",
    ingredients: [
      "Calcium Carbonate",
      "Magnesium Oxide",
      "Vitamin D3"
    ]
  },
  {
    id: "11",
    name: "Omega-3 Fish Oil",
    price: "$39/month",
    image: "/Images/products/product.png",
    rating: 5,
    category: "Supplements",
    slug: "omega-3-fish-oil",
    description: "Omega-3 fatty acids to support heart health and reduce inflammation.",
    benefits: [
      "Supports cardiovascular health",
      "Reduces joint pain",
      "Improves skin health"
    ],
    usage: "Take two softgels daily with meals.",
    ingredients: [
      "Fish Oil (EPA and DHA)",
      "Gelatin Softgel"
    ]
  }
];
