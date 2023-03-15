"use strict";
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
// control animation navigation
const navAnimation = (direction1, direction2) => {
    // replace slide-out-{num} which was given to each nav item in the html with slide-in-{num}
    //   then replace slide-in-{num} with slide-out-{num} to slide out
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}`);
    });
};
function toggleNav() {
    // Toggle nav bars
    menuBars.classList.toggle("change");
    //  toggle the navigstion slide in and out
    overlay.classList.toggle("overlay-slide-in");
    //   animate nav items
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        navAnimation("out", "in");
    }
    else {
        navAnimation("in", "out");
    }
}
// Event listners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});
