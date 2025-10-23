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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>

      <div
        className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="text-6xl animate-bounce">🍯</div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
          Nature-Se
        </h1>

        <p className="text-2xl md:text-4xl text-amber-700 font-semibold mb-4">
          Wild Forest Honey
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl text-gray-700 mb-12 font-medium">
          <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md">
            Untamed
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md">
            Unfiltered
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md">
            Unmatched
          </span>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          One Pure Step Toward Health
        </p>

        <button
          onClick={scrollToNext}
          className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all hover:scale-105 shadow-xl"
        >
          Discover Our Story
        </button>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-amber-600" />
      </button>
    </section>
  );
}
