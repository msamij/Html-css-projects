var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNobutton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modal) {
  modalNobutton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", openMobileNav);

function closeModal() {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
}

function openMobileNav() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}
