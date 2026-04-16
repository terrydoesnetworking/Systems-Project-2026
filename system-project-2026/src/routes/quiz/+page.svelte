  <main>
    <div class="container-fluid">
      <h1 class="text-center mt-4 mb-4">Quiz Questions</h1>
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6">
          <div class="card mb-4">
            <div class="card-body">
              <form id="quiz-form">
                <div class="mb-3">
                  <h2 class="h5" id="question-title">Question 1</h2>
                  <p id="question-text" class="mb-4"></p>
                </div>
                <div id="answers" class="mb-4">
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="answer" id="answer1" value="">
                    <label class="form-check-label" for="answer1"></label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="answer" id="answer2" value="">
                    <label class="form-check-label" for="answer2"></label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="answer" id="answer3" value="">
                    <label class="form-check-label" for="answer3"></label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="answer" id="answer4" value="">
                    <label class="form-check-label" for="answer4"></label>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary" id="previous-btn" disabled>Previous</button>
                  <button type="button" class="btn btn-primary" id="next-btn">Next</button>
                </div>
              </form>
            </div>
          </div>
          <div class="alert alert-info" role="status" id="feedback">Choose an answer and press Next.</div>
        </div>
      </div>
    </div>
  </main>



  <!-- <script>
    const questions = [
      {
        title: 'Question 1',
        text: 'What is the practice of tricking people into divulging confidential information called?',
        choices: ['Phishing', 'Social Engineering', 'Malware', 'Encryption'],
        answer: 'Social Engineering'
      },
      {
        title: 'Question 2',
        text: 'Which type of attack involves overwhelming a server with traffic to make it unavailable?',
        choices: ['DDoS', 'Ransomware', 'SQL Injection', 'Man-in-the-Middle'],
        answer: 'DDoS'
      },
      {
        title: 'Question 3',
        text: 'What is the most important practice for protecting your password?',
        choices: ['Using simple passwords', 'Sharing it with trusted people', 'Using strong, unique passwords', 'Writing it down'],
        answer: 'Using strong, unique passwords'
      }
    ];

    let currentIndex = 0;
    let score = 0;

    const questionTitle = document.getElementById('question-title');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    const feedbackEl = document.getElementById('feedback');
    const previousBtn = document.getElementById('previous-btn');
    const nextBtn = document.getElementById('next-btn');

    function renderQuestion() {
      const question = questions[currentIndex];
      questionTitle.textContent = question.title;
      questionText.textContent = question.text;
      answersContainer.innerHTML = question.choices.map((choice, index) => `
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="answer" id="answer${index + 1}" value="${choice}">
            <label class="form-check-label" for="answer${index + 1}">${choice}</label>
          </div>
        `).join('');

      previousBtn.disabled = currentIndex === 0;
      nextBtn.textContent = currentIndex === questions.length - 1 ? 'Finish' : 'Next';
      feedbackEl.textContent = 'Choose an answer and press ' + nextBtn.textContent + '.';
      feedbackEl.className = 'alert alert-info';
    }

    function getSelectedAnswer() {
      const selected = document.querySelector('input[name="answer"]:checked');
      return selected ? selected.value : null;
    }

    nextBtn.addEventListener('click', () => {
      const selected = getSelectedAnswer();
      if (!selected) {
        feedbackEl.textContent = 'Please select an answer before continuing.';
        feedbackEl.className = 'alert alert-warning';
        return;
      }

      if (selected === questions[currentIndex].answer) {
        score += 1;
      }

      if (currentIndex === questions.length - 1) {
        feedbackEl.textContent = `Quiz complete! You scored ${score} of ${questions.length}.`;
        feedbackEl.className = 'alert alert-success';
        nextBtn.disabled = true;
        previousBtn.disabled = false;
        return;
      }

      currentIndex += 1;
      renderQuestion();
    });

    previousBtn.addEventListener('click', () => {
      if (currentIndex === 0) return;
      currentIndex -= 1;
      renderQuestion();
      nextBtn.disabled = false;
    });

    renderQuestion();
  </script>
</body>

</html> -->