//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburg menu di kilik
document.querySelector("#hamburg-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburg = document.querySelector('#hamburg-menu');

document,addEventListener('click', function(e){
    if(!hamburg.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})