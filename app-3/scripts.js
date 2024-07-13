// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", function() {
        sidebar.style.transform = sidebar.style.transform === "translateX(0)" ? "translateX(-100%)" : "translateX(0)";
    });
});
// end of scripts.js
