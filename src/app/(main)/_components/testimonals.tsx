"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slides = [
    {
      quote:
        "Imperdiet vitae hendrerit in et. Hendrerit donec in sapien sed neque adipiscing semper fringilla rhoncus.",
      author: "Sarah Mitchell, Marketing Director at BrightEdge Solutions",
    },
    {
      quote:
        "Turpis orci morbi nisi viverra sit ipsum ut sit. Sed ultricies, velit nec laoreet tincidunt.",
      author: "James Carter, CEO of VisionTech",
    },
  ];

  return (
    <section className="bg-testimonial">
      <div className="flex md:flex-row flex-col justify-between">
        {/* Left Section - Static */}
        <div className="md:w-[50%]">
          <div className="flex justify-start w-full">
            <Image
              src="/images/building.png"
              alt="Building"
              width={300}
              height={300}
              className="h-auto object-cover w-[50%]"
            />
          </div>
          <div className="flex justify-end w-full">
            <Image
              width={100}
              height={100}
              src="/images/person.png"
              alt="Person"
              className="w-[50%] h-auto object-cover col-span-2"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-black p-10 md:w-[60%]">
          <div className="flex  flex-col items-end">
            {/* Carousel Text Only */}
            <div className="overflow-hidden flex-1" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div className="flex-none w-full" key={index}>
                    <span className="text-[150px] text-[#0F1E27]">“</span>
                    <p className="text-4xl md:text-5xl tracking-tight mb-4 -mt-16">
                      {slide.quote}
                    </p>
                    <p className="text-sm mt-2">– {slide.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Navigation Buttons */}
            <div className="flex gap-4 mt-6 h-[80px]">
              <button onClick={scrollPrev} className="border rounded-full p-1">
                <ChevronLeft size={50} />
              </button>
              <button onClick={scrollNext} className="border rounded-full p-1">
                <ChevronRight size={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
