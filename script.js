// MENU MODAL POPUP
// ====================================

document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  modal.show();
});

function closeImage() {
  const modalEl = document.getElementById("exampleModal");
  const modal = bootstrap.Modal.getInstance(modalEl);

  if (modal) {
    modal.hide();
  }
}

//  MOBILE HEADER
// ====================================

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
// --------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".mobile-bottom-nav .nav-item").forEach((item) => {
    const href = item.getAttribute("href");

    if (href === currentPage) {
      item.classList.add("active");
    }
  });
});

// MOBILE BOTTOM CATEGORY

const sheet = document.getElementById("categorySheet");

const overlay = document.querySelector(".sheet-overlay");

document.getElementById("openCategory").addEventListener("click", openSheet);

document.getElementById("closeSheet").addEventListener("click", closeSheet);

overlay.addEventListener("click", closeSheet);

function openSheet() {
  sheet.classList.add("show");

  overlay.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeSheet() {
  sheet.classList.remove("show");

  overlay.classList.remove("show");

  document.body.style.overflow = "";
}

// ==========================================
// Outlet Page JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
       Scroll Reveal Animation
    ================================ */

  const cards = document.querySelectorAll(".outlet-card");

  const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    cards.forEach((card) => {
      const top = card.getBoundingClientRect().top;

      if (top < trigger) {
        card.classList.add("show-card");
      }
    });
  };

  window.addEventListener("scroll", reveal);

  reveal();

  /* ===============================
       Button Ripple Effect
    ================================ */

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");

      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();

      ripple.style.left = `${e.clientX - rect.left}px`;

      ripple.style.top = `${e.clientY - rect.top}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ===============================
       Copy Address
    ================================ */

  document.querySelectorAll(".copy-address").forEach((btn) => {
    btn.addEventListener("click", function () {
      const address = this.dataset.address;

      navigator.clipboard.writeText(address);

      this.innerHTML = '<i class="bi bi-check-lg"></i> Copied';

      setTimeout(() => {
        this.innerHTML = '<i class="bi bi-copy"></i> Copy Address';
      }, 2000);
    });
  });

  /* ===============================
       Open / Closed Status
    ================================ */

  const status = document.querySelectorAll(".store-status");

  const hour = new Date().getHours();

  status.forEach((item) => {
    if (hour >= 10 && hour < 21) {
      item.innerHTML = "🟢 Open Now";

      item.classList.add("text-success");
    } else {
      item.innerHTML = "🔴 Closed";

      item.classList.add("text-danger");
    }
  });

  /* ===============================
       Search Outlet
    ================================ */

  const search = document.getElementById("outletSearch");

  if (search) {
    search.addEventListener("keyup", function () {
      const value = this.value.toLowerCase();

      cards.forEach((card) => {
        if (card.innerText.toLowerCase().includes(value)) {
          card.parentElement.style.display = "block";
        } else {
          card.parentElement.style.display = "none";
        }
      });
    });
  }

  /* ===============================
       Smooth Scroll
    ================================ */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// TRACK ORDER PAGE
// ========================

const form = document.getElementById("trackForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Replace this with your API request

  alert("Track Order button clicked!");
});

// FOOTER
// ==================

const newsletterForm = document.querySelector(".footer form");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.querySelector("input").value.trim();

  if (email === "") {
    alert("Please enter your email.");

    return;
  }

  alert("Thanks for subscribing!");

  this.reset();
});

// SHOP PAGE
// ==============================

document.querySelectorAll(".btn.rounded-pill").forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.innerText);
  });
});

// product card interactions

document.querySelectorAll(".cart-btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.innerHTML = '<i class="bi bi-check-lg"></i>';

    this.classList.remove("btn-dark");

    this.classList.add("btn-success");

    setTimeout(() => {
      this.innerHTML = '<i class="bi bi-cart-plus-fill"></i>';

      this.classList.remove("btn-success");

      this.classList.add("btn-dark");
    }, 1200);
  });
});

// ===============================
// product database
// ===============================

const products = [
  {
    id: 1,
    gender: "Men",
    category: "Trouser",
    title: "Mens Premium Trouser - Ashtrion",
    price: 990,
    oldPrice: 1290,
    image: "https://picsum.photos/500/600?random=11",
  },

  {
    id: 2,
    gender: "Men",
    category: "T-Shirt",
    title: "Mens Premium T-Shirt - Eternity",
    price: 765,
    oldPrice: 990,
    image: "https://picsum.photos/500/600?random=12",
  },

  {
    id: 3,
    gender: "Men",
    category: "T-Shirt",
    title: "Mens Premium Blank T-Shirt",
    price: 485,
    oldPrice: 640,
    image: "https://picsum.photos/500/600?random=13",
  },

  {
    id: 4,
    gender: "Men",
    category: "Polo",
    title: "Premium Designer Polo",
    price: 1140,
    oldPrice: 1490,
    image: "https://picsum.photos/500/600?random=14",
  },

  {
    id: 5,
    gender: "Men",
    category: "Shorts",
    title: "Sports Shorts",
    price: 550,
    oldPrice: 720,
    image: "https://picsum.photos/500/600?random=15",
  },

  {
    id: 6,
    gender: "Women",
    category: "T-Shirt",
    title: "Women's Oversized Tee",
    price: 790,
    oldPrice: 990,
    image: "https://picsum.photos/500/600?random=16",
  },

  {
    id: 7,
    gender: "Kids",
    category: "T-Shirt",
    title: "Kids Cotton T-Shirt",
    price: 420,
    oldPrice: 590,
    image: "https://picsum.photos/500/600?random=17",
  },

  {
    id: 8,
    gender: "Teens",
    category: "Hoodie",
    title: "Teen Hoodie",
    price: 990,
    oldPrice: 1290,
    image: "https://picsum.photos/500/600?random=18",
  },

  {
    id: 9,
    gender: "Men",
    category: "Jeans",
    title: "Slim Fit Jeans",
    price: 1390,
    oldPrice: 1790,
    image: "images/jeans.jpg",
  },
];

// ===============================
// calculate discount
// ===============================

function discountPercent(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function saveAmount(price, oldPrice) {
  return oldPrice - price;
}

// ===============================
// render products
// ===============================

function renderProducts(productArray) {
  const container = document.getElementById("products");

  let html = '<div class="row g-4">';

  productArray.forEach((product) => {
    html += `

<div class="col-xl-3 col-lg-4 col-md-6 col-6">

<div class="card product-card border-0 shadow-sm h-100">

<div class="position-relative">

<span class="badge bg-danger discount-badge">

-${discountPercent(product.price, product.oldPrice)}%

</span>

<img src="${product.image}"

class="card-img-top"

alt="${product.title}">

</div>

<div class="card-body d-flex flex-column">

<h6 class="product-title">

${product.title}

</h6>

<span class="badge bg-success align-self-start mb-2">

<i class="bi bi-tag-fill"></i>

Save ৳${saveAmount(product.price, product.oldPrice)}

</span>

<div class="d-flex align-items-center gap-2">

<h4 class="fw-bold mb-0">

৳${product.price}

</h4>

<small class="text-decoration-line-through text-muted">

৳${product.oldPrice}

</small>

<small class="text-danger">

-${discountPercent(product.price, product.oldPrice)}%

</small>

</div>

</div>

<button

class="btn btn-dark rounded-circle cart-btn"

data-id="${product.id}">

<i class="bi bi-cart-plus-fill"></i>

</button>

</div>

</div>

`;
  });

  html += "</div>";

  container.innerHTML = html;

  attachCartButtons();
}

// ===============================
// cart button
// ===============================

function attachCartButtons() {
  document
    .querySelectorAll(".cart-btn")

    .forEach((button) => {
      button.onclick = function () {
        this.classList.remove("btn-dark");

        this.classList.add("btn-success");

        this.innerHTML = '<i class="bi bi-check-lg"></i>';

        setTimeout(() => {
          this.classList.remove("btn-success");

          this.classList.add("btn-dark");

          this.innerHTML = '<i class="bi bi-cart-plus-fill"></i>';
        }, 1200);
      };
    });
}

// ===============================
// apply filters
// ===============================

function applyFilters() {
  let filtered = [...products];

  // Search
  if (searchText !== "") {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  // Gender
  if (selectedGender !== "") {
    filtered = filtered.filter((product) => product.gender === selectedGender);
  }

  // Category
  if (selectedCategory !== "") {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory,
    );
  }

  renderProducts(filtered);
}

// ===============================
// filter variables
// ===============================

let selectedGender = "";
let selectedCategory = "";
let searchText = "";

applyFilters();

// ===============================
// live search
// ===============================

document
  .getElementById("searchInput")

  .addEventListener("keyup", function () {
    searchText = this.value;

    applyFilters();
  });

// ===============================
// gender buttons
// ===============================

document.getElementById("btnMen").onclick = function () {
  selectedGender = "Men";

  applyFilters();
};

document.getElementById("btnWomen").onclick = function () {
  selectedGender = "Women";

  applyFilters();
};

document.getElementById("btnKids").onclick = function () {
  selectedGender = "Kids";

  applyFilters();
};

document.getElementById("btnTeens").onclick = function () {
  selectedGender = "Teens";

  applyFilters();
};

// ===============================
// category filter
// ===============================

document.querySelectorAll(".category-chip")

.forEach(button=>{

button.onclick=function(){

selectedCategory=this.dataset.category;

applyFilters();

};

});