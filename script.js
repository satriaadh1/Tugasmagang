const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener('click',function() {
    menuNav.classList.toggle("menu-active");
});
var scrollThreshold = 100; // Jarak scroll yang diinginkan sebelum latar belakang muncul

window.addEventListener("scroll", function() {
    var navigation = document.querySelector(".navigation");
    if (window.scrollY > scrollThreshold) {
        navigation.classList.add("scrolled");
    } else {
        navigation.classList.remove("scrolled");
    }
});
