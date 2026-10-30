
const menuButton = document.querySelector(".btn");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function openMenu() {
    sidebar.classList.add("show");
    overlay.classList.add("show");
}

function closeMenu() {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});
