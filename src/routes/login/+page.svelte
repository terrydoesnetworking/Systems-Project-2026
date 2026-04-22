<main class="min-h-[75vh] bg-gray-50 py-8">
<script lang="ts">
  import { enhance } from '$app/forms';
</script>


<main class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-center text-3xl font-bold mt-4 mb-8 text-gray-800">Login</h1>
    
    <div class="flex justify-center">
      <!-- Responsive widths: col-sm-10 (83%) -> col-md-6 (50%) -> lg-5 -> xl-4 -->
      <div class="w-full sm:w-5/6 md:w-1/2 lg:w-5/12 xl:w-1/3">
        
        <!-- Card container -->
        <div class="bg-white rounded-lg shadow-md border border-gray-200 mb-12">
          <div class="p-6">
            <form method="POST" use:enhance>
              <!-- Username Field -->
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="text" 
                  name="Email" 
                  required 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <!-- Password Field -->
              <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input 
                  type="password" 
                  name="password" 
                  required 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center">
                <button 
                  type="submit" 
                  class="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</main>
