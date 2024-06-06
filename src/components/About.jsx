import React from 'react';

function About() {
  return (
    <div class="font-ptsans p-24 flex flex-col items-center min-h-[85vh]">
            <h3 class="font-ptsans mb-6 text-base font-bold leading-6 bg-gradient-to-r from-cyan-400 to-purple-600 inline-block text-transparent bg-clip-text">
                    Profil -
                </h3>
      <div class="inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">  
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div class="mt-2 text-lg text-gray-500">
                    <p>À l'origine dans l'environnement, j'ai décidé de me reconvertir dans le développement Full-Stack.</p>
                    <p>Ayant toujours été passionné par le monde de l'informatique et les jeux vidéos, je me suis lancé dans l'aventure Ada Tech School depuis Octobre 2023.</p>
                    <p>Je prépare un diplôme RNCP de niveau 6 (Bac +3/+4) de Développeur/Concepteur Web et Application.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default About;
