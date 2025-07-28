const Navbar = () => {
  return (
    <nav className="bg-navbg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">YourLogo</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/work" className="hover:text-primary">Work</a>
          <a href="/blog" className="hover:text-primary">Blog</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;