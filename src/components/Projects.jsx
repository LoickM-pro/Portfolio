import React from 'react';
import ProjectCards from './ProjectCards';

const projects = [
  {
    name: 'Chaises Musicales',
    description: 'Plateforme vente de meubles',
    duration: '4 semaines',
    technologies: ['React + Vite', 'Express', 'MySQL'],
    githubLink: 'https://github.com/LoickM-pro/Les-Chaises-Musicales'
  },
  {
    name: 'Ideas Nest',
    description: 'Extension de Navigateur',
    duration: '2 semaines',
    technologies: ['HTML', 'CSS', 'Javascript'],
    githubLink: 'https://github.com/LoickM-pro/Ideas-Nest'
  },
  {
    name: 'Surfing Elephant',
    description: 'Application Mobile',
    duration: '4 semaines',
    technologies: ['Flutter', 'Dart'],
    githubLink: 'https://github.com/LoickM-pro/surfing-elephant'
  },
  {
    name: 'Zinzins Zestés',
    description: 'Réseau Social',
    duration: '2 semaines',
    technologies: ['PHP', 'MySQL', 'MAMP'],
    githubLink: 'https://github.com/LoickM-pro/Reseau-Social-les-Zinzins-Zestes'
  },
  {
    name: 'Logan',
    description: 'Plateforme Microblogging',
    duration: '2 semaines',
    technologies: ['PHP', 'Laravel'],
    githubLink: 'https://github.com/LoickM-pro/microblogging-logan'
  },
  {
    name: 'Solar System',
    description: 'utilisation API',
    duration: '2 semaines',
    technologies: ['HTML', 'CSS', 'Javascript'],
    githubLink: '#'
  },
];

function Projects() {
  return (
    <div class="font-ptsans p-24 flex flex-col items-center min-h-[85vh]">
      <h3 class="font-ptsans mb-6 text-base font-bold leading-6 bg-gradient-to-r from-cyan-400 to-purple-600 inline-block text-transparent bg-clip-text">
        Projets -
      </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
    </div>
);
};

export default Projects;
