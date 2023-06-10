document.addEventListener('DOMContentLoaded', function() {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    if (isMobile) {
        const mySiema = new Siema({
            selector: ".slider",
            duration: 400,
            easing: 'ease-out',
            loop: true
        });
        document.querySelector(".slider-arrow-left")?.addEventListener('click', () => mySiema.prev());
        document.querySelector(".slider-arrow-right")?.addEventListener('click', () => mySiema.next());
    }
  });