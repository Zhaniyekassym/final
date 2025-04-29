// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("authForm");
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");
    const gradeInput = document.getElementById("grade");
    const backButton = document.querySelector(".back-button");
  
    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from reloading the page
  
      const name = nameInput.value.trim();
      const number = numberInput.value.trim();
      const grade = gradeInput.value.trim();
  
      if (!name || !number || !grade) {
        alert("Fill all infos");
      } else {
        alert("Student added successfully");
        form.reset(); // Optional: clear the form after success
      }
    });
  
    // Handle back button
    backButton.addEventListener("click", function () {
      history.back(); // Go to the previous page
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.querySelector(".back-to-main");
    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "preindex.html"; // Or use window.history.back() if preferred
        });
    }
});
