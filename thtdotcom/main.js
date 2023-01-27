
const navProgressBar = document.querySelector("#navProgressBar");
//const navProgressBar2 = document.querySelector("");
let heightLimit;


// for Progress Bar #1
window.addEventListener("scroll", event => {

const curPos = window.scrollY;
const curPercentage = Math.round( curPos / heightLimit * 70) ;

navProgressBar.style.width = curPercentage + "%";
})

// for Progress Bar #2
window.addEventListener("scroll", event => {

    const curPos = window.scrollY;
    const curPercentage = Math.round( curPos / heightLimit * 100) ;
    
    navProgressBar2.style.width = curPercentage + "%";
    })
    
// Resize event listener
window.addEventListener("resize", event => {
const body = document.body;
const html = document.documentElement;
heightLimit = body.scrollHeight - window.innerHeight;
})

// Trigger resize event on page laod
window.dispatchEvent(new Event("resize"));



