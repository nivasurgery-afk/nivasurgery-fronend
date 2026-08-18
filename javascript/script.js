/* =========================================================
   NIVA SURGERY AUTO SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".niva-hero-slide");
  const progress = document.querySelector(".niva-hero-progress");

  if (!slides.length) return;

  let currentSlide = 0;
  const slideDuration = 5000;

  function showSlide(index) {

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    if (progress) {

      progress.style.animation = "none";

      void progress.offsetWidth;

      progress.style.animation =
        `nivaHeroProgress ${slideDuration}ms linear`;

    }

    currentSlide = index;
  }


  function nextSlide() {

    const next =
      (currentSlide + 1) % slides.length;

    showSlide(next);
  }


  showSlide(0);

  setInterval(nextSlide, slideDuration);

});


/* =========================================================
   NIVA SURGERY — SURGERY SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector(".niva-surgery-slider");

  if (!slider) return;

  const track = slider.querySelector(".niva-surgery-track");
  const cards = slider.querySelectorAll(".niva-surgery-item");

  const nextButton = slider.querySelector(".niva-surgery-next");
  const prevButton = slider.querySelector(".niva-surgery-prev");

  const progress = slider.querySelector(".niva-surgery-progress span");

  if (!track || !cards.length) return;


  let currentIndex = 0;


  function getVisibleCards() {

    if (window.innerWidth <= 768) {
      return 1;
    }

    return 3;
  }


  function updateSlider() {

    const visibleCards = getVisibleCards();

    const maxIndex = Math.max(
      0,
      cards.length - visibleCards
    );

    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }

    const cardWidth = cards[0].offsetWidth;

    const gap = 18;

    const moveAmount =
      currentIndex * (cardWidth + gap);

    track.style.transform =
      `translateX(-${moveAmount}px)`;


    if (progress) {

      const progressValue =
        ((currentIndex + visibleCards) /
        cards.length) * 100;

      progress.style.width =
        `${Math.min(progressValue, 100)}%`;
    }
  }


  function nextSurgery() {

    const visibleCards = getVisibleCards();

    const maxIndex =
      Math.max(0, cards.length - visibleCards);

    currentIndex++;

    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }

    updateSlider();
  }


  function previousSurgery() {

    const visibleCards = getVisibleCards();

    const maxIndex =
      Math.max(0, cards.length - visibleCards);

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = maxIndex;
    }

    updateSlider();
  }


  nextButton?.addEventListener(
    "click",
    nextSurgery
  );


  prevButton?.addEventListener(
    "click",
    previousSurgery
  );


  window.addEventListener(
    "resize",
    updateSlider
  );


  /* AUTO SLIDE */

  let autoSlide =
    setInterval(nextSurgery, 4500);


  slider.addEventListener(
    "mouseenter",
    function () {
      clearInterval(autoSlide);
    }
  );


  slider.addEventListener(
    "mouseleave",
    function () {
      autoSlide =
        setInterval(nextSurgery, 4500);
    }
  );


  updateSlider();

});


/* =========================================================
   NIVA SURGICAL TRUST AUTO SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".niva-trust-slide");

  if (!slides.length) return;

  let currentSlide = 0;

  function nextTrustSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
  }

  setInterval(nextTrustSlide, 4500);

});


/* =========================================================
   NIVA SURGERY FAQ
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".niva-faq-item");

  faqItems.forEach(function (item) {

    const question = item.querySelector(".niva-faq-question");
    const toggle = item.querySelector(".niva-faq-toggle");

    if (!question || !toggle) return;

    question.addEventListener("click", function () {

      const isActive = item.classList.contains("active");

      faqItems.forEach(function (otherItem) {

        otherItem.classList.remove("active");

        const otherToggle =
          otherItem.querySelector(".niva-faq-toggle");

        if (otherToggle) {
          otherToggle.textContent = "+";
        }

      });

      if (!isActive) {

        item.classList.add("active");
        toggle.textContent = "−";

      }

    });

  });

});