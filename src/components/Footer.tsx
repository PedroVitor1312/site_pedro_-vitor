import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    // Rodapé do site
    <footer className="py-8 bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Conteúdo do rodapé em duas colunas em telas médias */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Nome/logo */}
          <p className="text-xl font-bold mb-4 md:mb-0 text-orange-500">Pedro Vitor Balduino Martins</p>
          
          {/* Links de redes sociais */}
          <div className="flex gap-6">
            <a href="https://github.com/PedroVitor1312" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/pedro_vitor_martins/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:pedromartins951@hotmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            Feito com ❤️ por Pedro Vitor Balduino Martins
          </p>
        </div>
      </div>
    </footer>
  );
}