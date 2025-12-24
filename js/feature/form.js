const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");


const checks = {
  length: document.getElementById("check-length"),
  number: document.getElementById("check-number"),
  special: document.getElementById("check-special"),
};

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;


  const isLengthValid = val.length >= 8;
  updateStatus(checks.length, isLengthValid);


  const hasNumber = /\d/.test(val);
  updateStatus(checks.number, hasNumber);


  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(val);
  updateStatus(checks.special, hasSpecial);


  if (isLengthValid && hasNumber && hasSpecial) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
});

function updateStatus(element, isValid) {
  if (isValid) {
    element.classList.add("valid");
    element.textContent = element.textContent.replace("—", "✓");
  } else {
    element.classList.remove("valid");
    element.textContent = element.textContent.replace("✓", "—");
  }
}

const words = document.querySelectorAll(".word");
let current = 0;

setInterval(() => {
  const currentWord = words[current];
  const next = (current + 1) % words.length;
  const nextWord = words[next];


  currentWord.classList.remove("active");
  currentWord.classList.add("exit-up");

  nextWord.classList.remove("exit-up");
  nextWord.classList.add("active");

  current = next;
}, 2000);
