import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      {/* Optimized background image with loading="eager" and proper sizing */}
      <div className="absolute inset-0">
        <img
          src="/banner.jpg"
          alt="Nature-Se Background"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-8 transition-all duration-1000 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="hover:scale-105 transition-transform duration-300">
            <img 
              src="/circular_logo.png" 
              alt="Nature-Se Logo" 
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover shadow-lg"
              loading="eager"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
          Nature-Se
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-700 font-semibold mb-6 sm:mb-8">
          Wild Forest Honey
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 font-medium">
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Untamed
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Unfiltered
          </span>
          <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Unmatched
          </span>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          One Pure Step Toward Health
        </p>

        <button
          onClick={scrollToNext}
          className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-700 transition-all hover:scale-105 shadow-xl"
        >
          Discover Our Story
        </button>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
      </button>
    </section>
  );
}
