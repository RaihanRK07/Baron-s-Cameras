// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailModal6 = document.querySelector("#item-detail-modal6");

const itemDetailButton = document.querySelector(".item-detail-button");
const itemDetailButton2 = document.querySelector(".item-detail-button2");
const itemDetailButton3 = document.querySelector(".item-detail-button3");
const itemDetailButton4 = document.querySelector(".item-detail-button4");
const itemDetailButton5 = document.querySelector(".item-detail-button5");
const itemDetailButton6 = document.querySelector(".item-detail-button6");

// Yang bikin muncul setiap di klik
// itemDetailButton.onclick = (e) => {
//   itemDetailModal.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton2.onclick = (e) => {
//   itemDetailModal2.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton3.onclick = (e) => {
//   itemDetailModal3.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton4.onclick = (e) => {
//   itemDetailModal4.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton5.onclick = (e) => {
//   itemDetailModal5.style.display = "flex";
//   e.preventDefault();
// };
// itemDetailButton6.onclick = (e) => {
//   itemDetailModal6.style.display = "flex";
//   e.preventDefault();
// };

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon5").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon6").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  } else if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  } else if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  } else if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  } else if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = "none";
  } else if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = "none";
  }
};
