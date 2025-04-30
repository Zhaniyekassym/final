// Feedback function
function submitFeedback() {
    const input = document.getElementById("feedbackInput");
    const message = document.getElementById("feedbackMessage");
  
    const feedback = input.value.trim();
    if (feedback.length === 0) {
      alert("Please write your feedback before submitting.");
      return;
    }
  
    console.log("Feedback submitted:", feedback);
    message.classList.remove("hidden");
  
    setTimeout(() => {
      message.classList.add("hidden");
    }, 3000);
  
    input.value = "";
  }
  
  // Go back button logic
  document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "preindex.html"; // Make sure this matches your homepage file name
  });
  
  
  const subjectCards = document.querySelectorAll('.subject-card');
const quizTableBody = document.querySelector(".quiz-table tbody");

// Subject-specific topics
const topicsData = {
  mechanics: [
    { topic: "Gravity", quiz: "7/10", percentage: "70%" },
    { topic: "Kinematics", quiz: "6/10", percentage: "60%" },
  ],
  thermo: [
    { topic: "Entropy", quiz: "9/10", percentage: "90%" },
    { topic: "Energy", quiz: "8/10", percentage: "80%" },
  ],
  optics: [
    { topic: "Refraction", quiz: "5/10", percentage: "50%" },
    { topic: "Dispersion", quiz: "3/10", percentage: "30%" },
  ]
};

// Default: activate mechanics on page load
window.addEventListener("DOMContentLoaded", () => {
  activateCard("mechanics");
});

subjectCards.forEach(card => {
  card.addEventListener("click", () => {
    const subject = card.getAttribute("data-subject");
    activateCard(subject);
  });
});

function activateCard(subjectKey) {
  // Update active class
  subjectCards.forEach(card => {
    const cardSubject = card.getAttribute("data-subject");
    if (cardSubject === subjectKey) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // Update quiz table
  const topics = topicsData[subjectKey];
  quizTableBody.innerHTML = "";
  topics.forEach(item => {
    const row = `<tr>
      <td>${item.topic}</td>
      <td>${item.quiz}</td>
      <td>${item.percentage}</td>
    </tr>`;
    quizTableBody.innerHTML += row;
  });
}

function addTopic() {
  const topic = document.getElementById("newTopic").value.trim();
  const quiz = document.getElementById("newQuiz").value.trim();
  const percent = document.getElementById("newPercent").value.trim();

  if (!topic || !quiz || !percent) {
    alert("Please fill in all fields.");
    return;
  }

  const table = document.getElementById("topicsTable").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = topic;
  cell2.textContent = quiz;
  cell3.textContent = percent;

  document.getElementById("newTopic").value = "";
  document.getElementById("newQuiz").value = "";
  document.getElementById("newPercent").value = "";
}

document.getElementById("newQuiz").addEventListener("input", function () {
  const value = this.value.trim(); // e.g., "5/10"
  const percentInput = document.getElementById("newPercent");

  if (/^\d+\/\d+$/.test(value)) {
    const [score, total] = value.split("/").map(Number);
    if (total > 0) {
      const percentage = Math.round((score / total) * 100);
      percentInput.value = percentage + "%";
    } else {
      percentInput.value = "";
    }
  } else {
    percentInput.value = "";
  }
});

function updateProgressBar() {
  const percentageCells = document.querySelectorAll('.quiz-table tbody td:nth-child(3)');
  let total = 0;
  let count = 0;

  percentageCells.forEach(cell => {
    const percent = parseInt(cell.textContent.replace('%', ''));
    if (!isNaN(percent)) {
      total += percent;
      count++;
    }
  });

  const average = count > 0 ? Math.round(total / count) : 0;

  const progressFill = document.querySelector('.progress-fill');
  const progressText = document.querySelector('.progress-text');

  progressFill.style.width = `${average}%`;
  progressText.textContent = `${average}%`;
}

// Call after the DOM loads
window.addEventListener('DOMContentLoaded', updateProgressBar);
