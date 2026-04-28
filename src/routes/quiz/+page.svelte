<script>
  import { modules } from "$lib/quizData";

  let selectedModuleKey = $state("module1");
  let currentIndex = $state(0);
  let selectedAnswer = $state(null);
  let userAnswers = $state([]);
  let showResults = $state(false);
  let score = $state(0);

  const currentModule = $derived(modules[selectedModuleKey]);
  const questions = $derived(currentModule?.questions ?? []);

  function nextQuestion() {
    if (selectedAnswer === null) return;

    userAnswers[currentIndex] = selectedAnswer;
    selectedAnswer = null;

    if (currentIndex < questions.length - 1) {
      currentIndex++;
    } else {
      calculateScore();
      showResults = true;
    }
  }

  function previousQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      selectedAnswer = userAnswers[currentIndex] ?? null;
    }
  }

  function calculateScore() {
    score = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) score++;
    });
  }

  function resetQuiz() {
    currentIndex = 0;
    selectedAnswer = null;
    userAnswers = [];
    showResults = false;
    score = 0;
  }

  function changeModule(event) {
    selectedModuleKey = event.target.value;
    resetQuiz();
  }
</script>

<main class="bg-gray-50 py-8 pb-40">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center mb-4 text-gray-800">
      Quiz Questions
    </h1>

    <h2 class="text-center text-gray-600 mb-6">
      {currentModule?.title}
    </h2>

    <!-- Module Selector -->
	
    <div class="mb-6 text-center">
      <select bind:value={selectedModuleKey} on:change={changeModule}>
        {#each Object.entries(modules || {}) as entry}
          <option value={entry[0]}>{entry[1].title}</option>
        {/each}
      </select>
    </div>

    <div class="flex justify-center">
      <div class="w-full md:w-8/12 lg:w-6/12">

        {#if !showResults && questions.length > 0}

          <!-- Progress Bar -->
		  
          <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
				class="bg-blue-600 h-2 rounded-full transition-all duration-300"
				style="width: {(currentIndex / questions.length) * 100}%"
		></div>
          </div>

          <p class="text-sm text-center text-gray-500 mb-4">
            Question {currentIndex + 1} of {questions.length}
          </p>

          <div class="bg-white rounded-lg shadow-md p-6 pb-10">

            <p class="text-lg font-medium mb-6">
              {questions[currentIndex]?.question}
            </p>

            <div class="space-y-4 mb-6">
              {#each questions[currentIndex]?.options ?? [] as option}
                <label
                  class="block border rounded-lg p-3 cursor-pointer
                  hover:bg-gray-100
                  {selectedAnswer === option ? 'bg-blue-100 border-blue-500' : ''}"
                >
                  <input
                    type="radio"
                    bind:group={selectedAnswer}
                    value={option}
                    class="hidden"
                  />
                  {option}
                </label>
              {/each}
            </div>

            <div class="flex justify-between">
              <button
                on:click={previousQuestion}
                disabled={currentIndex === 0}
                class="px-4 py-2 border rounded-md"
              >
                Previous
              </button>

              <button
                on:click={nextQuestion}
                disabled={selectedAnswer === null}
                class="px-6 py-2 bg-blue-600 text-white rounded-md"
              >
                {currentIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>

          </div>

        {:else if showResults}

          <!-- Results Screen -->
          <div class="bg-white rounded-lg shadow-md p-6">

            <h2 class="text-2xl font-bold text-center mb-4">
              Quiz Complete
            </h2>

            <p class="text-center text-xl mb-6">
              Score: {score} / {questions.length}
            </p>

            <!-- Review Answers -->
			
            <div class="space-y-4">
              {#each questions as q, i}
                <div class="p-4 border rounded-lg last:mb-0">
                  <p class="font-semibold">{i + 1}. {q.question}</p>

                  <p class="mt-2">
			Your answer:
			<span class={userAnswers[i] === q.answer ? "text-green-600" : "text-red-600"}>
				{userAnswers[i] ?? "No answer"}
				</span>

			{#if userAnswers[i] === q.answer}
				<span class="ml-2 text-green-600">✔</span>
			{:else}
				<span class="ml-2 text-red-600">✖</span>
			{/if}
				</p>
                </div>
              {/each}
            </div>

            <div class="text-center mt-6">
              <button
                on:click={resetQuiz}
                class="px-6 py-2 bg-blue-600 text-white rounded-md"
              >
                Retry Quiz
              </button>
            </div>

          </div>

        {/if}

      </div>
    </div>
  </div>
</main>
