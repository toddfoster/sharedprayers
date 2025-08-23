(() => {
  // <stdin>
  (function() {
    const main_menu = document.querySelector(".main-menu");
    const header_region = document.querySelector(".header__region");
    const nav = document.querySelector(".mobile-nav");
    const sheet = document.querySelector(".mobile-nav__sheet");
    const toggle = document.querySelector(".mobile-nav__toggle");
    const small_screen = window.matchMedia("(max-width: 666px)").matches;
    if (small_screen) {
      main_menu.hidden = true;
      header_region.hidden = true;
      nav.hidden = false;
    }
    function navopen() {
      nav.dataset.navopen = "true";
      sheet.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      document.body.addEventListener("keydown", closeonesc);
    }
    function navclose() {
      delete nav.dataset.navopen;
      sheet.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.removeEventListener("keydown", closeonesc);
    }
    function closeonesc(e) {
      if (e.key === "Escape") {
        navclose();
      }
    }
    const toggles = document.querySelectorAll(".mobile-nav__cover, .mobile-nav__toggle");
    toggles.forEach(function(toggle2) {
      toggle2.addEventListener("click", function(e) {
        e.preventDefault();
        if (nav.dataset.navopen) {
          navclose();
        } else {
          navopen();
        }
      });
    });
    const links = document.querySelectorAll(".mobile-nav__sheet a");
    links.forEach(function(link) {
      link.addEventListener("click", () => navclose());
    });
    if (links.length) {
      const lastlink = [].slice.call(links).pop();
      lastlink.addEventListener("blur", () => toggle.focus());
    }
  })();
})();
