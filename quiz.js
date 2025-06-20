let current = 0;

function showQuestion() {
  const q = questions[current];
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const img = document.getElementById("image");

  feedback.textContent = "";
  optionsDiv.innerHTML = "";

  if (q.type === "image") {
    img.src = q.image;
    img.style.display = "block";
    questionDiv.textContent = q.prompt;
  } else if (q.type === "order") {
    img.style.display = "none";
    questionDiv.textContent = q.prompt;
    const shuffled = [...q.words].sort(() => Math.random() - 0.5);
    shuffled.forEach(word => {
      const btn = document.createElement("button");
      btn.textContent = word;
      btn.onclick = () => {
        btn.disabled = true;
        btn.style.opacity = 0.5;
        answerSequence.push(word);
        if (answerSequence.length === q.words.length) checkOrderAnswer(q);
      };
      optionsDiv.appendChild(btn);
    });
  } else {
    img.style.display = "none";
    questionDiv.textContent = q.prompt;
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, q.answer);
      optionsDiv.appendChild(btn);
    });
  }
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = selected === correct ? "✅ Riktig!" : "❌ Feil. Riktig svar er: " + correct;
  setTimeout(nextQuestion, 1500);
}

let answerSequence = [];

function checkOrderAnswer(q) {
  const feedback = document.getElementById("feedback");
  const answerStr = answerSequence.join(" ");
  feedback.textContent = answerStr === q.answer
    ? "✅ Riktig!"
    : "❌ Feil. Riktig rekkefølge er: " + q.answer;
  answerSequence = [];
  setTimeout(nextQuestion, 2000);
}
// Endre denne linjen i checkAnswer():
feedback.textContent = selected === correct ? "✅ Riktig!" : "❌ Feil. Riktig svar er: " + correct;

// Bytt til dette i stedet:
feedback.textContent = selected === correct
  ? "✅ Riktig!"
  : "❌ Feil. Riktig svar er: " + correct + (q.explanation ? " – " + q.explanation : "");


function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "<h2>🎉 Du er ferdig! Bra jobbet!</h2>";
  }
}

window.onload = showQuestion;