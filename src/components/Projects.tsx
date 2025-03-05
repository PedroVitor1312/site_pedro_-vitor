import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Array de projetos com suas informações
const projects = [
  {
    title: 'Site Institucional',
    description: 'Site institucional para uma empresa local, com design responsivo e integração com APIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: '#',
    live: '#'
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicação web para gerenciamento de tarefas, com funcionalidades de CRUD e autenticação.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Landing Page',
    description: 'Landing page profissional e moderna para a área odontológica, com animações envolventes, SEO otimizado e um design suave.',
    image: '/portifolio_odondoto.jpeg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: '#',
    live: 'https://doutoragiselly.netlify.app/'
  }
];

export default function Projects() {
  return (
    // Seção de projetos
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-500">Meus Projetos</h2>
        
        {/* Grid de projetos - 3 colunas em telas grandes, 2 em médias, 1 em pequenas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeamento do array de projetos para criar cards */}
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-orange-500">
              {/* Imagem do projeto */}
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Conteúdo do card */}
              <div className="p-6">
                {/* Título do projeto */}
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                
                {/* Descrição do projeto */}
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-orange-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links para GitHub e demo */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-500"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-500"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
