import React from 'react';

function NavBar() {
  return (
  <div class="font-ptsans flex justify-center my-3">
        <nav class="fixed top-5 bg-gradient-to-r from-cyan-400/40 to-purple-600/40 flex items-center gap-3 px-3 py-3 border border-none text-white rounded-full z-50">
            <ul class="flex flex-row items-center gap-2 p-2 ">
               <li>
                    <a href="#welcome"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#about"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Profil
                    </a>
                </li>
                <li>
                    <a href="#projects"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Projets
                    </a>
                </li>
                <li>
                    <a href="#skills"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#hobbies"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Loisirs
                    </a>
                </li>
                <li>
                    <a href="#contact"
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/60 to-purple-600/60 ease-in-out rounded-full transition-all cursor-pointer">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;