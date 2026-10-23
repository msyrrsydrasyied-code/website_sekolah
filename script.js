const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka navigasi");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll("[data-image]").forEach((item) => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || typeof lightbox.showModal !== "function") {
      window.open(item.dataset.image, "_blank", "noopener");
      return;
    }

    lightboxImage.src = item.dataset.image;
    lightbox.showModal();
  });
});

if (lightbox && lightboxClose) {
  lightboxClose.addEventListener("click", () => lightbox.close());

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener("close", () => {
    if (lightboxImage) lightboxImage.src = "";
  });
}
