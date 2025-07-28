const Navbar = () => {
  return (
    <nav className="bg-navbg sticky flex justify-center items-center z-50 h-[75px] border-1 border-dotted border-[#c7c7c7] bg-white">
      <div className="w-full mx-10 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">YourLogo</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/work" className="hover:text-primary">Work</a>
          <a href="/blog" className="hover:text-primary">Blog</a>
        </div>
        <div className="">
          {/* Mobile menu button would go here */}
          <button className="text-black">
           button
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;