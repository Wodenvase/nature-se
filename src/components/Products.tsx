import { ShoppingBag, CheckCircle, Leaf } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Products() {
  const [visible, setVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const productImages = [
    '/product1.jpg',
    '/product2.jpg',
    '/product3.jpg',
    '/product4.jpg',
    '/product5.jpg',
  ];

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

  const benefits = [
    'Raw & Unprocessed',
    'No Added Sugar',
    'No Preservatives',
    'Rich in Antioxidants',
    'Natural Enzymes Intact',
    'Ethically Sourced',
  ];

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Premium Product</h2>
          <p className="text-xl text-gray-600">Experience the purity of the forest</p>
        </div>

        <div
          className={`max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
              <div className="relative w-full max-w-md group">
                <div className="relative w-full aspect-square mb-8 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`Nature-Se Wild Forest Honey - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex justify-center space-x-3 mb-4">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      onMouseEnter={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                        currentImageIndex === index
                          ? 'border-amber-600 ring-4 ring-amber-600/30 scale-110'
                          : 'border-amber-300 hover:border-amber-500 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={productImages[index]}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">100% Pure</span>
                </div>
              </div>
            </div>

            <div className="p-12">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-amber-600 mr-3" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
                  Premium Quality
                </span>
              </div>

              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Nature-Se Wild Forest Honey
              </h3>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Harvested from the pristine forests of India, our wild forest honey is a testament to nature's perfection.
                Each jar contains pure, unfiltered honey that retains all its natural goodness.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Key Benefits:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nutritional Values (per 100g):</h4>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Calories</span>
                      <span className="text-gray-800 font-bold">340 kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Carbohydrates</span>
                      <span className="text-gray-800 font-bold">82 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sugar</span>
                      <span className="text-gray-800 font-bold">80 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Fat</span>
                      <span className="text-gray-800 font-bold">0 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Protein</span>
                      <span className="text-gray-800 font-bold">0 g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sodium</span>
                      <span className="text-gray-800 font-bold">10 mg</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-600">Available Size</span>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-800">250g</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Price</span>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-amber-600">₹500</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600 bg-green-100 rounded-lg py-2">
                  Perfect size for trying our premium forest honey
                </div>
              </div>

              <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group">
                <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Order Now</span>
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Free shipping on orders above ₹999
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌳</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Forest Sourced</h4>
            <p className="text-gray-600">Directly from pristine Indian forests</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🐝</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Bee Friendly</h4>
            <p className="text-gray-600">Ethical harvesting practices</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👩</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Women Empowered</h4>
            <p className="text-gray-600">Supporting local women workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
