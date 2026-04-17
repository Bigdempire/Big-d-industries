import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-white">
      <Navigation />
      <FloatingContact />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="products">
        <Products />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
