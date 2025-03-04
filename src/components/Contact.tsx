import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    // Seção de contato
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-6 text-orange-500">Entre em Contato</h2>
        
        {/* Texto de introdução */}
        <p className="text-center text-gray-300 mb-12">
          Vamos trabalhar juntos! Entre em contato para discutir seu projeto ou ideia.
        </p>
        
        {/* Container de links de contato */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Informações de Contato</h3>
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  <Mail size={24} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:pedromartins951@hotmail.com" className="text-white hover:text-orange-500">
                    pedromartins951@hotmail.com
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/34992762873" className="text-white hover:text-orange-500">
                    (34) 99276-2873
                  </a>
                </div>
              </div>
            </div>
            
            {/* Redes sociais */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* GitHub */}
                <a 
                  href="https://github.com/PedroVitor1312" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github size={24} className="text-orange-500" />
                  <span className="text-white">GitHub</span>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Linkedin size={24} className="text-orange-500" />
                  <span className="text-white">LinkedIn</span>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/pedro_vitor_martins/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Instagram size={24} className="text-orange-500" />
                  <span className="text-white">Instagram</span>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:pedromartins951@hotmail.com" 
                  className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Mail size={24} className="text-orange-500" />
                  <span className="text-white">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}