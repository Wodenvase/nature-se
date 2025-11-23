import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden site-bg">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/banner.jpg" alt="Nature-Se Background" className="w-full h-full object-cover opacity-30" loading="eager" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>

      {/* Left overlay card removed as per design request (clean landing banner) */}

      {/* Main centered content (moved right on large screens) */}
      <div className={`relative z-10 px-4 sm:px-6 max-w-6xl mx-auto py-8 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight lg:mt-6">Nature-Se</h1>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-700 font-semibold mb-6 sm:mb-8">Wild Forest Honey</p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 font-medium">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Untamed</span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Unfiltered</span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Unmatched</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">One Pure Step Toward Health</p>

          <button onClick={scrollToNext} className="cta-btn px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 shadow-xl">Discover Our Story</button>
        </div>
      </div>

      <button onClick={scrollToNext} className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
      </button>
    </section>
  );
}
