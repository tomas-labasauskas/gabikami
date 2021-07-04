const reviews = document.querySelector(".reviews");
const cards_cont = document.querySelector(".cards-cont");
const rev_card_1 = document.querySelector(".rev-card1");
const rev_card_2 = document.querySelector(".rev-card2");
const rev_card_3 = document.querySelector(".rev-card3");

const max_width_640 = window.matchMedia("(max-width: 640px)");

function match() {
  max_width_640.matches
    ? reviews.classList.add("swiper-container")
    : reviews.classList.remove("swiper-container");
  max_width_640.matches
    ? cards_cont.classList.add("swiper-wrapper")
    : cards_cont.classList.remove("swiper-wrapper");
  max_width_640.matches
    ? rev_card_1.classList.add("swiper-slide")
    : rev_card_1.classList.remove("swiper-slide");
  max_width_640.matches
    ? rev_card_2.classList.add("swiper-slide")
    : rev_card_2.classList.remove("swiper-slide");
  max_width_640.matches
    ? rev_card_3.classList.add("swiper-slide")
    : rev_card_3.classList.remove("swiper-slide");
}

max_width_640.addListener(match);

match();

function reload_on() {
  if (window.innerWidth < 640) {
    var swiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1.25,
    });
  }
  if (window.innerWidth > 640) {
    if (reviews.classList.length > 1) {
      location.reload();
    }
  }
}

window.onresize = reload_on;

reload_on();
