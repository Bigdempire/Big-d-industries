import { MessageCircle, Phone, Mail, MapPin, Snowflake } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'products' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'AC Repair & Installation',
    'Fridge Maintenance',
    'Cold Room Solutions',
    'Emergency Service',
    'Maintenance Plans'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake size={32} className="text-cyan-400" />
              <h3 className="text-2xl font-bold">BIGD</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner in refrigeration and cooling solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/0623047106"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition transform hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:0623047106"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition transform hover:scale-110"
                title="Call"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:bigdempre59@gmail.com"
                className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition transform hover:scale-110"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="text-gray-300 hover:text-white transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:0623047106"
                    className="text-white hover:text-cyan-400 transition font-semibold"
                  >
                    0623047106
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:bigdempre59@gmail.com"
                    className="text-white hover:text-cyan-400 transition font-semibold break-all"
                  >
                    bigdempre59@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="text-white font-semibold">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
            <p>&copy; {currentYear} BIGD Refrigeration Services. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Help Right Now?</h3>
          <p className="mb-4 opacity-90">Our team is ready to assist you 24/7</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0623047106"
              className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition transform hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/0623047106"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
