
const menuButton = document.querySelector(".btn");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Membuka sidebar
function openMenu() {
    sidebar.classList.add("show");
    overlay.classList.add("show");
}

// Menutup sidebar
function closeMenu() {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
}

// Tombol menu
if (menuButton && sidebar && overlay) {
    menuButton.addEventListener("click", openMenu);
}

// Tombol tutup
if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
}

// Klik area luar sidebar
if (overlay) {
    overlay.addEventListener("click", closeMenu);
}

// Menutup menggunakan tombol Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

// Menutup sidebar setelah memilih menu
if (sidebar) {
    const menuLinks = sidebar.querySelectorAll("nav a");

    menuLinks.forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });
}
