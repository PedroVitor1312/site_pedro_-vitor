import React from 'react';
import { Phone } from 'lucide-react';

// Interface para as props do componente
interface WhatsAppButtonProps {
  phoneNumber: string;
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  // Função para abrir o WhatsApp quando o botão for clicado
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    // Botão flutuante fixo no canto inferior direito
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <Phone size={24} />
    </button>
  );
}