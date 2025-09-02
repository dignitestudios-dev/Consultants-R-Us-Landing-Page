import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-[#0F1E27] text-white py-20">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-lg">
        
        {/* Left Side - Contact Info */}
        <div className="bg-[#374856] md:p-20 p-10">
          <h3 className="text-3xl font-semibold mb-2">Our Contact Info:</h3>
          <p className="text-sm text-gray-300 mb-6 pr-12">
            Please email us with any comments, suggestions or questions.
          </p>

          <div className="my-12 mt-20">
            <h4 className="text-md font-medium">Headquarters</h4>
            <p className="flex items-center gap-2 text-gray-300 text-sm mt-1">
              <MapPin size={16} /> Dallas, TX
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium">Email</h4>
            <p className="flex items-center gap-2 text-gray-300 text-sm mt-1">
              <Mail size={16} /> info@Consultantsrus.com
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="p-16 py-20 bg-[#0F1E27] border border-gray-700 rounded-r-xl">
          <h3 className="text-3xl font-semibold mb-6">Get in touch with us</h3>

          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="e.g John"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-sm py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="e.g John@gmail.com"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-sm py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="e.g 0491570156"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-sm py-2"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              placeholder="Enter your message here"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-sm py-2"
              rows={2}
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-medium rounded-full px-16 py-4 hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
