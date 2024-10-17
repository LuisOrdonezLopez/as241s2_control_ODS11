document.getElementById("menu-icon").onclick = function() {
    var navLinks = document.getElementById("nav-menu");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
};