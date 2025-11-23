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

  // features removed — custom info boxes are rendered instead

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            What Makes Our Honey Truly Special?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Large left box with provided long copy */}
          <div className={`p-8 rounded-2xl bg-white shadow-md transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">At Nature-Se, We Bring You</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Products sourced directly from the deep forests of India - Like Gujrat and Kashmir.
              They carries the raw richness of true wild forest honey. Every drop reflects nature's purity - unprocessed, honest, and full of its original goodness.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              It's more than just honey — it's a promise of purity, a quiet tribute to the forests, and a small step toward better health with every spoonful.
            </p>
          </div>

          {/* Right: 2x2 small info boxes */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Pure & Authentic</h4>
              <p className="text-sm text-gray-600">There are no additives, no shortcuts, and no processing - just pure, honest honey straight from nature.</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Unmatched Quality</h4>
              <p className="text-sm text-gray-600">A depth and purity that mass-produced honey can't replicate.</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Health First</h4>
              <p className="text-sm text-gray-600">Naturally rich in antioxidants, enzymes, and essential nutrients.</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Real Impact</h4>
              <p className="text-sm text-gray-600">Every purchase supports ethical harvesting and responsible practices.</p>
            </div>
          </div>
        </div>

  {/* Two image boxes below using background1.jpg and background2.jpg */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-sm">
            <img src="/background1.jpg" alt="Background 1" className="w-full aspect-square object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-sm">
            <img src="/background2.jpg" alt="Background 2" className="w-full aspect-square object-cover" loading="lazy" />
          </div>
        </div>

        {/* Women empowerment block with the longer provided copy */}
        <div className={`p-6 sm:p-8 rounded-2xl bg-white shadow-md transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Women Empowerment at Nature-Se</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            At Nature-Se, we employ women from nearby villages, giving them reliable livelihood opportunities close to home. They play an essential role in our filtering and harvesting, shaping the purity of every jar. The jute covers on our bottles are handcrafted by these skilled women, showcasing their traditional artistry. By supporting their work, we help strengthen financial independence, build skills, and uplift the community.
          </p>
        </div>
      </div>
    </section>
  );
}
