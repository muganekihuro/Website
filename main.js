// Function to toggle menu and close on scroll
function toggleMenu() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = toggleMenu;

window.onscroll = () => {

    toggleMenu();
};