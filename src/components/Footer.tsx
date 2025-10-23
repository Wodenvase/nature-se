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
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/logo1.png" 
                alt="Nature-Se Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">Nature-Se</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bringing you the raw richness of wild forest honey. Pure, unfiltered, and unmatched.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors hover:scale-110 transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">the.laxmidhar@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Thane, Maharashtra</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Our Promise</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Every jar supports ethical practices and empowers women workers through training and employment.
            </p>
            <div className="bg-amber-600/20 border border-amber-600 rounded-xl p-4">
              <p className="text-amber-400 font-semibold text-sm">
                🌿 100% Pure & Natural<br />
                🐝 Ethically Sourced<br />
                💛 Women Empowered
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center mb-6">
            <p className="text-xl text-amber-500 font-semibold italic mb-2">
              "Taste nature's honesty. Support real change."
            </p>
            <p className="text-lg text-gray-400">
              Choose Nature-Se – Real honey doesn't have a season — it has a reason.
            </p>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nature-Se. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
