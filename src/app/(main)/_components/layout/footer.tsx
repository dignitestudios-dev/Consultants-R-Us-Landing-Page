import React from "react";
import Logo from "../ui/logo";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#374856] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 text-xs">
        <div className="flex flex-col  md:flex-row md:gap-56 md:w-[90%] lg:w-[90%] mx-auto gap-8  py-6">
          {/* Logo Section */}
          <Logo />

          {/* Sections Links */}
          <div>
            <h1 className="uppercase mb-2 font-semibold">Sections</h1>
            <div className="capitalize flex flex-col gap-1">
              <Link href="">Home</Link>
              <Link href="">What You Get</Link>
              <Link href="">About</Link>
              <Link href="">Testimonials</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h1 className="uppercase mb-2 font-semibold">Resources</h1>
            <div className="capitalize flex flex-col gap-1">
              <Link href="">Privacy Policy</Link>
              <Link href="">Terms and Conditions</Link>
              <Link href="">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Short Info */}
        <div className="px-4 sm:px-6 lg:px-16 py-6 text-center md:text-left">
          <p className="max-w-md mx-auto md:mx-0">
            Short info about the brand sit amet consectetur. Id placerat eu
            augue lectus pulvinar tortor. Accumsan.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#4b5a67] w-full h-[1px]" />

        {/* Copyright */}
        <div className="px-4 sm:px-6 lg:px-16 py-2 text-center md:text-left">
          &copy; Consultant R US. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
