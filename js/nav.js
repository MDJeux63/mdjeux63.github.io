var links = document.querySelectorAll("nav ul li");

icons.addEventListener("click", () => {
  nav.classList.toggle("nav-mobile");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-mobile");
  });
});