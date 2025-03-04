import React from 'react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    // Seção "Sobre Mim"
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-500">Sobre Mim</h2>
        
        {/* Grid de duas colunas em telas médias e grandes */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da imagem */}
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-orange-500">
            <img
              src="/pedro-foto.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Coluna do texto */}
          <div>
            {/* Parágrafos de descrição pessoal */}
            <p className="text-lg text-gray-300 mb-6">
              Sou estudante de Ciências da Computação na Universidade Federal de Uberlândia (UFU) e apaixonado por desenvolvimento web. Tenho experiência em criar sites responsivos, interfaces modernas e soluções digitais que combinam design impecável e funcionalidade de alto nível.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Minha missão é entregar soluções inovadoras que não apenas impressionam, mas geram resultados reais. Estou sempre em busca de aprender novas tecnologias e me desafiar com projetos criativos e desafiadores.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Se você busca um site moderno, elegante e totalmente funcional, vamos conversar e transformar suas ideias em realidade! 🚀
            </p>
            
            {/* Lista de habilidades técnicas */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Habilidades Técnicas:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  React
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Bootstrap
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Git
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  UX/UI Design
                </li>
              </ul>
            </div>
            
            {/* Botão para download do currículo */}
            <a
              href="/curriculo-pedro-vitor.pdf"
              download
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Download size={20} />
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}