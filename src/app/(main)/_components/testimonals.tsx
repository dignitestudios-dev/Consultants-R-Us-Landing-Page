import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-testimonial">
      <div className="flex md:flex-row flex-col justify-between">
        {/* Left Side - Images */}
        <div className="md:w-[50%]">
          <div className="flex justify-start w-full">
            <Image
              src="/images/building.png"
              alt="Building"
              width={300}
              height={300}
              className="h-auto object-cover md:w-[50%]"
            />
          </div>
          <div className="flex justify-end w-full">
            <Image
              width={100}
              height={100}
              src="/images/person.png"
              alt="Person"
              className="md:w-[50%] h-auto object-cover col-span-2"
            />
          </div>
        </div>

        {/* Right Side - Quote */}
        <div className="text-black p-10 md:w-[60%]">
          <div className="flex md:flex-row flex-col items-end">
            <div>
              <span className="text-[150px] text-[#0F1E27]">“</span>
              <p className="text-4xl md:text-5xl tracking-tight mb-4 -mt-16">
                Imperdiet vitae hendrerit in et. Hendrerit donec in sapien sed
                neque adipiscing semper fringilla rhoncus. Turpis orci morbi nisi
                viverra sit ipsum ut sit.
              </p>
              <p className="text-sm mt-2">
                – Sarah Mitchell, Marketing Director at BrightEdge Solutions
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6 h-[80px]">
              <button className="border rounded-full p-1">
                <ChevronLeft size={50} />
              </button>
              <button className="border rounded-full p-1">
                <ChevronRight size={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
