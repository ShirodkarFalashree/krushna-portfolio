import React from "react";
import { Sparkle } from "lucide-react";

const HallOfFrame = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <section className=" w-[900px] py-16 ">
        <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col items-center">
          <div className="mb-3">
            <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2">
              <Sparkle className="h-2 w-2 text-[#FF5000]" fill="#FF5000" />
              Hall of Fame
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
            Our Recent Edits in Action
          </h2>
          <p className="text-[18px] text-[#212121] leading-[27px] text-center max-w-xl">
            From tech reviews to gameplay breakdowns — here’s a glimpse of how we
            turn raw footage.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-full mx-auto px-4 grid gap-2 -mb-8">
          <div className="rounded-xl overflow-hidden shadow-md aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7LnJCwj5FN0"
              title="Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 rounded-2xl border-2 border-dotted border-[#ebebeb]   bg-white">
            <div className="text-sm text-gray-500 mb-1">Framer · 2M Views</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              The Launch in Motion: Framer’s Big Day, Perfectly Edited
            </h3>
            <p className="text-gray-600">
              From tech reviews to gameplay breakdowns — here’s a glimpse of how
              we turn raw footage into binge-worthy content that resonates.
            </p>
          </div>
        </div>

        {/* Two Smaller Videos + Text Below */}
        <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Video 1 */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-video mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5yXGw3Qh5YE"
                title="Master Framer Fast"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 rounded-2xl border-2 border-dotted border-[#ebebeb]   bg-white">
              <div className="text-sm text-gray-500 mb-1">
                GeorgeTech · 1.2M Views
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Master Framer Fast: Core Concepts in Motion
              </h3>
              <p className="text-gray-600">
                From tech reviews to gameplay breakdowns.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-video mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qcsAfAgri2U"
                title="Creator Micro 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 rounded-2xl border-2 border-dotted border-[#ebebeb]   bg-white">
              <div className="text-sm text-gray-500 mb-1">
                Smith Will · 4.2M Views
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Meet the Creator Micro 2, Small Size, Big Impact
              </h3>
              <p className="text-gray-600">
                From tech reviews to gameplay breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default HallOfFrame;
