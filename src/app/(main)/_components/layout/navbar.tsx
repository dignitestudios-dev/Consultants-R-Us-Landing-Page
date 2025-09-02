"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../ui/logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "What You Get", href: "#" },
    { name: "About", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="w-[90%] relative z-[99999] py-8 max-w-screen-2xl mx-auto flex justify-between items-center">
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex capitalize text-sm items-center gap-8 opacity-80 tracking-wider font-thin">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>

      <button className="text-black bg-white p-2 px-4 rounded-sm text-sm hidden md:block">
        Book a Demo
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white focus:outline-none"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[9999999] bg-[#1d1d1d] text-white  transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-6 p-6 mt-12">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="capitalize text-lg tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-black bg-white p-2 px-4 rounded-sm text-sm mt-4">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
