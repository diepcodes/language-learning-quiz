let draggedItem = null;
        let resultPopup = document.getElementById('result1');

        function allowDrop(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            const position = event.target.dataset.position;
            const dropZone = document.querySelector(`[data-position="${position}"]`);
            dropZone.appendChild(draggedItem);
        }

        function checkOrder() {
            const dropZones = document.querySelectorAll('.drop-zone');
            let correctOrder = true;

            dropZones.forEach((dropZone, index) => {
                const word = dropZone.querySelector('.draggable');
                if (word && word.textContent !== `Word ${index + 1}`) {
                    correctOrder = false;
                }
            });

            showResult(correctOrder);
        }

        function showResult(correctOrder) {
            const resultElement = document.getElementById('result1');
            resultElement.textContent = correctOrder ? 'Correct Order!' : 'Incorrect Order!';

            // setTimeout(() => {
            //     resultElement.textContent = '';
            //     resultElement.style.backgroundColor = '';
            // }, 2000);
        }

        document.addEventListener('dragstart', (event) => {
            draggedItem = event.target;
        });

        document.addEventListener('dragend', () => {
            draggedItem = null;
        });

// Fill in the blank
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.toLowerCase();
    const correctAnswer = "cheaper";

    if (userAnswer === correctAnswer) {
        displayResult("Correct!");
    } else {
        displayResult("Incorrect. Try again!");
    }
}

function displayResult(message) {
    document.getElementById('result2').textContent = message;
}

//Quiz

function checkAnswers() {
    const answers = {
      q1: "b", // Correct answer for question 1
      q2: "c"  // Correct answer for question 2
    };

    let score = 0;

    Object.keys(answers).forEach(question => {
      const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

      if (selectedAnswer) {
        if (selectedAnswer.value === answers[question]) {
          score++;
        }
      }
    });

    const resultElement = document.getElementById('result3');
    resultElement.innerHTML = `Your score is ${score} out of ${Object.keys(answers).length}.`;

  }
        