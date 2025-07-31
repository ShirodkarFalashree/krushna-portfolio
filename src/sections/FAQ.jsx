import { Sparkle } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "What types of videos do you edit?",
    answer:
      "We specialize in YouTube content — from tech reviews and vlogs to shorts, tutorials, podcasts, and cinematic storytelling. If it's for YouTube, we've got it covered.",
  },
  {
    question: "How fast is the delivery?",
    answer:
    "We specialize in YouTube content — from tech reviews and vlogs to shorts, tutorials, podcasts, and cinematic storytelling. If it's for YouTube, we've got it covered.",

  },
  {
    question: "Can I request revisions?",
    answer:
      "We specialize in YouTube content — from tech reviews and vlogs to shorts, tutorials, podcasts, and cinematic storytelling. If it's for YouTube, we've got it covered.",
  
  },
  {
    question: "Do I need to provide all the footage and assets?",
    answer:
      "We specialize in YouTube content — from tech reviews and vlogs to shorts, tutorials, podcasts, and cinematic storytelling. If it's for YouTube, we've got it covered.",
  
  },
  {
    question: "What if I’m not happy with the result?",
    answer:
    "We specialize in YouTube content — from tech reviews and vlogs to shorts, tutorials, podcasts, and cinematic storytelling. If it's for YouTube, we've got it covered.",

  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex justify-center">
 <div className=" w-[940px] px-4 md:px-10 py-10 flex justify-between items-start gap-[45px] ">
      {/* Left side */}
      <div className="w-[600px] flex flex-col justify-center items-start">
        <div className="mb-3">
          <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2 "><span><Sparkle className="h-2 w-2 text-[#FF5000] " fill="#FF5000" /></span> Process</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-start mb-2 leading-[55px]">
        Got Questions? <br/>We Got Answers
        </h2>

        <p className="text-[18px] text-[#212121] leading-[27px text-start max-w-xl">
        Straightforward, no-fluff answers to help you feel<br/> confident about working with us.
        </p>
      </div>
      {/* Right side FAQ accordion */}
      <div className="space-y-3 w-[540px]">
        {faqData.map((item, idx) => (
          <div
            key={item.question}
            className={`rounded-lg transition-all cursor-pointer overflow-hidden
              ${openIndex === idx
                ? 'bg-black text-white shadow-lg'
                : 'bg-white text-black border'}`
            }
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          >
            <div className="flex justify-between items-center p-5">
              <span className="font-semibold">{item.question}</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    openIndex === idx
                      ? "M5 15l7-7 7 7" // Up
                      : "M19 9l-7 7-7-7"  // Down
                  }
                />
              </svg>
            </div>
            {openIndex === idx && item.answer && (
              <div className="px-5 pb-5 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}
