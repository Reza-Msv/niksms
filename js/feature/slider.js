document.addEventListener("DOMContentLoaded", () => {
  console.log("Slider appearance loaded successfully.");
  const btns = document.querySelectorAll(".nav-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.9)";
      setTimeout(() => (btn.style.transform = "scale(1)"), 100);
    });
  });
});
