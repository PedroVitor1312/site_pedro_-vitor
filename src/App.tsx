import React from 'react';
// Importação dos ícones da biblioteca Lucide React
import { Github, Linkedin, Instagram, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react';
// Importação dos componentes de seção
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
// Importação do sistema de notificações
import { Toaster } from 'react-hot-toast';

// Componente principal que organiza todas as seções do portfólio
function App() {
  return (
    // Container principal com altura mínima de tela completa
    <div className="min-h-screen bg-gray-900">
      {/* Sistema de notificações posicionado no topo central */}
      <Toaster position="top-center" />
      
      {/* Seções do portfólio */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton phoneNumber="34992762873" />
    </div>
  );
}

export default App;