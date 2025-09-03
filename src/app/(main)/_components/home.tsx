import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

// const items = [
//   "Turpis venenatis eros platea sed ut morbi urna sed congue.",
//   "Volutpat iaculis nec a et ac cursus massa sit etiam. Morbi non",
//   "pulvinar et ac eu vitae. Dolor viverra tincidunt interdum ipsum tellu",
//   "amet. Ullamcorper adipiscing quis nec sed nascetur. Mauris",
//   "consectetur enim fermentum est. Non elit parturient quis ut",
//   "molestie ipsum tristique enim phasellus. Vulputate laoreet eu nisl tellus in.",
// ];

const howItWorks = [
  {
    title: "1. Create a Profile",
    desc: "Whether you’re a consultant or an oilfield company, it takes minutes to get started.",
  },
  {
    title: "2. Connect Directly",
    desc: "No recruiters. Browse verified profiles and reach out directly.",
  },
  {
    title: "3. Hire or Get Hired",
    desc: "Set your availability, upload documents, and get discovered by companies actively hiring.",
  },
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
              Connecting Oilfield Talent with Opportunity
            </h1>
            <p className="text-[#CECBFF] text-2xl w-[90%] font-[350]">
              Cut out the middleman. Hire experienced consultants directly —
              fast, secure, and cost-effective.
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
                  Key Features
                </h4>
              </div>
              <h1 className="text-4xl">What you actually get</h1>
              {/* <p className="pr-8">
                Cras sed ridiculus lacus est. Nunc aliquam vulputate feugiat
                vitae blandit. Nunc faucibus laoreet morbi cum feugiat bibendum.
                Neque mi.
              </p> */}
            </div>
            <div className="md:w-[65%]">
              <div className="flex flex-wrap justify-center py-4 md:py-0 gap-6">
                {[
                  // Consultants
                  {
                    title: "For Consultants",
                    features: [
                      "✅ Build a professional profile",
                      "📅 Set your availability",
                      "📄 Upload resumes & certifications",
                      "🔔 Get real-time alerts when shortlisted",
                      "🗂️ Store documents securely",
                    ],
                  },
                  // Companies
                  {
                    title: "For Companies",
                    features: [
                      "🔍 Search & filter consultants",
                      "🌐 Browse detailed consultant profiles",
                      "⭐ Shortlist and favorite candidates",
                      "📤 Contact directly via email or phone",
                    ],
                  },
                  // Admins
                  {
                    title: "For Admins",
                    features: [
                      "👤 Manage users",
                      "✅ Approve/verify profiles",
                      "📊 Access analytics & platform insights",
                      "🔧 Control notifications, settings, and permissions",
                    ],
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-[250px] py-6 p-5 h-[250px] bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 overflow-hidden"
                  >
                    <h2 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h2>
                    <ul className="text-[#8FB4BA] text-sm space-y-1">
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* CTA card */}
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
      <h3 className="bg-white rounded-full text-sm w-fit px-4 text-black text-center p-1">
        How It Works
      </h3>

      <h1 className="text-3xl md:text-5xl md:pr-12">
        Connecting Oilfield Talent with Opportunity
      </h1>

      <p className="md:pr-24 text-gray-300">
        Get started in minutes and take control of hiring or finding jobs —
        direct, fast, and cost-effective.
      </p>

      <div>
        <ul className="space-y-4">
          {howItWorks.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C19A5B] mt-1" />
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
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
