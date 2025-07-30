import React from "react";
import { Sparkle, XCircle, CheckCircle } from "lucide-react";

const OurSolution = () => {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col items-center">
        <div className="mb-3">
          <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2">
            <Sparkle className="h-2 w-2 text-[#FF5000]" fill="#FF5000" />
            Our Solution
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
          Why Most Creators Burn Out
        </h2>
        <p className="text-[18px] text-[#212121] leading-[27px] text-center max-w-xl">
          A quick side-by-side of the struggles you shouldn’t have to deal with
          and how we make sure you don’t.
        </p>
      </div>

      {/* Problem vs Solution Grid */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 rounded-2xl md:grid-cols-2 gap-6 bg-white">
        {/* Creators Problem */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
            Creators Problem
          </h3>
          <div className="bg-white border border-[#ebebeb] rounded-2xl p-6 shadow-sm">
            <ul className="space-y-4 text-[16px] text-[#212121]">
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> Editing takes me
                forever.
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> I miss uploads
                trying to finish videos.
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> I hate editing. I
                just want to record.
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> My videos don’t
                look pro enough.
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> Captions are a pain
                to add.
              </li>
            </ul>
          </div>
        </div>

        {/* Our Solution */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left text-[#FF5000]">
            Our Solution
          </h3>
          <div className="bg-[#171717] text-white rounded-2xl p-6 shadow-md">
            <ul className="space-y-4 text-[16px]">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#fff] w-5 h-5" fill="#FF5000" />{" "}
                Done–for–you edits, always on time.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#fff] w-5 h-5" fill="#FF5000" />{" "}
                Fast turnaround
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#fff] w-5 h-5" fill="#FF5000" />{" "}
                You record. We handle the rest.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#fff] w-5 h-5" fill="#FF5000" />{" "}
                Cinematic, clean, and branded.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-[#fff] w-5 h-5" fill="#FF5000" />{" "}
                Burned-in, style-matched captions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
