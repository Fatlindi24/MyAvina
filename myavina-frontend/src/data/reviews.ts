// data/reviews.ts
export interface Review {
    id: number;
    name: string;
    location: string;
    age?: number;
    symptom: string;
    rating: number;
    text: string;
    date: string;
    avatar: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Monica L.",
        location: "Verified Buyer",
        age: 52,
        symptom: "Hot Flashes",
        rating: 5,
        text: "I spent years feeling frustrated and dismissed when I brought up my menopause symptoms. MyAvina changed everything. From my first online visit, I felt listened to — my doctor customized my plan, checked in with me, and I finally sleep through the night again. The hot flashes are rare now, and I feel so much more like myself. Truly grateful for this care!",
        date: "07/07/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 2,
        name: "Linda",
        location: "Chicago",
        age: 52,
        symptom: "Night Sweats",
        rating: 5,
        text: "I was skeptical at first but MyAvina gave me confidence again. My doctor was so understanding and the treatment made a huge difference in just a few weeks.",
        date: "07/07/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 3,
        name: "Karen M.",
        location: "New York, NY",
        age: 49,
        symptom: "Mood Swings",
        rating: 4,
        text: "After trying several treatments, I found MyAvina. The personalized care and effective treatment plan have made a significant difference in my life. I feel more balanced and in control of my emotions.",
        date: "06/15/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 4,
        name: "Susan T.",
        location: "Los Angeles, CA",
        age: 55,
        symptom: "Sleep Disruption",
        rating: 5,
        text: "MyAvina has been a game-changer for me. The online consultations are convenient, and the treatment plan was tailored to my needs. I'm finally getting restful sleep again.",
        date: "05/30/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 5,
        name: "Patricia R.",
        location: "Miami, FL",
        age: 50,
        symptom: "Weight Gain",
        rating: 4,
        text: "I struggled with weight gain during menopause, but MyAvina's holistic approach helped me manage it effectively. The support from my doctor has been invaluable.",
        date: "04/20/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 6,
        name: "Barbara K.",
        location: "Seattle, WA",
        age: 53,
        symptom: "Cognitive Changes",
        rating: 5,
        text: "The cognitive changes I experienced were frightening, but MyAvina provided the support and treatment I needed. I'm grateful for their expertise and compassionate care.",
        date: "03/15/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 7,
        name: "Elizabeth S.",
        location: "Austin, TX",
        age: 51,
        symptom: "Vaginal Dryness",
        rating: 5,
        text: "MyAvina addressed my concerns with sensitivity and professionalism. The treatment plan has improved my quality of life significantly.",
        date: "02/10/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 8,
        name: "Jennifer D.",
        location: "Boston, MA",
        age: 48,
        symptom: "Joint Pain",
        rating: 4,
        text: "I appreciate the convenience of MyAvina's online platform and the personalized care I received. My joint pain has decreased, and I feel more active.",
        date: "01/05/25",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 9,
        name: "Maria H.",
        location: "Denver, CO",
        age: 54,
        symptom: "Fatigue",
        rating: 5,
        text: "The fatigue I experienced was debilitating, but MyAvina's treatment plan has revitalized me. I have more energy and feel like myself again.",
        date: "12/20/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 10,
        name: "Susan W.",
        location: "San Francisco, CA",
        age: 52,
        symptom: "Anxiety",
        rating: 4,
        text: "MyAvina provided a supportive environment where I felt heard and understood. The treatment plan has helped me manage my anxiety effectively.",
        date: "11/15/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 11,
        name: "Margaret P.",
        location: "Portland, OR",
        age: 49,
        symptom: "Depression",
        rating: 5,
        text: "I was struggling with depression during menopause, but MyAvina's holistic approach has made a significant difference. I feel hopeful and supported.",
        date: "10/10/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 12,
        name: "Dorothy L.",
        location: "Atlanta, GA",
        age: 53,
        symptom: "Hot Flashes",
        rating: 5,
        text: "The hot flashes were unbearable, but MyAvina's treatment plan has brought me relief. The convenience of online consultations is a huge plus.",
        date: "09/05/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 13,
        name: "Lisa M.",
        location: "Houston, TX",
        age: 51,
        symptom: "Night Sweats",
        rating: 4,
        text: "I appreciate the personalized care I received from MyAvina. The treatment plan has significantly reduced my night sweats, and I feel more rested.",
        date: "08/01/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 14,
        name: "Nancy G.",
        location: "Philadelphia, PA",
        age: 50,
        symptom: "Mood Swings",
        rating: 5,
        text: "MyAvina has been a lifesaver. The understanding and expertise of my doctor have helped me manage my mood swings effectively. I feel like myself again.",
        date: "07/15/24",
        avatar: "/Images/authors/dr-sarah.png"
    },
    {
        id: 15,
        name: "Betty C.",
        location: "San Diego, CA",
        age: 54,
        symptom: "Sleep Disruption",
        rating: 5,
        text: "After struggling with sleep disruption for months, MyAvina provided a tailored treatment plan that has improved my sleep quality dramatically. I'm so thankful for their care.",
        date: "06/10/24",
        avatar: "/Images/authors/dr-sarah.png"
    },

];
