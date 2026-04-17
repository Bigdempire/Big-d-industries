import { useState } from 'react';
import { Wrench, Zap, Shield, Clock, ChevronDown } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      id: 1,
      icon: Wrench,
      title: 'AC Repair & Installation',
      description: 'Professional air conditioning repair and installation services',
      details: 'From diagnosing complex issues to complete unit replacement, our expert technicians handle all AC problems with precision and care.',
      features: ['Emergency repairs', 'System diagnostics', 'Installation services', 'Annual maintenance']
    },
    {
      id: 2,
      icon: Shield,
      title: 'Refrigerator Maintenance',
      description: 'Keep your fridges running efficiently year-round',
      details: 'Regular maintenance prevents costly breakdowns and ensures food safety. We provide comprehensive fridge servicing.',
      features: ['Regular cleaning', 'Part replacement', 'Performance optimization', 'Safety checks']
    },
    {
      id: 3,
      icon: Zap,
      title: 'Cold Room Solutions',
      description: 'Complete cold storage system management',
      details: 'Perfect for restaurants, shops, and warehouses. We ensure optimal temperature control and compliance with standards.',
      features: ['Installation', 'Repairs', 'Temperature monitoring', 'Commercial support']
    },
    {
      id: 4,
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Always available when you need us',
      details: 'Your cooling system emergency doesn\'t wait for business hours. We\'re here whenever you need urgent assistance.',
      features: ['Immediate response', 'Expert diagnostics', 'Quick fixes', 'Prevention advice']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Our <span className="text-cyan-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cooling solutions for residential and commercial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === index;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Header - Always Visible */}
                <div
                  onClick={() => setExpandedService(isExpanded ? null : index)}
                  className="p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-blue-900 flex-shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-white animate-in fade-in duration-300">
                    <p className="text-gray-700 mb-4">
                      {service.details}
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-blue-900 text-sm">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="tel:0623047106"
                      className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                    >
                      Contact for This Service
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Professional Service?</h3>
          <p className="text-lg mb-6 opacity-90">
            Don't let your cooling system fail. Contact us today for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/0623047106?text=I%20need%20help%20with%20my%20cooling%20system"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition"
            >
              WhatsApp Now
            </a>
            <a
              href="tel:0623047106"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-bold transition"
            >
              Call: 0623047106
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
