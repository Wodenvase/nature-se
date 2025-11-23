import { ArrowDown } from 'lucide-react';import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';import { ArrowDown } from 'lucide-react';



export default function Hero() {export default function Hero() {

  const [visible, setVisible] = useState(false);  const [visible, setVisible] = useState(false);



  useEffect(() => {    </section>

    setVisible(true);  );

  }, []);}

      </div>

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

        {/* Left overlay card */}
        <div className="absolute left-4 top-12 md:left-8 md:top-20 lg:left-12 lg:top-24 z-20 w-full max-w-md lg:max-w-sm">
          <div className="box-bg rounded-3xl p-6 md:p-8 shadow-2xl text-left">
            <div className="flex items-center space-x-4">
              <img src="/circular_logo.png" alt="Nature-Se Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md" loading="eager" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nature-Se</h2>
                <p className="text-sm md:text-base text-amber-600 mt-1">Wild Forest Honey</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Untamed</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Unfiltered</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Unmatched</span>
            </div>

            <div className="mt-5">
              <button onClick={scrollToNext} className="cta-btn px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Main centered content (moved right on large screens) */}
        <div className={`relative z-10 px-4 sm:px-6 max-w-6xl mx-auto py-8 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="lg:ml-[26rem] text-center">
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

                    </section>

      {/* Main centered content (moved right on large screens) */}                  );

      <div className={`relative z-10 px-4 sm:px-6 max-w-6xl mx-auto py-8 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        <div className="lg:ml-[26rem] text-center">        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight lg:mt-6">Nature-Se</h1>          One Pure Step Toward Health

        </p>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-700 font-semibold mb-6 sm:mb-8">Wild Forest Honey</p>

        <button

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 font-medium">          onClick={scrollToNext}

            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Untamed</span>          className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-700 transition-all hover:scale-105 shadow-xl"

            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Unfiltered</span>        >

            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur rounded-full shadow-lg transition-shadow">Unmatched</span>          Discover Our Story

          </div>        </button>

      </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">One Pure Step Toward Health</p>

      <button

          <button onClick={scrollToNext} className="cta-btn px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 shadow-xl">Discover Our Story</button>        onClick={scrollToNext}

        </div>        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"

      </div>      >

        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />

      <button onClick={scrollToNext} className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">      </button>

        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />    </section>

      </button>  );

    </section>}

  );
}
