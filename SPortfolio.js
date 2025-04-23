document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simple image hover effect for the gallery
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Add a dynamic greeting based on the time of day
    const greetingText = document.querySelector(".hero h1");
    const hours = new Date().getHours();
    if (hours < 12) {
        greetingText.textContent = "Good Morning! I'm a Creative Developer";
    } else if (hours < 18) {
        greetingText.textContent = "Good Afternoon! I'm a Creative Developer";
    } else {
        greetingText.textContent = "Good Evening! I'm a Creative Developer";
    }
});
