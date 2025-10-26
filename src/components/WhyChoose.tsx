import { Heart, Shield, Sparkles, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import OrderPopup from './OrderPopup';

export default function WhyChoose() {
  const [visible, setVisible] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
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

  const reasons = [
    {
      icon: Heart,
      title: 'Pure & Authentic',
      description: 'Taste nature\'s honesty in every drop. No additives, no processing, just pure honey.',
    },
    {
      icon: Shield,
      title: 'Health First',
      description: 'Rich in antioxidants, enzymes, and natural nutrients that support your wellness journey.',
    },
    {
      icon: Sparkles,
      title: 'Unmatched Quality',
      description: 'A depth and purity that mass-produced honey simply can\'t replicate.',
    },
    {
      icon: Users,
      title: 'Real Impact',
      description: 'Support ethical practices and empower women workers with every purchase.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Nature-Se</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose Nature-Se, you're not just buying honey – you're choosing purity, health, and positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{reason.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Real Honey Doesn't Have a Season — It Has a Reason
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Make the switch to authentic, wild forest honey and experience the difference that purity makes.
          </p>
          <button
            onClick={() => setShowOrderPopup(true)}
            className="bg-white text-amber-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </div>
      
      <OrderPopup 
        isOpen={showOrderPopup} 
        onClose={() => setShowOrderPopup(false)} 
      />
    </section>
  );
}
