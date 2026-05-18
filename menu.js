const genreTabs = document.querySelectorAll(".genre-tab");
const items = document.querySelectorAll(".menu-item");

let currentTime = "dinner";   // ←ここをdinner固定
let currentGenre = "appetizer";

function filterMenu() {
  items.forEach(item => {
    const time = item.dataset.time;
    const genre = item.dataset.genre;

    if (time === currentTime && genre === currentGenre) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

/* ジャンルタブだけ動かす */
genreTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    genreTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentGenre = tab.dataset.genre;
    filterMenu();
  });
});
const jpBtn = document.getElementById("jpBtn");
const enBtn = document.getElementById("enBtn");

const jpTexts = document.querySelectorAll(".jp");
const enTexts = document.querySelectorAll(".en");

jpBtn.addEventListener("click", () => {
  jpTexts.forEach(el => el.style.display = "inline");
  enTexts.forEach(el => el.style.display = "none");

  jpBtn.classList.add("active");
  enBtn.classList.remove("active");
});

enBtn.addEventListener("click", () => {
  jpTexts.forEach(el => el.style.display = "none");
  enTexts.forEach(el => el.style.display = "inline");

  jpBtn.classList.remove("active");
  enBtn.classList.add("active");
});
filterMenu();
const fadeEls = document.querySelectorAll(".menu-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeEls.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500);

});