import React from 'react';

// Objeto com as habilidades técnicas e soft skills
const skills = {
  // Habilidades técnicas com nome e nível (0-100)
  technical: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Git', level: 75 },
    { name: 'Node.js', level: 60 },
  ],
  // Array de soft skills
  soft: [
    'Trabalho em equipe',
    'Resolução de problemas',
    'Comunicação clara',
    'Aprendizado rápido',
    'Organização',
    'Proatividade'
  ]
};

export default function Skills() {
  return (
    // Seção de habilidades
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-500">Habilidades</h2>
        
        {/* Grid de duas colunas em telas médias e grandes */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna de habilidades técnicas */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {/* Mapeamento das habilidades técnicas */}
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  {/* Nome da habilidade e porcentagem */}
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-orange-400">{skill.level}%</span>
                  </div>
                  
                  {/* Barra de progresso */}
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Coluna de soft skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Mapeamento das soft skills */}
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center text-gray-300 hover:bg-gray-700 hover:text-orange-400 transition-colors border border-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}