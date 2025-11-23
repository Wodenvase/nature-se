import Navbar from './components/Navbar';
import Hero from './components/HeroClean';
import About from './components/About';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
  <About />
  <Products />
  <Reviews />
      <Footer />
    </div>
  );
}

export default App;
