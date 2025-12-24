document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPane = document.querySelector(".tab-pane");

  const tabData = {
    1: {
      title: "منو شماره یک",
      icon: "../../assets/tab/flower.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
    },
    2: {
      title: "منو شماره دوم",
      icon: "../../assets/tab/ball.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
    },
    3: {
      title: "منو شماره سوم",
      icon: "../../assets/tab/flag.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
    },
    4: {
      title: "منو شماره چهارم",
      icon: "../../assets/tab/feather.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،",
    },
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");


      const id = btn.dataset.tab;
      const content = tabData[id];

      tabPane.style.opacity = "0";
      tabPane.style.transform = "translateY(10px)";

      setTimeout(() => {
        tabPane.querySelector(
          "h3"
        ).innerHTML = `<div class="icon-dev"><img src=${content.icon} alt="image"/></div> ${content.title} `;
        tabPane.querySelector("p").textContent = content.text;

        tabPane.style.opacity = "1";
        tabPane.style.transform = "translateY(0)";
      }, 300);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const playBtn = document.querySelector(".play-btn");
  const closeBtn = document.getElementById("closeModal");


  playBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; 
  });


  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});