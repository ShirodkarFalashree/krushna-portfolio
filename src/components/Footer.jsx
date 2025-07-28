import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-semibold">CreatorFlow</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Helping YouTubers stand out with pro edits, fast delivery and what not!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Works</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">Legal Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Services</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">Socials</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>Copyright 2026 to CreatorFlow</p>
        <p>Made with Framer & Love</p>
      </div>
    </footer>
  );
};

export default Footer;
