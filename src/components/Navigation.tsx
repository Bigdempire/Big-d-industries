import { useState } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'products' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-30 bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Snowflake size={32} className="text-white" />
            <span className="text-white font-bold text-xl hidden sm:inline">BIGD Refrigeration Services</span>
            <span className="text-white font-bold text-lg sm:hidden">BIGD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-yellow-300 transition duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0623047106"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-bold transition"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 py-4 px-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-300 transition py-2 text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:0623047106"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-bold text-center mt-2 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
