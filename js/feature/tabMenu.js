document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPane = document.querySelector(".tab-pane"); // برای سادگی فقط یک پانل را آپدیت می‌کنیم

  const tabData = {
    1: {
      title: "منو شماره یک",
      icon: "🌿",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
    },
    2: {
      title: "منو شماره دوم",
      icon: "⚽",
      text: "توضیحات مربوط به تب دوم در اینجا قرار می‌گیرد. این بخش داینامیک است...",
    },
    3: {
      title: "منو شماره سوم",
      icon: "🚩",
      text: "محتوای تب سوم با هدف نمایش قدرت جاوااسکریپت در مدیریت محتوا...",
    },
    4: {
      title: "منو شماره چهارم",
      icon: "📦",
      text: "آخرین تب که شامل جزئیات نهایی پروژه و اطلاعات تکمیلی است...",
    },
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // ۱. تغییر وضعیت دکمه‌ها
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // ۲. آپدیت محتوا با انیمیشن محو شدن
      const id = btn.dataset.tab;
      const content = tabData[id];

      tabPane.style.opacity = "0";
      tabPane.style.transform = "translateY(10px)";

      setTimeout(() => {
        tabPane.querySelector(
          "h3"
        ).innerHTML = `${content.title} <span class="title-icon">${content.icon}</span>`;
        tabPane.querySelector("p").textContent = content.text;

        tabPane.style.opacity = "1";
        tabPane.style.transform = "translateY(0)";
      }, 300);
    });
  });
});
