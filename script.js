// Page transition
document.addEventListener("DOMContentLoaded", () => {

  // Handle internal link clicks
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.endsWith(".html")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });

  // Only one audio plays at a time
  const players = document.querySelectorAll("audio");
  players.forEach(player => {
    player.addEventListener("play", () => {
      players.forEach(p => {
        if (p !== player) p.pause();
      });
    });
  });

});

// Particle background
const particleCount = 80;
const particlesContainer = document.getElementById("particles");

for(let i=0; i < particleCount; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    const startX = Math.random() * window.innerWidth;
    p.style.left = startX + "px";
    const startY = Math.random() * window.innerHeight;
    p.style.top = startY + "px";

    const size = 3 + Math.random() * 6;


    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.background = 'rgba(180, 200, 255, ${0.15 + Math.random()* 0.2})';
    const duration = 5 + Math.random() * 15;
    p.style.animationDuration = duration + "s";

    p.style.animationDelay = Math.random() * duration + "s";

   

    particlesContainer.appendChild(p);
}

const tracks = document.querySelectorAll(".track");

tracks.forEach(track => {
    const audio = track.querySelector("preview-audio");

    //Hover starts preview
    track.addEventListener("mouseenter", () => {
        if (audio.paused) {
            audio.currentTime = 0;
            audio.volume = 0.3;
            audio.muted = false;
            audio.play().catch(err => console.log("Hover preview blocked:", err));
        }
    });

    //Hover ends preview
    track.addEventListener("mouseleave", () => {
        audio.pause();
        audio.currentTime = 0;
    });
});