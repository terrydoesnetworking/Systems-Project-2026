 <main class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center mt-4 mb-8 text-gray-800">Quiz Questions</h1>
    
    <div class="flex justify-center">
      <div class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        
        <!-- Card -->
        <div class="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div class="p-6">
            <form id="quiz-form">
              <div class="mb-6">
                <h2 class="text-xl font-semibold mb-2" id="question-title">Question 1</h2>
                <p id="question-text" class="text-gray-600 mb-4"></p>
              </div>

              <!-- Answers -->
              <div id="answers" class="space-y-3 mb-8">
                <div class="flex items-center">
                  <input class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="answer" id="answer1" value="">
                  <label class="ml-3 block text-sm font-medium text-gray-700" for="answer1"></label>
                </div>
                <div class="flex items-center">
                  <input class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="answer" id="answer2" value="">
                  <label class="ml-3 block text-sm font-medium text-gray-700" for="answer2"></label>
                </div>
                <div class="flex items-center">
                  <input class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="answer" id="answer3" value="">
                  <label class="ml-3 block text-sm font-medium text-gray-700" for="answer3"></label>
                </div>
                <div class="flex items-center">
                  <input class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="answer" id="answer4" value="">
                  <label class="ml-3 block text-sm font-medium text-gray-700" for="answer4"></label>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex justify-between">
                <button type="button" 
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
                  id="previous-btn" disabled>
                  Previous
                </button>
                <button type="button" 
                  class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" 
                  id="next-btn">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Feedback Alert -->
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 text-blue-700" role="status" id="feedback">
          Choose an answer and press Next.
        </div>

      </div>
    </div>
  </div>
</main>
