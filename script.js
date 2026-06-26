//  MOBILE HEADER

document
  .querySelector(".bi-search")
  .parentElement.addEventListener("click", () => {
    console.log("Search clicked");
  });

document
  .querySelector(".bi-heart")
  .parentElement.addEventListener("click", () => {
    console.log("Wishlist clicked");
  });

// SIGN IN PAGE ACTIVE BTN

document.querySelectorAll(".login-btn").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".login-btn").forEach((btn) => {
      btn.classList.remove("active-btn");
    });

    this.classList.add("active-btn");
  });
});

// PHONE LOGIN

const phone = document.getElementById("phone");
const otpBtn = document.getElementById("otpBtn");
const message = document.getElementById("message");

phone.addEventListener("input", function () {
  // Only numbers
  this.value = this.value.replace(/\D/g, "");
});

otpBtn.addEventListener("click", function () {
  const number = phone.value.trim();

  if (number.length !== 10) {
    message.innerHTML = "Please enter a valid 10-digit phone number.";

    message.classList.remove("success");
    message.classList.add("error");

    phone.focus();

    return;
  }

  message.innerHTML = "OTP has been sent successfully.";

  message.classList.remove("error");
  message.classList.add("success");

  // Replace this with your API call
  console.log("+880" + number);
});

// EMAIL LOGIN

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";

    togglePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  } else {
    password.type = "password";

    togglePassword.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
});

loginBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    message.innerHTML = "Please enter a valid email address.";

    message.className = "error";

    return;
  }

  if (passwordValue.length < 6) {
    message.innerHTML = "Password must be at least 6 characters.";

    message.className = "error";

    return;
  }

  message.innerHTML = "Login successful.";

  message.className = "success";

  // fetch("/login",{
  //     method:"POST"
  // })
});

// MOBILE BOTTOM NAVIGATION

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".mobile-bottom-nav .nav-item").forEach((item) => {
    const href = item.getAttribute("href");

    if (href === currentPage) {
      item.classList.add("active");
    }
  });
});
