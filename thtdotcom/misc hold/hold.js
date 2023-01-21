
const navProgressBar = document.querySelector(".js-nav-progressbar");
let heightLimit;

window.addEventListener("scroll", event => {

const curPos = window.scrollY;
const curPercentage = Math.round( curPos / heightLimit * 100) ;

navProgressBar.style.width = curPercentage + "%";
})

// Resize event listener
window.addEventListener("resize", event => {
const body = document.body;
const html = document.documentElement;
heightLimit = body.scrollHeight - window.innerHeight;
})

// Trigger resize event on page laod
window.dispatchEvent(new Event("resize"));
