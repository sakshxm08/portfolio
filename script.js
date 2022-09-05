document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarTran");
  document.querySelector(".cross").classList.toggle("d-none");
  document.querySelector(".menu").style.display = "none";
});
