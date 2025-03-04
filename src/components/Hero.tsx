import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    // Seção de banner principal com altura mínima de tela completa
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Nome principal em destaque */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">
          Pedro Vitor Balduino Martins
        </h1>
        
        {/* Subtítulo com informações profissionais */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          Desenvolvedor Web Júnior | Estudante de Ciências da Computação na UFU
        </h2>
        
        {/* Descrição curta */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Transformando ideias em soluções digitais eficientes e criativas
        </p>
        
        {/* Botões de chamada para ação */}
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
      
      {/* Seta animada para baixo */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-orange-500" />
      </a>
    </div>
  );
}