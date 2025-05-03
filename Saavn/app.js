var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

toggleButton.addEventListener("click", openMobileNav);

function closeModal() {
  backdrop.classList.remove("open");
}

function openMobileNav() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}
