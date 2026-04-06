const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// smooth scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});

//popup resume
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
