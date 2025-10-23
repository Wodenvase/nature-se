import { Sun, Snowflake, Calendar } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function MythBuster() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Snowflake className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mr-2 sm:mr-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">🌸 Myth Buster</h2>
              <Sun className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-600 ml-2 sm:ml-4" />
            </div>

            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 rounded-xl sm:rounded-2xl border-l-4 border-red-600">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-2 flex items-center">
                ❌ Myth: Honey is Just for Winter
              </h3>
            </div>

            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 rounded-xl sm:rounded-2xl border-l-4 border-green-600">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-3 sm:mb-4 flex items-center">
                ✅ Truth: It's an All-Season Superfood
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                While honey is often seen as a winter remedy, its benefits go far beyond cold weather.
                Raw honey is a powerhouse of natural energy, immunity support and digestive wellness — perfect for all seasons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 bg-amber-50 rounded-lg sm:rounded-xl text-center hover:scale-105 transition-transform">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Year-Round Benefits</h4>
                <p className="text-xs sm:text-sm text-gray-600">Morning routines, herbal drinks, skincare & recipes</p>
              </div>
              <div className="p-4 sm:p-6 bg-green-50 rounded-lg sm:rounded-xl text-center hover:scale-105 transition-transform">
                <Sun className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Natural Energy</h4>
                <p className="text-xs sm:text-sm text-gray-600">Sustained energy boost for active lifestyles</p>
              </div>
              <div className="p-4 sm:p-6 bg-blue-50 rounded-lg sm:rounded-xl text-center hover:scale-105 transition-transform sm:col-span-2 md:col-span-1">
                <Snowflake className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
                <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Immunity Support</h4>
                <p className="text-xs sm:text-sm text-gray-600">Anti-inflammatory & antibacterial properties</p>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-center text-gray-800 font-semibold bg-amber-100 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              Make honey a part of your everyday wellness — not just your winter routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
