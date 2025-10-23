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
    <section ref={sectionRef} id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            🌿 What Makes Our Honey Truly Special?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-16 h-16 text-amber-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">
              At Nature-Se, We Bring You the Raw Richness of Wild Forest Honey
            </h3>
            <p className="text-lg leading-relaxed text-center mb-8">
              Sourced directly from the forests of India. Every drop carries the flavour of nature –
              Made with Nature's Purity, Unprocessed Goodness & Inner Strength.
            </p>
            <p className="text-xl font-semibold text-center">
              This isn't just honey. It's a promise of purity, a tribute to the forests, and a step toward Health.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 bg-pink-50 rounded-3xl p-12 shadow-lg transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Heart className="w-16 h-16 text-pink-600" />
              <img 
                src="/logo1.png" 
                alt="Nature-Se Logo" 
                className="w-16 h-16"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Empowering Women, One Jar at a Time
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
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
