const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

// المان‌های چک‌لیست
const checks = {
  length: document.getElementById("check-length"),
  number: document.getElementById("check-number"),
  special: document.getElementById("check-special"),
};

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;

  // ۱. بررسی طول (حداقل ۸)
  const isLengthValid = val.length >= 8;
  updateStatus(checks.length, isLengthValid);

  // ۲. بررسی وجود عدد
  const hasNumber = /\d/.test(val);
  updateStatus(checks.number, hasNumber);

  // ۳. بررسی حروف خاص
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(val);
  updateStatus(checks.special, hasSpecial);

  // فعال/غیرفعال کردن دکمه نهایی
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
