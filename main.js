console.log("Your current coding diagnostics:");

const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

imgs[0].style.opacity = opacity;

function imgClick(e) {
  //resetting the opacity
  imgs.forEach((img) => (img.style.opacity = 1));

  //change image source
  current.src = e.target.src;

  // change the opacity
  e.target.style.opacity = opacity;
  
  //fade in class
current.classList.add('fade-in');

//removing the fade-in class
setTimeout(() => current.classList.remove('fade-in'), 500);
};

//image click event
imgs.forEach((img) => img.addEventListener('click', imgClick));
