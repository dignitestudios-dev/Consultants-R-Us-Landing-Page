import React from "react";
import Accordion from "./ui/accordian-faq";

function FAQ() {
  return (
    <div className="md:p-20 p-10">
      <div className="flex flex-wrap justify-between py-4">
        <div className="md:w-[40%]">
          <h3 className="text-[#4C187A] text-center bg-[#CFBFE4] p-1 w-[80%] md:w-[30%] text-sm rounded-full mb-8">Frequently asked</h3>
          <h1 className="text-6xl ">Quick questions before you commit</h1>
        </div>
        <div>
            <Accordion/>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
