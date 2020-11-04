document.addEventListener('DOMContentLoaded', (event) => {
    let desktopNav = document.getElementById("desktop-nav");
    let mobileNav = document.getElementById("mobile-nav");
    let query = window.matchMedia('(min-width: 800px)');
    if (query.matches) {
        mobileNav.classList.add("hide");
        desktopNav.classList.remove("hide");
    }
    if (!query.matches) {
        desktopNav.classList.add("hide");
        mobileNav.classList.remove("hide");
    }
    query.addEventListener("change", function (e) {
        if (query.matches) {
            mobileNav.classList.add("hide");
            desktopNav.classList.remove("hide");
        }
        if (!query.matches) {
            desktopNav.classList.add("hide");
            mobileNav.classList.remove("hide");
        }
    });
});





