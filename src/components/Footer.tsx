import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
              <img 
                src="/logo1.png" 
                alt="Nature-Se Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                loading="lazy"
              />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold">Nature-Se</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Bringing you the raw richness of wild forest honey. Pure, unfiltered, and unmatched.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-gray-400 break-all">the.laxmidhar@gmail.com</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-gray-400">Thane, Maharashtra</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Promise</h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
              Every jar supports ethical practices and empowers women workers through training and employment.
            </p>
            <div className="bg-amber-600/20 border border-amber-600 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-amber-400 font-semibold text-xs sm:text-sm">
                100% Pure & Natural<br />
                Ethically Sourced<br />
                Women Empowered
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-base sm:text-lg md:text-xl text-amber-500 font-semibold italic mb-2">
              "Taste nature's honesty. Support real change."
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Choose Nature-Se – Real honey doesn't have a season — it has a reason.
            </p>
          </div>
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Nature-Se. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
