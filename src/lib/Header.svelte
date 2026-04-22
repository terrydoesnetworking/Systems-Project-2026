<!-- <nav class="sticky top-0 z-50 border-b border-gray-200 bg-gray-100">
   <div class="flex flex-wrap items-center justify-between px-4 py-4">
      <img
         src="/Logo.svg"
         alt="Logo"
         class="inline-block h-auto w-full max-w-[75px] align-top text-xl"
         /> -->
      <!-- wide screen menu -->
      <!-- <div class="hidden w-full sm:flex sm:w-auto sm:items-center" id="navbarNav">
         <ul class="mx-5 flex list-none flex-col justify-center sm:flex-row">
            <li>
               <a href="/" class="block px-4 py-2 font-bold {page.url.pathname === '/' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline" aria-current="page">
               Home
               </a>
            </li>
            <li>
               <a href="/quiz" class="block px-4 py-2 font-bold {page.url.pathname === '/quiz' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline">Quiz</a>
            </li>
            <li>
               <a href="/slides" class="block px-4 py-2 font-bold {page.url.pathname === '/slides' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline">Slides</a>
            </li>
            <li>
               <a href="/login" class="block px-4 py-2 font-bold {page.url.pathname === '/login' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'} hover:underline flex items-center">
                  Login  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                     <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                  </svg>
               </a>
            </li>
         </ul>
      </div>
      <div class="flex items-center sm:hidden">
         <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbarNav" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
         </button>
      </div>
   </div> -->
   <!-- mobile menu -->   
   <!-- <div class="hidden w-full sm:hidden pb-2" id="navbarMobileNav">
      <ul>
         <li>
            <a href="/" class="block px-4 py-2 font-bold {page.url.pathname === '/' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline" aria-current="page">
            Home
            </a>
         </li>
         <li>
            <a href="/quiz" class="block px-4 py-2 font-bold {page.url.pathname === '/quiz' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline">Quiz</a>
         </li>
         <li>
            <a href="/slides" class="block px-4 py-2 font-bold {page.url.pathname === '/slides' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'}  hover:underline">Slides</a>
         </li>
         <li>
            <a href="/login" class="block px-4 py-2 font-bold {page.url.pathname === '/login' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'} hover:underline flex items-center">
               Login  
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
               </svg>
            </a>
         </li>
      </ul>
   </div>
</nav> -->
 <nav class="sticky top-0 z-50 bg-gray-100 border-b border-gray-200"> 
  
  <div class="flex items-center justify-between px-4 py-2 flex-wrap">
    
    <!-- Logo -->
    <img src="/Logo.svg" alt="Logo" class="w-full max-w-37.5 inline-block align-top py-1 text-xl mr-4 h-auto">

    <!-- Toggler/Button for Mobile -->
    <button class="block lg:hidden px-3 py-2 border rounded border-gray-300 text-gray-600 hover:bg-gray-200" type="button" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">≡</span> <!-- Simplified toggler icon -->
    </button>

    <!-- Navbar Links & Right Side -->
    <div class="hidden lg:flex lg:items-center w-full lg:w-auto" id="navbarNav">
      <!-- Left side links -->
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
         <li class="nav-item">
            <a class="block py-2 pr-4 pl-0 text-blue-600 font-semibold" aria-current="page" href="/">Home</a>
         </li>
         <li class="nav-item">
            <a class="block py-2 pr-4 pl-0 text-gray-700 hover:text-gray-900" href="/quiz">Quiz</a>
         </li>
         <li class="nav-item">
            <a class="block py-2 pr-4 pl-0 text-gray-700 hover:text-gray-900" href="/slides">Slides</a>
         </li>
         <li>
            <a href="/login" class="block px-4 py-2 font-bold {page.url.pathname === '/login' ? 'text-blue-600 hover:brightness-75' : 'text-gray-700 hover:brightness-0'} hover:underline flex items-center">Login  
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
               </svg>
            </a>
         </li>
      </ul>
   </div>
</nav> 
<script lang="ts">
   import { page } from '$app/state';
   import { onMount } from 'svelte';
   
   onMount(() => {
     const mobileMenuButton = document.getElementById('mobile-menu-button');
     const navbarMobileNav = document.getElementById('navbarMobileNav');
   
     if (mobileMenuButton && navbarMobileNav) {
   
   let navLinks = navbarMobileNav.querySelectorAll<HTMLElement>('a');
   
       navLinks.forEach((link) => {
         link.addEventListener('click', (event) => {
             mobileMenuButton.setAttribute('aria-expanded', 'false');
             navbarMobileNav.classList.add('hidden');
         });
       });
   
       mobileMenuButton.addEventListener('click', () => {
         const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
         mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
         navbarMobileNav.classList.toggle('hidden');
       });
     }
   });
   
</script>