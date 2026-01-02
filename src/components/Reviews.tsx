import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Static reviews will be used instead of live Google reviews

const GOOGLE_MAPS_REVIEW_LINK = 'https://g.page/r/Cfi_IOo-T6FDEBI/review';

export default function Reviews() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const staticReviews = [
    { author_name: 'Amar', text: 'Absolutely love this honey — pure, natural and delicious.', img: '/review1.png' },
    { author_name: 'Howrah', text: 'Great flavour and very satisfying. Highly recommended.', img: '/review2.png' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // No live fetch — using `staticReviews` above

  return (
    <section ref={sectionRef} id="reviews" className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Real experiences from real people</p>
        </div>

        

        

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 text-center">
          <div className="text-lg font-semibold text-gray-800 mb-4">Average rating: 4.7</div>
          <div className="flex gap-4 justify-center items-center">
            <img src="/review1.png" alt="review 1" className="max-w-sm h-auto" loading="lazy" />
            <img src="/review2.png" alt="review 2" className="max-w-sm h-auto" loading="lazy" />
          </div>
        </div>

        

        <div className="max-w-xs mx-auto">
          <a href={GOOGLE_MAPS_REVIEW_LINK} target="_blank" rel="noreferrer" className="block w-full text-center bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition">
            Review us
          </a>
        </div>
      </div>
    </section>
  );
}
