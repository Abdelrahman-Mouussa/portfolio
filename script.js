const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector(".navigation-menu");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && navigationMenu) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigationMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigationMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
