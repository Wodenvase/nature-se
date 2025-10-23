import { ShoppingBag, CheckCircle, Leaf } from 'lucide-react';
import { useEffect, useState, useRef, useMemo } from 'react';

export default function Products() {
  const [visible, setVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const productImages = useMemo(() => [
    '/product1.jpg',
    '/product2.jpg',
    '/product3.jpg',
    '/product4.jpg',
    '/product5.jpg',
  ], []);

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

  // Preload images for faster switching
  useEffect(() => {
    productImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [productImages]);

  const benefits = [
    'Raw & Unprocessed',
    'No Added Sugar',
    'No Preservatives',
    'Rich in Antioxidants',
    'Natural Enzymes Intact',
    'Ethically Sourced',
  ];

  return (
    <section ref={sectionRef} id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Our Premium Product</h2>
          <p className="text-lg sm:text-xl text-gray-600">Experience the purity of the forest</p>
        </div>

        <div
          className={`max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section - Optimized for mobile */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 order-1 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md group">
                <div className="relative w-full aspect-square mb-4 sm:mb-6 lg:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`Nature-Se Wild Forest Honey - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex justify-center space-x-2 sm:space-x-3 mb-4">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      onMouseEnter={() => setCurrentImageIndex(index)}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-300 ${
                        currentImageIndex === index
                          ? 'border-amber-600 ring-2 sm:ring-4 ring-amber-600/30 scale-110'
                          : 'border-amber-300 hover:border-amber-500 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={productImages[index]}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">100% Pure</span>
                </div>
              </div>
            </div>

            {/* Content Section - Optimized for mobile */}
            <div className="p-6 sm:p-8 lg:p-12 order-2 lg:order-2">
              <div className="flex items-center mb-3 sm:mb-4">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wide">
                  Premium Quality
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Nature-Se Wild Forest Honey
              </h3>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                Harvested from the pristine forests of India, our wild forest honey is a testament to nature's perfection.
                Each jar contains pure, unfiltered honey that retains all its natural goodness.
              </p>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Key Benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Nutritional Values (per 100g):</h4>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Calories</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">340 kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Carbohydrates</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">82 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Sugar</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">80 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Fat</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">0 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Protein</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">0 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Sodium</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">10 mg</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-600">Available Size</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-xl sm:text-2xl font-bold text-gray-800">250g</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm text-gray-600">Price</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-2xl sm:text-3xl font-bold text-amber-600">₹500</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs sm:text-sm text-gray-600 bg-green-100 rounded-lg py-2">
                  Perfect size for trying our premium forest honey
                </div>
              </div>

              <button className="w-full bg-amber-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>Order Now</span>
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                Free shipping on orders above ₹999
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌳</div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Forest Sourced</h4>
            <p className="text-sm sm:text-base text-gray-600">Directly from pristine Indian forests</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐝</div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Bee Friendly</h4>
            <p className="text-sm sm:text-base text-gray-600">Ethical harvesting practices</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👩</div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Women Empowered</h4>
            <p className="text-sm sm:text-base text-gray-600">Supporting local women workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
