// ProcessSection.jsx
import { Sparkle } from "lucide-react";
import process1 from "../assets/process1.avif"
import process2 from "../assets/process2.avif"
import process3 from "../assets/process3.png"
import process4 from "../assets/process4.png"

const processSteps = [
  {
    id: "01",
    title: "Drop Your Footage",
    description:
      "Upload your raw clips — WeTransfer, Google Drive, Dropbox — whatever works for you.",
    icons: process1,
  },
  {
    id: "02",
    title: "We Do Our Magic",
    description:
      "We cut, trim, color-grade, and add engaging transitions.",
    icons: process2,
  },
  {
    id: "03",
    title: "Feedback? Easy",
    description:
      "Want something changed? We offer smooth revision rounds to make sure everything.",
    icons: process3,
  },
  {
    id: "04",
    title: "Upload & Grow",
    description:
      "We deliver your final video in ready-to-upload YouTube format.",
    icons: process4,
  }
];

export default function Process() {
  return (
    <div className="">

      <section className="py-16 ">
        <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col  items-center">
          <div className="mb-3">
            <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2 "><span><Sparkle className="h-2 w-2 text-[#FF5000] " fill="#FF5000" /></span> Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
            How It Works?
          </h2>

          <p className="text-[18px] text-[#212121] leading-[27px text-center max-w-xl">
            A quick overview of how we work together to make your <br />edit best in class!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-dotted border-[#ebebeb]   bg-white p-6 flex flex-col justify-between items-start gap-4"
            >
              <div className="text-[18px] border border-dotted border-[#ebebeb] text-[#171717] py-1 px-2 rounded-lg">
                {step.id}
              </div>
              <div className="w-full flex justify-center ">
                <img
                  src={step.icons}
                  alt=""
                  className="w-[300px] object-contain"
                />
              </div>
              <div className="h-[80px] flex flex-col justify-between">
                <h3 className="text-[20px] font-normal leading-[28px] text-[#171717]">{step.title}</h3>
                <p className="text-[15px] font-normal leading-[20px] text-[#4D4D4D]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
