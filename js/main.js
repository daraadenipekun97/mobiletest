let tooglebars = document.querySelector("#bars");
let menujs = document.querySelector(".nav_links");


tooglebars.addEventListener("click", showhide)
function showhide() {
    menujs.classList.toggle('nav-active');
    
}