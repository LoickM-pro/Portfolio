import React from 'react';

function Projects() {
  return (
    <div class="font-ptsans p-24 flex flex-col items-center min-h-[85vh]">
      <h3 class="font-ptsans mb-6 text-base font-semibold leading-6 bg-gradient-to-r from-cyan-400/80 to-purple-600/80 inline-block text-transparent bg-clip-text">
        Projets -
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="relative overflow-hidden bg-gradient-to-br from-yellow-300/80 to-orange-500/80 rounded-lg shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <img class="relative w-40" src="./src/assets/images/screen_ideasnest.png" alt="" />
          </div>
          <div class="absolute bottom-0 text-white px-6 pb-6 w-full flex flex-col">
            <span class="block opacity-75 -mb-1">Extension de Navigateur</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Ideas Nest</span>
              <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">2 Semaines</span>
            </div>
          </div>
        </div>
        
        <div class="relative overflow-hidden bg-gradient-to-br from-green-400/80 to-emerald-700/80 rounded-lg shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <img class="relative" src="./src/assets/images/chaises_musicales.gif" alt="" />
          </div>
          <div class="absolute bottom-0 text-white px-6 pb-6 w-full flex flex-col">
            <span class="block opacity-75 -mb-1">Plateforme vente de meubles</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Les Chaises Musicales</span>
              <span class="block bg-white rounded-full text-emerald-700 text-xs font-bold px-3 py-2 leading-none flex items-center">4 Semaines</span>
            </div>
          </div>
        </div>
        
        <div class="relative overflow-hidden bg-gradient-to-br from-cyan-400/80 to-blue-700/80 rounded-lg shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Application Mobile</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Surfing Elephant</span>
              <span class="block bg-white rounded-full text-blue-700 text-xs font-bold px-3 py-2 leading-none flex items-center">2 Semaines</span>
            </div>
          </div>
        </div>
        
        <div class="relative overflow-hidden bg-gradient-to-br from-violet-500/80 to-purple-950/80 rounded-lg shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Plateforme de Microblogging</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Logan</span>
              <span class="block bg-white rounded-full text-purple-950 text-xs font-bold px-3 py-2 leading-none flex items-center">2 Semaines</span>
            </div>
          </div>
        </div>
        
        <div class="relative overflow-hidden bg-gradient-to-br from-pink-400/80 to-rose-700/80 rounded-lg shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Réseau Social</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Zinzins Zestés</span>
              <span class="block bg-white rounded-full text-rose-700 text-xs font-bold px-3 py-2 leading-none flex items-center">2 Semaines</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
