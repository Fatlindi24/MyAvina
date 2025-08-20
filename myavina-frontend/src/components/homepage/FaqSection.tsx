"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- Data for the FAQ items ---
// In a real application, this would come from a CMS or API.
const faqData = [
  {
    question: "What is bioidentical HRT?",
    answer:
      "Bioidentical Hormone Replacement Therapy (HRT) uses hormones that are chemically identical to those the human body produces. These are typically derived from plant sources and are used to treat symptoms of menopause by restoring hormonal balance.",
  },
  {
    question: "How safe is HRT? What are the risks?",
    answer:
      "For most healthy women, HRT is considered safe for managing menopause symptoms, especially when started before age 60 or within 10 years of menopause. Risks are individualized and depend on your health history. Our physicians conduct a thorough evaluation to ensure it's the right choice for you.",
  },
  {
    question: "Do I need blood or saliva hormone testing?",
    answer:
      "No, extensive research has shown that hormone levels in blood or saliva do not reliably correlate with menopause symptoms. Treatment is based on your symptoms and medical history, which is the standard of care recommended by major medical societies.",
  },
  {
    question: "Will MyAvina work for me in perimenopause?",
    answer:
      "Yes, many of our treatments are effective for managing the symptoms of perimenopause, which can begin years before your final menstrual period. Our specialists can create a personalized plan to address your specific needs during this stage.",
  },
  {
    question: "Will HRT help with menopausal weight gain?",
    answer:
      "While HRT is not a weight-loss drug, it can help manage some factors associated with menopausal weight gain, such as improving sleep, boosting energy for exercise, and reducing insulin resistance. A holistic plan often includes lifestyle and nutrition advice.",
  },
  {
    question: "Does MyAvina accept insurance?",
    answer:
      "We do not currently accept insurance directly. However, many of our treatments and consultations are HSA/FSA eligible. We can provide you with the necessary documentation to submit for potential reimbursement from your provider.",
  },
  {
    question: "How do I order?",
    answer:
      "Getting started is easy. Simply take our online assessment quiz, have a virtual consultation with one of our board-certified physicians, and if prescribed, your personalized treatment will be shipped discreetly to your door.",
  },
];

// --- Reusable Accordion Item Component ---
interface AccordionItemProps {
  faq: (typeof faqData)[0];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="font-normal lg:text-[32px] text-[16px] leading-[130%] tracking-normal">
          {faq.question}
        </span>
        <span className="flex-shrink-0 ml-4 p-1 rounded-full border border-dark">
          {isOpen ? (
            <Minus className="h-4 w-4 text-gray-700" />
          ) : (
            <Plus className="h-4 w-4 text-gray-700" />
          )}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-8 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main FAQ Section Component ---
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <h2 className="lg:text-[40px] text-[32px] text-500 leading-[130%]  sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
