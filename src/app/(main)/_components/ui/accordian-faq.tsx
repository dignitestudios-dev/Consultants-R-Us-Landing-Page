"use client";
import { useState } from "react";

const accordionData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nullam massa diam hendrerit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus fermentum mi donec.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "",
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
            <span className="text-white text-lg font-medium">{item.question}</span>
            <span className="text-[#C19A5B] font-thin text-4xl">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>

          <div
            className={`grid transition-all duration-500 ease-in-out overflow-hidden text-gray-300`}
            style={{
              maxHeight: openIndex === index && item.answer ? "100px" : "0px",
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
