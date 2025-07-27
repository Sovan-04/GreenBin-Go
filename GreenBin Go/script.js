// script.js

console.log("GreenBin Go site loaded!");
// script.js

document.querySelector(".signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for signing up! We'll be in touch soon.");
  this.reset();
});
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  document.body.classList.toggle("show-back-to-top", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Counter animation
const counters = document.querySelectorAll(".counter");
const speed = 100; // lower = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

let triggered = false;
window.addEventListener("scroll", () => {
  const impactSection = document.querySelector(".impact");
  const top = impactSection.getBoundingClientRect().top;
  if (top < window.innerHeight && !triggered) {
    animateCounters();
    triggered = true;
  }
});
// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === "block";

    // Hide all answers
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

    // Show or toggle the clicked one
    answer.style.display = isVisible ? "none" : "block";
  });
});
// Hamburger toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = ${scrolled}%;
});