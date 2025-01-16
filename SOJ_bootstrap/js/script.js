document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("navbarNavDropdown");
    const mainContent = document.querySelector("main");

    menuToggle.addEventListener("click", () => {
        console.log("Botón de menú clicado");
        menu.classList.toggle("open");
        console.log("Clase 'open' aplicada:", menu.classList.contains("open"));
        mainContent.classList.toggle("shifted");
    });
});


 

