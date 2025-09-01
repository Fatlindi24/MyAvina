// data/faqPage.ts

export type FaqItem = {
    q: string;
    a: string;
};

export type FaqCategoryId =
    | "GENERAL"
    | "HRT"
    | "TELEHEALTH"
    | "ORDERS"
    | "INSURANCE"
    | "PRIVACY"
    | "ACCOUNT";

export type FaqCategory = {
    id: FaqCategoryId;
    label: string;
    items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
    {
        id: "GENERAL",
        label: "General",
        items: [
            {
                q: "What is bioidentical HRT?",
                a: "Bioidentical HRT uses hormones that are chemically identical to those produced by the body. They’re used to help manage menopause symptoms such as hot flashes, sleep disruption, and mood changes.",
            },
            {
                q: "How safe is HRT? What are the risks?",
                a: "HRT is safe for many women when used under medical guidance. Suitability and risk depend on age, time since last period, personal and family medical history, and the therapy type/dose. Always consult your provider.",
            },
            {
                q: "Do I need blood or saliva hormone testing?",
                a: "Routine hormone testing is usually not required. Decisions are typically based on your symptoms, history, and goals. Your provider will tell you if lab testing is needed.",
            },
            {
                q: "Will MyAvina work for me in perimenopause?",
                a: "Yes. Our care plans address symptoms across perimenopause and menopause, with lifestyle guidance and (when appropriate) HRT or non-HRT options.",
            },
            {
                q: "Will HRT help with menopausal weight gain?",
                a: "HRT may improve sleep and reduce vasomotor symptoms that can influence weight. Balanced nutrition, activity, and stress management remain foundational.",
            },
        ],
    },
    {
        id: "HRT",
        label: "HRT",
        items: [
            {
                q: "What types of HRT do you offer?",
                a: "We offer FDA-approved patches, gels, and tablets for estrogen and progesterone, plus testosterone when clinically appropriate. Your provider recommends an option based on your needs and preferences.",
            },
            {
                q: "How long does it take to feel results?",
                a: "Some women feel better within 2–4 weeks, while others need 8–12 weeks for full effect. Your provider will adjust your plan as needed.",
            },
            {
                q: "Can I stop HRT suddenly?",
                a: "Talk to your provider before stopping. A gradual taper is often recommended to minimize symptom rebound.",
            },
            {
                q: "Are there non-hormonal options?",
                a: "Yes—lifestyle, supplements, and certain non-hormonal medications can help specific symptoms. Your provider will discuss evidence-based options.",
            },
        ],
    },
    {
        id: "TELEHEALTH",
        label: "Telehealth & Consults",
        items: [
            {
                q: "How do virtual visits work?",
                a: "Your visit happens online (video or audio). You complete an intake, meet your provider, and receive a personalized plan and prescriptions when appropriate.",
            },
            {
                q: "Which states do you serve?",
                a: "We’re expanding. Check our “States We Serve” page for current coverage. If we’re not in your state yet, join the waitlist.",
            },
            {
                q: "Can I message my provider?",
                a: "Yes. Secure messaging is available for follow-ups, questions, and plan adjustments.",
            },
        ],
    },
    {
        id: "ORDERS",
        label: "Orders & Shipping",
        items: [
            {
                q: "How do I order?",
                a: "Create an account, complete your free visit, and follow the steps to checkout. Approved prescriptions are shipped from our partner pharmacy.",
            },
            {
                q: "How long does shipping take?",
                a: "Most orders ship within 1–3 business days after approval. You’ll receive tracking once your order leaves the pharmacy.",
            },
            {
                q: "What is your return policy?",
                a: "For safety, prescription medications can’t be returned. If your order is damaged or incorrect, contact support and we’ll make it right.",
            },
        ],
    },
    {
        id: "INSURANCE",
        label: "Insurance & Payments",
        items: [
            {
                q: "Does MyAvina accept insurance?",
                a: "We don’t bill insurance directly, but many services and products may be HSA/FSA-eligible. You’ll receive receipts you can submit for reimbursement.",
            },
            {
                q: "What payment methods are accepted?",
                a: "We accept major cards and HSA/FSA cards. Costs are shown transparently at checkout.",
            },
            {
                q: "Can I get an invoice for reimbursement?",
                a: "Yes. Download your invoice from your account or contact support for assistance.",
            },
        ],
    },
    {
        id: "PRIVACY",
        label: "Privacy & Security",
        items: [
            {
                q: "How is my data protected?",
                a: "We use industry-standard encryption and secure infrastructure. Access is limited to authorized staff involved in your care.",
            },
            {
                q: "Do you sell my data?",
                a: "No. We never sell personal health information. Review our Privacy Policy for details.",
            },
            {
                q: "Can I delete my account?",
                a: "Yes. You can request account deletion at any time. Some medical records must be retained per regulation.",
            },
        ],
    },
    {
        id: "ACCOUNT",
        label: "My Account",
        items: [
            {
                q: "How do I update my information?",
                a: "Go to Account → Profile to update your name, email, shipping address, and preferences.",
            },
            {
                q: "How do I reset my password?",
                a: "Use “Forgot password” on the sign-in page. We’ll email a secure reset link.",
            },
            {
                q: "How do I cancel my plan?",
                a: "Open Account → Plans & Billing. You can pause or cancel anytime, effective at the end of the current cycle.",
            },
        ],
    },
];
