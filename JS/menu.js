window.addEventListener('DOMContentLoaded', navigation);
    
    function navigation() {
        let desktopNav = document.getElementById("desktop-nav");
        let mobileNav = document.getElementById("mobile-nav");
        let query = window.matchMedia('(min-width: 800px)')

        if (query.matches) {
            mobileNav.classList.add("hide");
            desktopNav.classList.remove("hide");
        } 
        if (!query.matches) {
            desktopNav.classList.add("hide");
            mobileNav.classList.remove("hide");
        }
    }
    



