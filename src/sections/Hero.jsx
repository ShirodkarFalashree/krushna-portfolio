import { Wand } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className=' h-[560px] flex justify-center ' >
      <div className='w-[1000px]  h-full'>
        <section className="px-8 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between relative">
          <div className='w-[600px]'>
            <div className="flex items-center mb-4 space-x-2 px-[12px] py-[12px] bg-white border-1 border-dotted border-[#e1e1e1] w-fit rounded-4xl">
              {/* Replace with avatars if available */}
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-white" src="https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=512" alt="User" />
                <img className="w-7 h-7 rounded-full border-2 border-white" src="https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=512" alt="User" />
                <img className="w-7 h-7 rounded-full border-2 border-white" src="https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=512" alt="User" />
              </div>
              <span className=" text-[14px] text-[#171717]">Trusted By 100+ Creators</span>
            </div>
            <h1 className="text-4xl md:text-[74px] leading-[81px] text-black font-bold mb-3">
              Video Edits <Wand className=' inline h-16 w-16 mt-[-10px] bg-[#FF5000] p-2 rounded-2xl text-white rotate-10 shadow-lg shadow-[#FF5000] ' /> <br className="" />
              That <span className="text-orange-600">Stand Out!</span>

            </h1>
            <p className="text-[#171717] text-[18px] leading-[27px] mb-8">
              Hook faster. Edit smarter. Grow your audience with <br />scroll-stopping YouTube videos.
            </p>
            <button className="bg-[#171717] text-white rounded-full px-4 py-3 flex items-center shadow-lg mb-2 cursor-pointer">
              Book a Call
              <span className="ml-2 bg-white  rounded-full h-10 w-10 flex justify-center items-center text-black">&rarr;</span>
            </button>
            <p className="text-[#171717] text-[16px] leading-[25px] mt-2">No pressure, just possibilities.</p>
          </div>
          {/* Testimonials floating bubbles */}
          <div className="relative flex flex-col items-end">
            <div className="bg-white rounded-xl border-1 border-dotted border-[#e1e1e1] shadow-xl p-4 mb-6 w-80 rotate-6">
              <span className="font-semibold">@tomas</span>
              <div className="mt-1 text-sm">Bestest Edit in 48 hours.</div>
              <div className="flex mt-2 text-gray-400 space-x-4 text-xs">
                <span>👍</span> <span>💬</span> <span>Reply</span>
              </div>
            </div>
            <div className="bg-white border-1 border-dotted border-[#e1e1e1] rounded-xl shadow-xl p-4 w-80 -rotate-6">
              <span className="font-semibold">@mark_locus</span>
              <div className="mt-1 text-sm">This edit boosted my retention rate by 35%!</div>
              <div className="flex mt-2 text-gray-400 space-x-4 text-xs">
                <span>👍</span> <span>💬</span> <span>Reply</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
