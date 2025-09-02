import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const items = [
  "Turpis venenatis eros platea sed ut morbi urna sed congue.",
  "Volutpat iaculis nec a et ac cursus massa sit etiam. Morbi non",
  "pulvinar et ac eu vitae. Dolor viverra tincidunt interdum ipsum tellu",
  "amet. Ullamcorper adipiscing quis nec sed nascetur. Mauris",
  "consectetur enim fermentum est. Non elit parturient quis ut",
  "molestie ipsum tristique enim phasellus. Vulputate laoreet eu nisl tellus in.",
];

function Home() {
  return (
    <div className="">
      <Image
        src={"/images/right-circles.png"}
        alt="circle"
        width={1000}
        height={1200}
        className="absolute right-0 top-0"
      />
      <Image
        src={"/images/left-shadow.png"}
        alt="circle"
        width={1000}
        height={1200}
        className="absolute -left-32 top-[5%]"
      />
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-wrap py-10 justify-between">
          <div className="md:w-[60%] flex flex-col md:py-16 gap-10 font-thin relative z-50">
            <h1 className="text-[#F9F9F7] text-5xl md:text-6xl font-thin">
              Jobs at Your Fingertips.Your Career Starts Here.
            </h1>
            <p className="text-[#CECBFF] text-2xl w-[90%] font-[350]">
              Smart job matching made simple. Explore thousands of opportunities
              anytime, anywhere.
            </p>
            <button className="text-white w-[150px] bg-[#C19A4D] p-2 px-4 rounded-sm text-sm">
              Book a Demo
            </button>
          </div>
          <div className="md:w-[30%] z-50">
            <div className=" ">
              <Image
                src={"/images/mobile.png"}
                alt="mobile"
                width={350}
                height={800}
                className="border-8"
              />
            </div>
          </div>
        </div>
        <div className="py-20 relative z-50">
          <div className="flex flex-wrap justify-between">
            <div className="md:w-[30%] flex flex-col gap-5">
              <div className="bg-[#0C1622] w-[50%] rounded-full">
                <h4 className="bg-gradient-to-t from-[#4A90E2] to-[#8A2BE2] text-transparent bg-clip-text text-sm text-center p-2 px-6 ">
                  What you get
                </h4>
              </div>
              <h1 className="text-4xl">What you actually get</h1>
              <p className="pr-8">
                Cras sed ridiculus lacus est. Nunc aliquam vulputate feugiat
                vitae blandit. Nunc faucibus laoreet morbi cum feugiat bibendum.
                Neque mi.
              </p>
            </div>
            <div className="md:w-[65%]">
              <div className="flex flex-wrap justify-center py-4 md:py-0 gap-6">
                {[1, 2, 3, 4, 5].map((m) => (
                  <div
                    key={m}
                    className="w-[250px] py-6 p-5 h-[250px] bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"
                  >
                    <div></div>
                    <h2>Euismod sit dictum ut</h2>
                    <p className="text-[#8FB4BA]">
                      Magna at laoreet quisque id. Tempus dolor aliquet
                      dignissim magna orci ullamcorper habitant. Orci
                      pellentesque in egestas.
                    </p>
                  </div>
                ))}
                <div className="w-[250px] py-6 p-5 flex items-center justify-center h-[250px] bg-[#374856] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                  <button className="text-black w-[150px] bg-white p-2 px-4 rounded-sm text-sm">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 relative">
          <Image
            src={"/images/Vector.png"}
            alt="mobile"
            width={600}
            height={800}
            className="-left-20 top-0 absolute"
          />
          <div className="flex flex-wrap justify-between font-thin">
            <div className="md:w-[40%] flex flex-col gap-6">
              <h3 className="bg-white rounded-full text-sm w-[30%] text-black text-center p-1">
                About Us
              </h3>
              <h1 className="text-3xl md:text-5xl md:pr-12">
                Augue risus molestie at augue vestibulum ultricies. Tristique
                netus.
              </h1>
              <p className="md:pr-24">
                Facilisis duis ullamcorper leo tellus sed. Porta dui arcu non a
                sit egestas. Mi nec fusce ut sit ullamcorper vel sed. Neque sit
                tortor placerat leo ac. Libero id semper ut dolor adipiscing
                eget amet placerat laoreet.
              </p>
              <div>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5  mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-[30%]  z-50">
              <Image
                src={"/images/about-grad.png"}
                alt="mobile"
                width={800}
                height={800}
                className="border-8 -right-20 -top-32 absolute"
              />
              <Image
                src={"/images/mobile2.png"}
                alt="mobile"
                width={350}
                height={800}
                className="border-8 relative z-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
