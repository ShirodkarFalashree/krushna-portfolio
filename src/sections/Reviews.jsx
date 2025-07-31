import { Sparkle } from "lucide-react";
import React from "react";

// Example: update THIS value if your navbar is taller/shorter
const NAVBAR_HEIGHT = 80; // px

// Expanded reviews array (6 cards)
const reviews = [
  {
    username: "johnbai",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Editing leveled up big time. Timing, cuts, music — everything’s just right",
  },
  {
    username: "chrismaw",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Noticed the pacing and flow are so much better lately. You working with someone new?",
  },
  {
    username: "jemmy",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "This feels super polished now. Loving the new vibe — your editor is killing it",
  },
  {
    username: "linda",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "Faster turnaround and better storytelling! These edits are always 🔥",
  },
  {
    username: "robertg",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    text: "Great attention to detail — even the little moments are highlighted perfectly.",
  },
  {
    username: "katyart",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My channel's visual style really leveled up! Edits match my vibe perfectly. Highly recommended.",
  },
];

export default function ReviewsSection() {
  const cardTopOffset = 56; // px – vertical gap between the sticky cards
  const zStart = 50;

  // Calculate minimum height for the parent flex row, for proper sticky right-side bounding.
  const minSectionHeight = NAVBAR_HEIGHT + (reviews.length - 1) * cardTopOffset + 200; // some extra for padding

  return (
    <div className="w-full px-4 py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="mb-20 w-full flex flex-col justify-center items-center">
        <div className="mb-3">
          <span className="px-4 py-2 w-fit text-[16px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2">
            <span>
              <Sparkle className="h-4 w-4 text-[#FF5000]" fill="#FF5000" />
            </span>
            Reviews
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
        Loved by Creators
        </h2>
        <p className="text-[18px] text-[#212121] leading-[27px] text-center max-w-xl">
        We don’t just deliver edits — we make creators look good, grow faster, and stay consistent.
        </p>
      </div>

      <div
        className="max-w-5xl w-full flex flex-col md:flex-row  items-start gap-8"
        style={{ minHeight: minSectionHeight }}
      >
        {/* Left: Reviews */}
        <div className="flex-1 flex flex-col gap-5">
          <div
            className="relative"
            style={{
              minHeight:
                (reviews.length - 1) * cardTopOffset + 180, // min for all sticky cards
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`
                  sticky left-0 bg-white rounded-xl shadow-md px-6 py-4 flex items-center gap-4 transition-all
                  mb-3
                `}
                style={{
                  top: NAVBAR_HEIGHT + i * cardTopOffset, // offset for navbar!
                  zIndex: zStart - i,
                  marginTop: i === 0 ? 0 : -24,
                }}
              >
                <img
                  src={r.avatar}
                  alt={r.username}
                  className="w-10 h-10 rounded-full border border-gray-200"
                />
                <div>
                  <span className="font-semibold">@{r.username}</span>
                  <p className="text-gray-600">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sticky Call to Action */}
        <div className="flex-1 flex flex-col  justify-center items-center">
          <div className="w-full flex flex-col items-center">
            {/* Sticky on md+, out of the way on mobile */}
            <div className="bg-black text-white rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-sm w-full md:sticky md:top-[92px] md:self-start">
              <div className="mb-2">
                <span className=" w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  <span className="text-4xl">👍</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Book a 15-min intro call
              </h3>
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition mb-4">
                Book a Call <span className="ml-2 text-orange-500">&rarr;</span>
              </button>
              <p className="mb-1 text-gray-300">Prefer to Email?</p>
              <a
                href="mailto:ajoy.sayhello@gmail.com"
                className="text-orange-300 underline text-sm mb-4"
              >
                ajoy.sayhello@gmail.com
              </a>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Long-Term Collaboration</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Business Inquiry</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Want My Videos Edited?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
