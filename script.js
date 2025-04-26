// script.js

// Smooth scroll for internal anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Theme toggle (light/dark mode) setup
const toggleButton = document.createElement('button');
toggleButton.innerText = "🌓 Toggle Theme";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.borderRadius = "8px";
toggleButton.style.border = "none";
toggleButton.style.background = "#3498db";
toggleButton.style.color = "white";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

let isDark = false;

toggleButton.addEventListener('click', () => {
    document.body.style.backgroundColor = isDark ? "#f4f7f9" : "#1e1e1e";
    document.querySelector(".container").style.backgroundColor = isDark ? "#fff" : "#2c2c2c";
    document.querySelector(".container").style.color = isDark ? "#2c3e50" : "#f4f4f4";
    toggleButton.innerText = isDark ? "🌓 Toggle Theme" : "☀️ Toggle Light Mode";
    isDark = !isDark;
});
