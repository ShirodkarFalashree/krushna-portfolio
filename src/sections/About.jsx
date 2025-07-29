// AboutSection.jsx
import { Sparkle } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="w-full flex justify-center">
      <section className="w-[900px] py-16 flex flex-col items-center">
        <div className="mb-3">
          <span className="px-4 py-2 text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2 "><span><Sparkle className="h-2 w-2 text-[#FF5000] " fill="#FF5000" /></span> About</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
          We’re the Editing Partners Behind the Creators Who Actually Grow with Results.
          <span className="text-[#FF5000]">Fast, Reliable </span>
          and <span className="text-[#FF5000]">Obsessed.</span>
        </h2>
        <div className="flex flex-row gap-10 bg-white rounded-xl shadow-md mt-8 px-8 py-6 text-center">
          <div>
            <div className="text-2xl font-extrabold text-[#FF5000]">1,200+</div>
            <div className="text-gray-500 text-xs font-semibold mt-2">Videos Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-[#FF5000]">300+</div>
            <div className="text-gray-500 text-xs font-semibold mt-2">Creators Served</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-[#FF5000]">450M+</div>
            <div className="text-gray-500 text-xs font-semibold mt-2">Total Views</div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default About;
