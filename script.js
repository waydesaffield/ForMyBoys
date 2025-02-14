document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars-container");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 3 + 1; // Random star size
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 3 + 2; // Random twinkle speed

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }

    // Create 150 stars
    for (let i = 0; i < 150; i++) {
        createStar();
    }
});
