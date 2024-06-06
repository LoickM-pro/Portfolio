import React from 'react';

function Hobbies() {
    return(
        <div class="font-ptsans p-24 flex flex-col items-center min-h-[85vh]">
            <h3 class="font-ptsans mb-10 text-base font-bold leading-6 bg-gradient-to-r from-cyan-400 to-purple-600 inline-block text-transparent bg-clip-text">
                    Loisirs -
                </h3>
        <div class="flex items-center justify-center">
            <div class="grid grid-cols-2 grid-rows-2 gap-4 mb-10">

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/80 dark:border-gray-700">
                        <img class="rounded-t-lg" src="./src/assets/images/animal.jpg" alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Animaux</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Passionné par les animaux depuis ma plus tendre enfance, j'aime passer du temps à les observer et à en apprendre davantage.
                            Que ce soit avec des animaux domestiques ou sauvages, leur compagnie est toujours enrichissante.
                        </p>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/80 dark:border-gray-700">
                        <img class="rounded-t-lg" src="./src/assets/images/game.jpg" alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jeux Vidéos</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Les jeux vidéo sont pour moi une occasion de m'évader.
                            J'aime explorer des mondes toujours plus grands, relever des défis et découvrir de nouvelles histoires.
                            Notamment des licences comme The Legend of Zelda, Monster Hunter ou encore Dofus.
                        </p>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/80 dark:border-gray-700">
                        <img class="rounded-t-lg" src="./src/assets/images/surf.jpg" alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Surf</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Le surf me permet de me couper du monde. 
                            J'ai toujours aimé les sports nautiques en général, le cadre de l'océan et le contact avec l'eau sont des plus relaxant.
                        </p>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/80 dark:border-gray-700">
                        <img class="rounded-t-lg" src="./src/assets/images/draw.jpg" alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dessin</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Le dessin est ma manière de m'exprimer et de libérer ma créativité. 
                            Que ce soit mes créations ou des lieux et personnages de mes oeuvres favorites.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Hobbies;