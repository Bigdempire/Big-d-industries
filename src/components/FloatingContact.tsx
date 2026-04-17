import { MessageCircle, Phone } from 'lucide-react';

const FloatingContact = () => {
  const phoneNumber = '0623047106';
  const whatsappNumber = '0623047106';
  const whatsappMessage = 'Hello BIGD Refrigeration Services! I need help with...';

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200 animate-bounce"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200"
        title="Call Now"
      >
        <Phone size={32} className="text-white" />
      </button>
    </div>
  );
};

export default FloatingContact;
