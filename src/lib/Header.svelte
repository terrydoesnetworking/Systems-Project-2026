<nav class="sticky top-0 z-50 bg-gray-100 border-b border-gray-200">
  <div class="flex items-center justify-between px-4 py-2 flex-wrap">
    
    <!-- Logo -->
    <img src="/Logo.svg" alt="Logo" class="w-full max-w-[150px] inline-block align-top py-1 text-xl mr-4 h-auto">

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
      </ul>
      
      <!-- Right side links -->
      <ul class="flex flex-col lg:flex-row list-none">
        <li>
          <a href="/login" class="block py-2 pr-4 pl-0 text-gray-700 hover:text-gray-900">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
