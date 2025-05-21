document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const toggleButton = document.querySelector(".toggle-button");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
