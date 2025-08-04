// import React from "react";
import { Sparkle } from "lucide-react";

// const Pricing = () => {
//   return (
//     <section className="py-16">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col items-center">
//         <div className="mb-3">
//           <span className="px-4 py-2 w-fit text-[16px] leading-[22px] rounded-full border border-dotted border-[#ebebeb] bg-white tracking-wide text-[#171717] flex justify-center items-center gap-2">
//             <Sparkle className="h-2 w-2 text-[#FF5000]" fill="#FF5000" />
//             Pricing
//           </span>
//         </div>
//         <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-2 leading-snug">
//           Simple Plans
//         </h2>
//         <p className="text-[18px] text-[#212121] leading-[27px] text-center max-w-xl">
//           Whether you’re uploading weekly or scaling fast, we’ve got a plan tailored to your content flow.
//         </p>
//       </div>


//  <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
//         {/* Starter Plan */}
//         <div className="border border-gray-700 p-6 rounded-xl  flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-semibold mb-2">Starter Plan</h3>
//             <p className="text-3xl font-bold text-[#facc15] mb-1">$899</p>
//             <p className="text-sm text-gray-400 mb-4">/month</p>
//             <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1 mb-4">
//               <li>Website + Hosting</li>
//               <li>SEO + Content Upload</li>
//               <li>1 Revision</li>
//             </ul>
//           </div>
//           <button className="bg-[#facc15] text-black font-medium py-2 px-4 rounded mt-auto">Get Started</button>
//         </div>

//         {/* Premium Plan */}
//         <div className="border border-gray-700 p-6 rounded-xl bg-[#141414] flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-semibold mb-2">Premium Plan</h3>
//             <p className="text-3xl font-bold text-[#facc15] mb-1">$1499</p>
//             <p className="text-sm text-gray-400 mb-4">/month</p>
//             <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1 mb-4">
//               <li>Website + Hosting + Domain</li>
//               <li>SEO + Content Upload</li>
//               <li>3 Revisions</li>
//               <li>WhatsApp + Insta Integration</li>
//             </ul>
//           </div>
//           <button className="bg-[#facc15] text-black font-medium py-2 px-4 rounded mt-auto">Get Started</button>
//         </div>
//       </div>

//       {/* Custom Plan Below */}
//       <div className="mt-8 max-w-3xl mx-auto border border-yellow-400 bg-yellow-50/10 rounded-xl p-6 md:p-8 text-center">
//         <h3 className="text-2xl font-semibold text-[#facc15] mb-2">Need something custom?</h3>
//         <p className="text-gray-300 mb-4">Tell us your idea, and we’ll build it for you. Whether you’re looking for a personal portfolio, a jewelry store, or a full-featured e-commerce platform, we’ve got you covered.</p>
//         <button className="bg-[#facc15] text-black font-medium py-2 px-6 rounded">Contact Us</button>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
import React from 'react';

// Main App component
const Pricing = () => {
  // Data for the pricing plans
  const pricingPlans = [
    {
      id: 'starter',
      title: 'Starter Plan',
      price: '$899',
      frequency: '/month',
      description: 'For growing creators who post 4-6 videos/month',
      features: [
        'Up to 6 Videos/month',
        'Revisions 2 per video',
        'Basic color grading and audio sync',
        '72 hour turnaround',
        'Email support',
      ],
      isPopular: false,
      buttonText: 'Book a Call',
    },
    {
      id: 'pro',
      title: 'Pro Plan',
      price: '$1599',
      frequency: '/month',
      description: 'For growing creators who post 4-6 videos/month',
      features: [
        'Up to 20 Videos/month',
        'Revisions 5 per video',
        'Advance color grading and audio sync',
        '48 hour turnaround',
        'Video Call Support',
      ],
      isPopular: true,
      buttonText: 'Book a Call',
    },
    {
      id: 'custom',
      title: 'Custom Plan',
      price: '???',
      frequency: '/month',
      description: 'For growing creators who post 4-6 videos/month',
      features: [
        'Choose from 10 to 40+ Video Edits',
        '24h / 48h / 72h Delivery',
        'Title, thumbnail, and retention tips',
        'Shorts, Reels, long-form, podcasts',
        'One edit = multi-channel assets',
      ],
      isPopular: false,
      buttonText: 'Book a Call',
      isDark: true, // Special styling for the custom plan
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <section className="py-16 w-[900px]">
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
        <div className="  flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">

          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Render Starter and Pro Plans */}
              {pricingPlans.slice(0, 2).map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>

            {/* Render Custom Plan separately to span full width on smaller screens and center on larger */}
            <div className="flex justify-center">
              <div className="w-full h-[306px] rounded-2xl text-white bg-[#171717] flex items-center justify-around px-4 gap-2"> {/* Adjust width as needed */}
                <div className="w-[900px] h-[276px] border-1 border-dotted border-[#353535] text-white rounded-2xl bg-[#212121] px-4 flex gap-4 flex-col justify-center ">
                  <div>Custome Plan</div>
                  <div className="flex"><span className="text-5xl font-semibold">???</span>/month</div>
                  <div>For growing creators who post 4–6 videos/month</div>
                  <button className="bg-[#171717] text-white w-fit rounded-full px-4 py-3 flex items-center shadow-lg mb-2 cursor-pointer">
                    Book a Call
                    <span className="ml-2 bg-white  rounded-full h-10 w-10 flex justify-center items-center text-black">&rarr;</span>
                  </button>
                </div>
                <div className="w-full px-4">
                  <h3 className="text-lg font-semibold mb-4">Features included:</h3>
                  <ul className="space-y-3">

                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={`w-4 h-4 mr-2 flex-shrink-0 }`}
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
                      </svg>
                      <span className={``}>Choose from 10 to 40+ Video Edits</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={`w-4 h-4 mr-2 flex-shrink-0 }`}
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
                      </svg>
                      <span className={``}>Choose from 10 to 40+ Video Edits</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={`w-4 h-4 mr-2 flex-shrink-0 }`}
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
                      </svg>
                      <span className={``}>Choose from 10 to 40+ Video Edits</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={`w-4 h-4 mr-2 flex-shrink-0 }`}
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
                      </svg>
                      <span className={``}>Choose from 10 to 40+ Video Edits</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={`w-4 h-4 mr-2 flex-shrink-0 }`}
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
                      </svg>
                      <span className={``}>Choose from 10 to 40+ Video Edits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
};

// PricingCard component to render individual plan details
const PricingCard = ({ plan }) => {
  const { title, price, frequency, description, features, isPopular, buttonText, isDark } = plan;

  return (
    <div
      className={`relative p-8 rounded-2xl shadow-lg flex flex-col ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
    >
      {isPopular && (
        <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex items-baseline mb-4">
        <span className="text-5xl font-bold">
          {price}
        </span>
        <span className={`text-lg ml-2 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
          {frequency}
        </span>
      </div>
      <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>

      <button
        className={`flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300
          ${isDark
            ? 'bg-orange-600 hover:bg-orange-700 text-white'
            : 'bg-black hover:bg-gray-800 text-white'
          }`}
      >
        {buttonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Features included:</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={`w-4 h-4 mr-2 flex-shrink-0 ${isDark ? 'text-orange-400' : 'text-orange-500'}`}
              >
                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM.086 10.914A2 2 0 0 1 2 9.172V4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v4.672a2 2 0 0 1 1.914 1.742l-.236 1.18a.5.5 0 0 1-.498.411H.82a.5.5 0 0 1-.498-.411l-.236-1.18zM13 5H3v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-.5v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5z" />
              </svg>
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
