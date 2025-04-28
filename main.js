document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".learn-more").addEventListener("click", function () {
        window.location.href = "learn-more.html";
    });

    document.getElementById("getStartedBtn").addEventListener("click", function () {
        window.location.href = "get-started.html";
    });

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
