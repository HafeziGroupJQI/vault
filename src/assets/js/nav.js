// mobile hamburger toggle; desktop nav is always visible
(function () {
  var nav = document.querySelector(".site-header__nav");
  var toggle = document.querySelector(".site-header__nav-toggle");
  if (!nav || !toggle) return;
  var desktop = window.matchMedia("(min-width: 1000px)");
  function sync() {
    if (desktop.matches) {
      nav.setAttribute("aria-hidden", "false");
    } else {
      nav.setAttribute("aria-hidden", toggle.getAttribute("aria-expanded") !== "true");
    }
  }
  toggle.addEventListener("click", function () {
    toggle.setAttribute("aria-expanded", toggle.getAttribute("aria-expanded") !== "true");
    sync();
  });
  desktop.addEventListener("change", sync);
  sync();
})();
