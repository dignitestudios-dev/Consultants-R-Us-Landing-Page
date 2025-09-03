"use client";
import { useState } from "react";

const accordionData = [
  // For Consultants
  {
    category: "Consultants",
    question: "Who can sign up as a consultant on ConsultLink?",
    answer:
      "Anyone with relevant oilfield experience, certifications, and availability can join. You’ll need to create a profile, upload your resume, and verify your credentials.",
  },
  {
    category: "Consultants",
    question: "Is there a fee to use the platform as a consultant?",
    answer:
      "Yes — there’s a flat monthly subscription fee of $10 to access all features, including profile visibility, resume uploads, notifications, and direct contact from companies.",
  },
  {
    category: "Consultants",
    question: "How will I be contacted by companies?",
    answer:
      "Once your profile is live, companies can reach out to you directly via phone or email based on the information you provide.",
  },
  {
    category: "Consultants",
    question: "Is my information secure?",
    answer:
      "Absolutely. Your documents are stored securely in a personal vault, and your data is protected according to our privacy policy.",
  },

  // For Companies
  {
    category: "Companies",
    question: "How do I find and contact consultants?",
    answer:
      "You can filter consultants by location, certifications, years of experience, and availability. Once you find a match, contact them directly — no middleman needed.",
  },
  {
    category: "Companies",
    question: "Can I shortlist or save candidates?",
    answer:
      "Yes, you can favorite or “star” consultant profiles and resumes to access them quickly when you’re ready to hire.",
  },
  {
    category: "Companies",
    question: "Is there a subscription fee for companies?",
    answer:
      "Yes, companies also pay a $10/month subscription to access the full list of consultant profiles and use all platform features.",
  },
  {
    category: "Companies",
    question: "Can I manage multiple hiring managers under one account?",
    answer:
      "Currently, each account is for a single user, but support for team access is in the roadmap.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto divide-y py-20 divide-gray-700">
      {accordionData.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#C19A5B]">
                {item.category}
              </span>
              <span className="text-white text-lg font-medium">
                {item.question}
              </span>
            </div>
            <span className="text-[#C19A5B] font-thin text-4xl">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>

          <div
            className={`grid transition-all duration-500 ease-in-out overflow-hidden text-gray-300`}
            style={{
              maxHeight: openIndex === index && item.answer ? "200px" : "0px",
              opacity: openIndex === index && item.answer ? 1 : 0,
              marginTop: openIndex === index && item.answer ? "8px" : "0px",
            }}
          >
            <p className="text-sm">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
