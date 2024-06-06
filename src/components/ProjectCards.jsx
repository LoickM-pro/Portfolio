import React from 'react';

const ProjectCards = ({ name, description, duration, technologies, githubLink }) => {
  return (
    <div class="bg-blue-600/50 rounded-lg shadow-md p-6 relative">
      <a href={githubLink} target="_blank" rel="noopener noreferrer" class="absolute top-2 right-2">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.016-2.042-3.338.726-4.042-1.615-4.042-1.615-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.492.997.108-.774.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.656 1.652.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.628-5.475 5.923.431.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .318.217.694.824.577C20.565 21.795 24 17.308 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
      <h2 class="text-xl font-bold mb-2 text-center">{name}</h2>
      <p class="text-center mb-2">{description}</p>
      <p class="text-center text-gray-600 mb-4">{duration}</p>
      <div class="text-center">
        {technologies.map((tech, index) => (
          <span key={index} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
