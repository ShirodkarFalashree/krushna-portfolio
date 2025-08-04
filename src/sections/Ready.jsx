import React from "react";

const Ready = () => {
  return (
    <div className="w-full flex justify-center items-center h-[400px] mt-[50px] mb-[100px]">
      <div className="bg-[#171717] text-white py-10 w-[900px] px-4 sm:px-6 lg:px-8 rounded-3xl h-fit">
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
          {/* Main heading */}
          <h2 className="text-[48px] leading-[57px] font-bold  mb-6">Ready to Level Up?</h2>

          {/* Subheading */}
          <p className="text-[18px] leading-[27px] text-[#E6E6E6] mb-8">
            Whether it's a one-off edit or a full channel transformation, we're ready
            <br />
            when you are. Let's talk. Ideas.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-[#171717] rounded-full px-4 py-3 flex items-center shadow-lg mb-2 cursor-pointer">
            Book a Call
            <span className="ml-2 bg-[#171717]  rounded-full h-10 w-10 flex justify-center items-center text-white">&rarr;</span>
          </button>


        </div>
      </div>
    </div>
  );
};

export default Ready;