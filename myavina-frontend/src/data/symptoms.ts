// Data: Symptoms catalogue powering the Symptoms pages and menu
export interface Symptom {
    slug: string;
    name: string;
    category:
    | "Vasomotor"
    | "Sleep"
    | "Weight"
    | "Mood"
    | "Cognitive"
    | "Sexual Health"
    | "Musculoskeletal"
    | "Skin & Hair"
    | "Digestive"
    | "Cardiovascular";
    short: string;
    description: string;
    tags: string[];
    relatedSymptoms: string[];       // slugs
    recommendedProductIds: string[]; // product ids from your products.ts
    tips: string[];
    redFlags: string[];
    faq: { q: string; a: string }[];
    image?: string;                  // optional hero image for cards
    lastReviewed?: string;           // e.g., "July 28, 2025"
}


// Single source of truth for Symptoms pages
// Single source of truth for Symptoms pages


export const symptoms: Symptom[] = [
    {
        slug: "hot-flashes",
        name: "Hot Flashes",
        category: "Vasomotor",
        short: "Sudden warmth, flushing, and sweating, often with a rapid heart rate.",
        description:
            "Hot flashes are among the most common menopause symptoms and are driven by fluctuating estrogen. Episodes last seconds to minutes and can occur multiple times a day or night.",
        tags: ["vasomotor", "night-sweats", "temperature"],
        relatedSymptoms: ["night-sweats", "sleep-disruption"],
        recommendedProductIds: ["estrogen-patch-01", "progesterone-cream-01"],
        tips: [
            "Dress in layers and use breathable fabrics.",
            "Avoid triggers like alcohol, spicy foods, and very warm rooms.",
            "Practice paced breathing when a flash begins.",
        ],
        redFlags: [
            "Hot flashes with chest pain, severe shortness of breath, or fainting.",
            "Unexplained fever or weight loss.",
        ],
        faq: [
            { q: "How long do hot flashes last?", a: "Typically 1–5 minutes per episode; they may persist for months to a few years." },
            { q: "Are hormones always required?", a: "No. Some benefit from lifestyle changes or non-hormonal options. Discuss with a clinician." },
        ],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "night-sweats",
        name: "Night Sweats",
        category: "Vasomotor",
        short: "Excessive sweating during sleep that may disrupt rest, often linked with hot flashes.",
        description:
            "Night sweats often accompany hot flashes and can fragment sleep. Managing vasomotor symptoms usually improves sleep quality.",
        tags: ["sleep", "sweats"],
        relatedSymptoms: ["hot-flashes", "sleep-disruption"],
        recommendedProductIds: ["estrogen-patch-01"],
        tips: [
            "Keep the bedroom cool and use moisture-wicking bedding.",
            "Avoid alcohol close to bedtime.",
            "Consider a bedside fan or cooling pillow.",
        ],
        redFlags: ["Drenching sweats with fever or weight loss."],
        faq: [{ q: "Why worse at night?", a: "Thermoregulation varies during sleep and can amplify vasomotor instability." }],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "sleep-disruption",
        name: "Sleep Disruption",
        category: "Sleep",
        short: "Trouble falling or staying asleep, often linked with night sweats.",
        description:
            "Hormonal shifts affect sleep architecture, leading to frequent awakenings. Addressing vasomotor symptoms and sleep hygiene helps most people.",
        tags: ["insomnia", "sleep"],
        relatedSymptoms: ["hot-flashes", "night-sweats", "anxiety"],
        recommendedProductIds: ["progesterone-capsules-01"],
        tips: [
            "Consistent sleep/wake schedule, even on weekends.",
            "Limit caffeine after mid-afternoon.",
            "Keep screens out of the bedroom.",
        ],
        redFlags: ["Loud snoring with witnessed apneas or choking during sleep."],
        faq: [{ q: "Do supplements help?", a: "Some find gentle benefit with magnesium or melatonin; check interactions first." }],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "brain-fog",
        name: "Brain Fog",
        category: "Cognitive",
        short: "Forgetfulness or difficulty concentrating and recalling words.",
        description:
            "Estrogen changes can affect attention and recall. Sleep quality, stress, and mood also contribute, so a holistic approach works best.",
        tags: ["cognition", "focus"],
        relatedSymptoms: ["sleep-disruption", "anxiety"],
        recommendedProductIds: ["estrogen-patch-01"],
        tips: [
            "Prioritize sleep and regular physical activity.",
            "Use lists, timers, and time-boxing for tasks.",
            "Daily mindfulness can improve attention control.",
        ],
        redFlags: ["Rapidly progressive cognitive decline or new neurological deficits."],
        faq: [{ q: "Is brain fog permanent?", a: "Usually improves with time and symptom management." }],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "low-libido",
        name: "Low Libido",
        category: "Sexual Health",
        short: "Reduced sexual desire or interest during menopause, often linked to vaginal symptoms.",
        description:
            "Libido can change due to hormones, mood, sleep quality, and vaginal symptoms. Addressing discomfort and overall health often restores interest.",
        tags: ["sexual", "libido"],
        relatedSymptoms: ["vaginal-dryness", "depression"],
        recommendedProductIds: ["estrogen-cream-01"],
        tips: [
            "Communicate openly with partners about comfort and preferences.",
            "Use lubricants or moisturizers to reduce discomfort.",
            "Prioritize sleep and stress reduction.",
        ],
        redFlags: ["Severe pain with intercourse or bleeding not explained by menses."],
        faq: [{ q: "Can hormones help libido?", a: "Local estrogen can ease dryness; systemic options may be considered with a clinician." }],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "vaginal-dryness",
        name: "Vaginal Dryness",
        category: "Sexual Health",
        short: "Dryness and discomfort that may cause painful intercourse.",
        description:
            "Genitourinary syndrome of menopause leads to thinning tissues and reduced lubrication. Local estrogen or moisturizers often bring relief.",
        tags: ["dryness", "gsm"],
        relatedSymptoms: ["low-libido"],
        recommendedProductIds: ["estrogen-cream-01"],
        tips: ["Use regular vaginal moisturizers; add lubricants during sex.", "Consider local estrogen after medical review."],
        redFlags: ["Unexplained vaginal bleeding."],
        faq: [{ q: "Is it permanent?", a: "Symptoms can persist without treatment; local therapies are effective for many." }],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "joint-pain",
        name: "Joint & Hip Pain",
        category: "Musculoskeletal",
        short: "Aches or stiffness in joints, often worse in the morning, hips, or knees.",
        description:
            "Estrogen plays roles in inflammation and connective tissue. Fluctuations can increase joint discomfort, especially around menopause.",
        tags: ["pain", "joints"],
        relatedSymptoms: ["fatigue"],
        recommendedProductIds: ["anti-inflammatory-support-01"],
        tips: [
            "Low-impact exercise like walking, swimming, or cycling.",
            "Gentle mobility and strength work for major joints.",
        ],
        redFlags: ["Warm, swollen joints or unexplained redness with fever."],
        faq: [],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
    {
        slug: "weight-changes",
        name: "Hormonal Weight Changes",
        category: "Weight",
        short: "Easier weight gain or body fat redistribution, especially around the abdomen.",
        description:
            "Metabolic rate and body composition shift with age and hormones. Sleep, stress, and activity are major levers to manage weight changes.",
        tags: ["weight", "metabolism"],
        relatedSymptoms: ["sleep-disruption", "fatigue"],
        recommendedProductIds: ["lifestyle-coaching-01"],
        tips: [
            "Protein-forward meals, plenty of fiber, and resistance training.",
            "Prioritize 7–9 hours of sleep; manage stress.",
        ],
        redFlags: ["Rapid, unexplained weight loss."],
        faq: [],
        image: "/Images/learn/learn-2.png",
        lastReviewed: "July 28, 2025",
    },
];
