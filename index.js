(function() {

    window.addEventListener('load', init);

    function init() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");

        window.onscroll = () => {
            let current = "";
            console.log("scroll");

            sections.forEach(section => {
                console.log("unfocus");
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("nav-focus");
                console.log("unfocus");
                if (link.getAttribute("href").substring(1) == current) {
                    console.log("focus");
                    link.classList.add("nav-focus");
                }
            });
        };
    }

})();