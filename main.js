console.log("Your current coding diagnostics:");

const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

//image click event
imgs.forEach((img) =>
  img.addEventListener("click", imgClick));

function imgClick(e) {

    //resetting the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change image source
    current.src = e.target.src;

    // change the opacity
    e.target.style.opacity = opacity;
};
