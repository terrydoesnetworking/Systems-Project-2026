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
      if (userAnswers[i] === q.answer) {
        score++;
      }
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

<main class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center mt-4 mb-8 text-gray-800">
      Quiz Questions
    </h1>

    <!-- Module Selector -->
    <div class="mb-6 text-center">
      <label class="mr-2 font-semibold">Select Module:</label>
      <select bind:value={selectedModuleKey} on:change={changeModule}>
        {#each Object.entries(modules || {}) as entry}
          <option value={entry[0]}>
            {entry[1].title}
          </option>
        {/each}
      </select>
    </div>

    <div class="flex justify-center">
      <div class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">

        {#if !showResults && questions.length > 0}

          <div class="bg-white rounded-lg shadow-md mb-6 overflow-hidden p-6">

            <h2 class="text-xl font-semibold mb-2">
              Question {currentIndex + 1} of {questions.length}
            </h2>

            <p class="text-gray-600 mb-4">
              {questions[currentIndex]?.question}
            </p>

            <div class="space-y-3 mb-8">
              {#each questions[currentIndex]?.options ?? [] as option}
                <label class="flex items-center space-x-2">
                  <input
                    type="radio"
                    bind:group={selectedAnswer}
                    value={option}
                  />
                  <span>{option}</span>
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

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 class="text-2xl font-bold mb-4">Quiz Complete</h2>

            <p class="text-lg mb-6">
              You scored {score} out of {questions.length}
            </p>

            <button
              on:click={resetQuiz}
              class="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Retry Quiz
            </button>
          </div>

        {:else}

          <div class="text-center text-gray-500">
            No questions available.
          </div>

        {/if}

      </div>
    </div>
  </div>
</main>
