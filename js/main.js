
const initApp = () => {
  const enterBtn = document.getElementById("enterBtn");
  const introSection = document.querySelector(".intro");
  const menuBtn = document.getElementById("menuBtn");
  const taskMenu = document.getElementById("taskMenu");

  enterBtn.addEventListener("click", () => {
    introSection.style.transition = "all 0.6s ease";
    introSection.style.opacity = "0";
    introSection.style.transform = "scale(1.1)";

    setTimeout(() => {
      introSection.remove();
    }, 600);
  });

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    taskMenu.classList.remove("show");
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const enterBtn = document.getElementById("enterBtn");
const introSection = document.querySelector(".intro");

enterBtn.addEventListener("click", () => {
  introSection.style.opacity = "0";
  introSection.style.transform = "scale(1.2)";
  introSection.style.filter = "blur(10px)";

  setTimeout(() => {
    introSection.style.display = "none";
  }, 800);
});

// const menuBtn = document.getElementById("menuBtn");
// const taskMenu = document.getElementById("taskMenu");
// const iconHam = document.querySelector(".icon-hamburger");
// const iconClose = document.querySelector(".icon-close");

// menuBtn.addEventListener("click", (e) => {
//   e.stopPropagation();

//   const isOpen = taskMenu.classList.toggle("show");
//   menuBtn.classList.toggle("active");

//   // تغییر آیکون SVG
//   if (isOpen) {
//     iconHam.style.display = "none";
//     iconClose.style.display = "block";
//   } else {
//     iconHam.style.display = "block";
//     iconClose.style.display = "none";
//   }
// });

// // بستن منو با کلیک روی محیط خارج
// document.addEventListener("click", () => {
//   taskMenu.classList.remove("show");
//   menuBtn.classList.remove("active");
//   iconHam.style.display = "block";
//   iconClose.style.display = "none";
// });






const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("taskMenu");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

menuBtn.addEventListener("click", () => {
  const isActive = menu.classList.toggle("active");

  if (isActive) {
    // باز کردن منو
    iconHamburger.style.display = "none";
    iconClose.style.display = "block";
  } else {
    // بستن منو
    iconHamburger.style.display = "block";
    iconClose.style.display = "none";
  }
});