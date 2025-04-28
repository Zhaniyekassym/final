document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.querySelector(".learn-more");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            window.location.href = "learn-more.html";
        });
    }

    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            window.location.href = "get-started.html";
        });
    }

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }

    // ✨ NEW: Login button
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
