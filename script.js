document.addEventListener("DOMContentLoaded",  function (){
    const nav_Open = document.getElementById("navOpen");
    const nav_Close = document.getElementById("navClose");
    const nav_Menu = document.getElementById("navMenu");
    const nav_Backdrop = document.getElementById("navBackdrop");

    function openingNav() {
        nav_Menu.classList.add("open");
        nav_Backdrop.classList.add("visible");
        document.body.classList.add("nav-open");
    }

    function closingNav() {
        nav_Menu.classList.remove("open");
        nav_Backdrop.classList.remove("visible");
        document.body.classList.remove("nav-open");
    }

    nav_Open.addEventListener("click", openingNav);
    nav_Close.addEventListener("click", closingNav);
    nav_Backdrop.addEventListener("click", closingNav);

});