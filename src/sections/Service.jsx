import { Captions, GalleryHorizontal, Megaphone, MousePointerClick, Plane, Shrink, Sparkle, TrendingUp, Unlink } from 'lucide-react'
import React from 'react'

const Service = () => {
  return (
    <div>
      <section className="w-full pt-20 pb-10 flex flex-col items-center">
        <div className="mb-3">
          <span className="px-4 py-2 text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2 "><span><Sparkle className="h-2 w-2 text-[#FF5000] " fill="#FF5000" /></span> Services</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
          What We Do Best
        </h2>
        <p className="text-[18px] text-[#212121] leading-[27px] mb-10 text-center max-w-xl">
          We craft scroll-stopping edits that keep your audience<br /> hooked and your content looking top-tier.
        </p>
        <div className="w-[900px] ">
          <div className='w-full h-[300px]  mb-2 flex gap-2 '>
            <div className='w-[523px] p-[25px] bg-[#171717] h-full text-white rounded-3xl flex flex-col justify-between'>
              <div className=''>
                <p className='text-[20px] leading-[28px] mb-[10px]'>Youtube Shorts Editing</p>
                <p className='text-[16px] leading-[25px] text-[#E6E6E6]'>We turn raw clips into high-retention, caption-packed vertical videos that pop on Reels, Shorts, and TikTok. Great for content repurposing and explosive growth.</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><GalleryHorizontal className='text-[#FF5000] h-6 w-6' />Snappy Pacing</div>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><Megaphone className='text-[#FF5000] h-6 w-6' />Viral-Ready</div>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><Captions className='text-[#FF5000] h-6 w-6' />Subtitled</div>
              </div>
            </div>
            <div className='w-[366px] bg-[#171717] text-white h-full p-[25px] rounded-3xl flex flex-col justify-between '>
              <div className=''>
                <p className='text-[20px] leading-[28px] mb-[10px]'>Long Form Edits</p>
                <p className='text-[16px] leading-[25px] text-[#E6E6E6]'>From vlogs to deep dives, we trim the fluff, tighten the pacing.</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><Plane className='text-[#FF5000] h-6 w-6' />Retention-Driven</div>
              </div>
            </div>
          </div>
          <div className='w-full h-[300px]   flex gap-2 '>
            <div className='w-[366px] bg-[#171717] text-white h-full p-[25px] rounded-3xl flex flex-col justify-between '>
              <div className=''>
                <p className='text-[20px] leading-[28px] mb-[10px]'>Thumbnail Design</p>
                <p className='text-[16px] leading-[25px] text-[#E6E6E6]'>From vlogs to deep dives, we trim the fluff, tighten the pacing.</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><MousePointerClick className='text-[#FF5000] h-6 w-6' />Retention-Driven</div>
              </div>
            </div>
            <div className='w-[523px] p-[25px] bg-[#171717] h-full text-white rounded-3xl flex flex-col justify-between'>
              <div className=''>
                <p className='text-[20px] leading-[28px] mb-[10px]'>Content Repurposing Package</p>
                <p className='text-[16px] leading-[25px] text-[#E6E6E6]'>One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers. Perfect for creators who want to stay visible everywhere.</p>
              </div>
              <div className='flex gap-2'>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><Shrink className='text-[#FF5000] h-6 w-6' />Snappy Pacing</div>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><Unlink className='text-[#FF5000] h-6 w-6' />Viral-Ready</div>
                <div className='flex justify-center items-center gap-1 py-2 px-3 bg-[#212121] border border-[#353535] w-fit rounded-4xl text-[16px] leading-[26px]'><TrendingUp className='text-[#FF5000] h-6 w-6' />Subtitled</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
