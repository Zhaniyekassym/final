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
  window.history.back(); // Go to previous page
  // OR: window.location.href = "index.html"; // If you want a specific file
});
