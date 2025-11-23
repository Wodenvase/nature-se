import { ShoppingBag, CheckCircle, Leaf } from 'lucide-react';
import { useEffect, useState, useRef, useMemo } from 'react';
import OrderPopup from './OrderPopup';

export default function Products() {
  const [visible, setVisible] = useState(false);
  // separate image indices for two products
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Product 1 images (Kashmir edition)
  const product1Images = useMemo(() => ['/01.jpg', '/02.jpg', '/03.jpg'], []);
  // Product 2 images (Royal Dryfruits Honey)
  const product2Images = useMemo(() => ['/04.jpg', '/05.jpg', '/06.jpg'], []);

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
    [...product1Images, ...product2Images].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [product1Images, product2Images]);

  // benefits list removed (unused) to satisfy linter; keep product details focused in the UI

  return (
    <section ref={sectionRef} id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Our Premium Products</h2>
          <p className="text-lg sm:text-xl text-gray-600">Experience the purity of the forest</p>
        </div>

  {/* Order popup modal */}
  <OrderPopup open={showPopup} onClose={() => setShowPopup(false)} />

        <div
          className={`max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Product 1 column */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
              <div className="w-full max-w-md mb-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wide">Premium Quality</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">WILD FOREST HONEY (KASHMIR EDITION)</h3>
              </div>

              {/* Images first */}
              <div className="relative w-full max-w-sm sm:max-w-md group mb-4">
                <div className="relative w-full aspect-square mb-4 sm:mb-6 lg:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={product1Images[currentImageIndex1]}
                    alt={`WILD FOREST HONEY (KASHMIR EDITION) - View ${currentImageIndex1 + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-3 mb-4">
                  {product1Images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex1(index)}
                      onMouseEnter={() => setCurrentImageIndex1(index)}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-300 ${
                        currentImageIndex1 === index
                          ? 'border-amber-600 ring-2 sm:ring-4 ring-amber-600/30 scale-110'
                          : 'border-amber-300 hover:border-amber-500 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={product1Images[index]}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg mb-4">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">100% Pure</span>
                </div>
              </div>

              {/* Size & cost */}
              <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-600">Available Size</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-xl sm:text-2xl font-bold text-gray-800">250g</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm text-gray-600">MRP</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-2xl sm:text-3xl font-bold text-amber-600">₹500</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs sm:text-sm text-gray-600 bg-green-100 rounded-lg py-2">Forest-sourced single-origin honey</div>
              </div>

              {/* Nutrition */}
              <div className="mb-6 sm:mb-8 max-w-sm w-full">
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

              <button onClick={() => setShowPopup(true)} className="w-full bg-amber-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Product 2 column */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
              <div className="w-full max-w-md mb-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wide">Premium Quality</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">ROYAL DRYFRUITS HONEY</h3>
              </div>

              {/* Images first */}
              <div className="relative w-full max-w-sm sm:max-w-md group mb-4">
                <div className="relative w-full aspect-square mb-4 sm:mb-6 lg:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img src={product2Images[currentImageIndex2]} alt={`ROYAL DRYFRUITS HONEY - View ${currentImageIndex2 + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex justify-center space-x-2 sm:space-x-3 mb-4">
                  {product2Images.map((_, index) => (
                    <button key={index} onClick={() => setCurrentImageIndex2(index)} onMouseEnter={() => setCurrentImageIndex2(index)} className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-300 ${currentImageIndex2 === index ? 'border-amber-600 ring-2 sm:ring-4 ring-amber-600/30 scale-110' : 'border-amber-300 hover:border-amber-500 opacity-70 hover:opacity-100'}`}>
                      <img src={product2Images[index]} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg mb-4">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">100% Pure</span>
                </div>
              </div>

              {/* Size & cost */}
              <div className="bg-amber-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-600">Available Size</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-xl sm:text-2xl font-bold text-gray-800">250g</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm text-gray-600">MRP</span>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-2xl sm:text-3xl font-bold text-amber-600">₹700</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs sm:text-sm text-gray-600 bg-green-100 rounded-lg py-2">Premium dryfruit-infused honey</div>
              </div>

              {/* Nutrition */}
              <div className="mb-6 sm:mb-8 max-w-sm w-full">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Nutritional Values (per 100g):</h4>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Calories</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">390 kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Carbohydrates</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">191 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Sugar</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">52 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Fat</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">15.4 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Protein</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">6.8 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Sodium</span>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">10 mg</span>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setShowPopup(true)} className="w-full bg-amber-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Forest Sourced</h4>
            <p className="text-sm sm:text-base text-gray-600">Directly from pristine Indian forests</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Bee Friendly</h4>
            <p className="text-sm sm:text-base text-gray-600">Ethical harvesting practices</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Women Empowered</h4>
            <p className="text-sm sm:text-base text-gray-600">Supporting local women workers</p>
          </div>
        </div>

        {/* New full-width square image section (background3) placed below products) */}
        <div className={`max-w-6xl mx-auto mt-10 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-50 mx-4">
            <img src="/background3.jpg" alt="Background 3" className="w-full aspect-square object-cover" loading="lazy" />
          </div>
        </div>

        {/* Understanding Honey Better section (one big left block + six small right blocks) */}
        <div className={`max-w-6xl mx-auto mb-12 px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Understanding Honey Better</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Common Beliefs: Dark honey is always better than light honey.</p>
                  <p>Fact: Honey's color depends on the flowers it comes from. Both dark and light varieties are pure and nutritious; they simply differ in taste and mineral levels.</p>
                </div>
                <div>
                  <p className="font-semibold">Common Beliefs: Honey is meant for a specific season.</p>
                  <p>Fact: Honey is an all-season wellness food. It supports immunity and warmth in winter, and provides clean energy and digestive comfort in summer—ideal for year-round use.</p>
                </div>
                <div>
                  <p className="font-semibold">Common Beliefs: Heating honey makes it poisonous.</p>
                  <p>Fact: Heating may reduce some natural enzymes, but honey does not become toxic. Warmed or cooked honey remains completely safe to consume.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Supports Immunity</h4>
                <p className="text-sm text-gray-600">Rich in natural antioxidants that help strengthen the body's defense system.</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Aids Digestion</h4>
                <p className="text-sm text-gray-600">Helps maintain gut comfort and can ease acidity when taken regularly.</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Hydration Support</h4>
                <p className="text-sm text-gray-600">When mixed with water or lemon, it helps maintain fluid balance, especially in summer.</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Soothes Throat & Cough</h4>
                <p className="text-sm text-gray-600">Provides gentle relief from irritation, especially with warm water or tea.</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Natural Energy</h4>
                <p className="text-sm text-gray-600">Offers quick, clean energy without the crash associated with refined sugar.</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold mb-2">Skin & Wellness Benefits</h4>
                <p className="text-sm text-gray-600">Moisturizing properties support overall skin health when consumed daily.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
