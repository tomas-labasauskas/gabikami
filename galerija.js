// SELECTOR

const html = document.querySelector("html");
const portfolioHead = document.querySelector(".portfolio-head");
const picsWrap = document.querySelector(".pics-wrap");
const imgBtnsList = document.querySelectorAll(".img-container");
const imgBtns = Array.prototype.slice.call(imgBtnsList);

// FUNCTION
let position = 0;

if ($(window).width() > 810) {
  imgBtns.forEach((img) => {
    img.addEventListener("click", function () {
      // set value of position to img position
      position = html.scrollTop;
      const fullScreenDiv = document.createElement("div");
      fullScreenDiv.classList.add("full-screen");
      const imgCont = document.createElement("div");
      imgCont.classList.add("img-cont");
      imgCont.innerHTML = img.innerHTML;
      fullScreenDiv.appendChild(imgCont);
      const exit = document.createElement("button");
      exit.innerHTML = "<i class='far fa-times-circle'></i>";
      exit.classList.add("exit");
      fullScreenDiv.appendChild(exit);
      html.appendChild(fullScreenDiv);
      portfolioHead.style.display = "none";
      picsWrap.style.display = "none";
      exit.addEventListener("click", function () {
        fullScreenDiv.parentNode.removeChild(fullScreenDiv);
        portfolioHead.style.display = "flex";
        picsWrap.style.display = "flex";
        window.scrollTo(0, position);
      });
    });
  });
}
