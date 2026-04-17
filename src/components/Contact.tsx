import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/0623047106?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '0623047106',
      action: 'tel:0623047106',
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '0623047106',
      action: 'https://wa.me/0623047106',
      description: 'Quick responses via WhatsApp',
      external: true
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bigdempre59@gmail.com',
      action: 'mailto:bigdempre59@gmail.com',
      description: 'Send us your details anytime'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Get in <span className="text-cyan-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question? We&apos;d love to hear from you. Get in touch with us today!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <a
                key={i}
                href={method.action}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-cyan-600 font-bold text-lg mb-2">
                  {method.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-500 text-green-700 rounded-lg">
                ✓ Your message has been sent! We&apos;ll get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="Fridge Maintenance">Fridge Maintenance</option>
                  <option value="Cold Room Installation">Cold Room Installation</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                <Send size={20} />
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Info Box */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">✓</span>
                  <span>Fast response time - Usually within 1 hour</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">✓</span>
                  <span>Free consultation and quotation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">✓</span>
                  <span>Professional and friendly service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">✓</span>
                  <span>24/7 emergency support available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">✓</span>
                  <span>Warranty on all work performed</span>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Service Coverage</h3>
              <p className="text-gray-600 mb-4">
                We provide services throughout the region with quick response times for emergency calls.
              </p>
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-blue-900 font-bold">Service Area Coverage</p>
                  <p className="text-gray-600 text-sm">Available throughout the region</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 text-lg mb-6">
            No problem! Reach out to us directly via any of these channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0623047106"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/0623047106"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="mailto:bigdempre59@gmail.com"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
