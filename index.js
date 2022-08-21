(function() {

    window.addEventListener('load', init);

    function init() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");

        window.onscroll = () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 360) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("nav-focus");
                if (link.getAttribute("href").substring(1) == current) {
                    link.classList.add("nav-focus");
                }
            });
        };
    }

})();