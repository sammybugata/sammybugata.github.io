
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Adjust 0.08 for more/less delay
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  glow.style.left = glowX + "px";
  glow.style.top = glowY + "px";

  requestAnimationFrame(animate);
}

animate();



document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".hero-image img");
  if (!img) return;

  img.addEventListener("mousemove", (e) => {
    const { width, height, left, top } = img.getBoundingClientRect();

    const size = Math.random() * 6 + 4;
    dust.style.width = size + "px";
    dust.style.height = size + "px";
    dust.style.left = x + (Math.random() * 10 - 5) + "px";
    dust.style.top = y + (Math.random() * 10 - 5) + "px";



    img.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0, 0) scale(1)";
  });
});


const roles = [
  "UX Designer",
  "UX Researcher",
  "Front-End Developer"
];

const typingElement = document.querySelector(".typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1200); // pause before deleting
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const typingSpeed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
