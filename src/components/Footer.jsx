import React from 'react';

function Footer() {
    return (
        <footer class="font-ptsans bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg m-2">
            <div class="w-full mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="font-porticor text-neutral-900 self-center text-2xl whitespace-nowrap">Loick.M</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline me-4 md:me-6">Made with React + Vite and Tailwind</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/LoickM-pro" class="hover:underline">Loïck M</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;