import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MythBuster from './components/MythBuster';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MythBuster />
      <Products />
      <WhyChoose />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
