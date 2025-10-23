import { Heart, Shield, Sparkles, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function WhyChoose() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">💛 Why Choose Nature-Se</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose Nature-Se, you're not just buying honey – you're choosing purity, health, and positive change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Real Honey Doesn't Have a Season — It Has a Reason
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Make the switch to authentic, wild forest honey and experience the difference that purity makes.
          </p>
          <button
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
