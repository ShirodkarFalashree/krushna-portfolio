const Footer = () => {
  return (
    <footer className="bg-footerbg py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer