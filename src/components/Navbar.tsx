export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <img 
              src="/logo2.png" 
              alt="Nature-Se Logo" 
              className="w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-105"
            />
            <span className="text-2xl sm:text-3xl font-bold text-gray-800 transition-colors">
              Nature-Se
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 transition-colors hover:text-amber-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 transition-colors hover:text-amber-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 transition-colors hover:text-amber-600"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 transition-colors hover:text-amber-600"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
