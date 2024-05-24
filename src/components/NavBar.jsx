import React from 'react';

function NavBar() {
  return (
  //   <nav class="bg-gradient-to-r from-cyan-400/20 to-purple-600/20">
  //     <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //       <div class="relative flex h-16 items-center">
  //         <div class="flex items-center justify-between w-full">
  //           <div class="flex items-center">
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left text-neutral-900" viewBox="0 0 16 16">
  //               <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
  //             </svg>
  //           </div>
  //           <div class="flex justify-center flex-grow">
  //             <a href="#" class="font-squareo text-neutral-900 px-3 py-2 text-4xl font-medium" aria-current="page">Loïck M</a>
  //           </div>
  //           <div class="w-16"></div>
  //         </div>
  //       </div>
  //   </div>
  // </nav>

  <div class="font-ptsans sticky top-0 container flex flex-row justify-center my-3">
        <nav class="bg-gradient-to-r from-cyan-400/20 to-purple-600/20 flex items-center gap-3 px-3 py-3 border text-white rounded-full ">
            <ul class="flex flex-row items-center gap-2 p-2 ">
               <li>
                    <a href=""
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/20 to-purple-600/20 ease-in-out rounded-full transition-all cursor-pointer">
                        Home
                    </a>
                </li>
                <li>
                    <a href=""
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/20 to-purple-600/20 ease-in-out rounded-full transition-all cursor-pointer">
                        Profil
                    </a>
                </li>
                <li>
                    <a href=""
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/20 to-purple-600/20 ease-in-out rounded-full transition-all cursor-pointer">
                        Projets
                    </a>
                </li>
                <li>
                    <a href=""
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/20 to-purple-600/20 ease-in-out rounded-full transition-all cursor-pointer">
                        Loisirs
                    </a>
                </li>
                <li>
                    <a href=""
                        class="px-3 py-2 hover:transparent text-black hover:bg-gradient-to-r from-cyan-400/20 to-purple-600/20 ease-in-out rounded-full transition-all cursor-pointer">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>

  )
}

export default NavBar;