import { Sparkles, Droplet, Award, Heart } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function About() {
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

  const features = [
    {
      icon: Sparkles,
      title: 'Untamed',
      description: 'This honey captures the raw spirit of the wilderness. It\'s nature in its most authentic form.',
    },
    {
      icon: Droplet,
      title: 'Unfiltered',
      description: 'Just as the bees made it. We preserve all the natural pollen, enzymes, and nutrients by avoiding excessive filtering.',
    },
    {
      icon: Award,
      title: 'Unmatched',
      description: 'Offering a flavour, depth, and purity that mass-produced honey simply can\'t replicate.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            🌿 What Makes Our Honey Truly Special?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mb-4 sm:mb-6 mx-auto" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              At Nature-Se, We Bring You the Raw Richness of Wild Forest Honey
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mb-6 sm:mb-8">
              Sourced directly from the forests of India. Every drop carries the flavour of nature –
              Made with Nature's Purity, Unprocessed Goodness & Inner Strength.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-center">
              This isn't just honey. It's a promise of purity, a tribute to the forests, and a step toward Health.
            </p>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-12 md:mt-16 bg-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
              <Heart className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-pink-600" />
              <img 
                src="/logo1.png" 
                alt="Nature-Se Logo" 
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center md:text-left">
                Empowering Women, One Jar at a Time
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
                Each jar supports and uplifts women workers through ethical training and employment.
                When you choose Nature-Se, you're not just choosing quality honey – you're supporting real change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
