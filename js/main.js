document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".hero-image img");
  if (!img) return;

  img.addEventListener("mousemove", (e) => {
    const { width, height, left, top } = img.getBoundingClientRect();

    const x = ((e.clientX - left) / width - 0.5) * 8;
    const y = ((e.clientY - top) / height - 0.5) * 8;

    img.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0, 0) scale(1)";
  });
});
