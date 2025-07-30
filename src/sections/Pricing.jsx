import React from "react";
import { Sparkle } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col items-center">
        <div className="mb-3">
          <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2">
            <Sparkle className="h-2 w-2 text-[#FF5000]" fill="#FF5000" />
            Pricing
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
          Simple Plans
        </h2>
        <p className="text-[18px] text-[#212121] leading-[27px] text-center max-w-xl">
          Whether you’re uploading weekly or scaling fast, we’ve got a plan tailored to your content flow.
        </p>
      </div>

   
 <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="border border-gray-700 p-6 rounded-xl  flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Starter Plan</h3>
            <p className="text-3xl font-bold text-[#facc15] mb-1">$899</p>
            <p className="text-sm text-gray-400 mb-4">/month</p>
            <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1 mb-4">
              <li>Website + Hosting</li>
              <li>SEO + Content Upload</li>
              <li>1 Revision</li>
            </ul>
          </div>
          <button className="bg-[#facc15] text-black font-medium py-2 px-4 rounded mt-auto">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-700 p-6 rounded-xl bg-[#141414] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Premium Plan</h3>
            <p className="text-3xl font-bold text-[#facc15] mb-1">$1499</p>
            <p className="text-sm text-gray-400 mb-4">/month</p>
            <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1 mb-4">
              <li>Website + Hosting + Domain</li>
              <li>SEO + Content Upload</li>
              <li>3 Revisions</li>
              <li>WhatsApp + Insta Integration</li>
            </ul>
          </div>
          <button className="bg-[#facc15] text-black font-medium py-2 px-4 rounded mt-auto">Get Started</button>
        </div>
      </div>

      {/* Custom Plan Below */}
      <div className="mt-8 max-w-3xl mx-auto border border-yellow-400 bg-yellow-50/10 rounded-xl p-6 md:p-8 text-center">
        <h3 className="text-2xl font-semibold text-[#facc15] mb-2">Need something custom?</h3>
        <p className="text-gray-300 mb-4">Tell us your idea, and we’ll build it for you. Whether you’re looking for a personal portfolio, a jewelry store, or a full-featured e-commerce platform, we’ve got you covered.</p>
        <button className="bg-[#facc15] text-black font-medium py-2 px-6 rounded">Contact Us</button>
      </div>
    </section>
  );
};

export default Pricing;
