import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTop ? 'bg-transparent shadow-none' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
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
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform group-hover:scale-105"
            />
            <span className={`text-2xl sm:text-3xl font-bold transition-colors ${isTop ? 'text-white drop-shadow-lg' : 'text-gray-800'}`}>
              Nature-Se
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${isTop ? 'text-white' : 'text-gray-700'} hover:text-amber-600`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${isTop ? 'text-white' : 'text-gray-700'} hover:text-amber-600`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`transition-colors ${isTop ? 'text-white' : 'text-gray-700'} hover:text-amber-600`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className={`transition-colors ${isTop ? 'text-white' : 'text-gray-700'} hover:text-amber-600`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${isTop ? 'bg-white/20 text-white' : 'bg-amber-600 text-white'} px-6 py-2 rounded-full hover:bg-amber-700 transition-all hover:scale-105`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
