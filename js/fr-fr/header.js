document.write(`
<nav id="nav">
    <h1 class="nav-logo nav-logo-1">MDJeux63</h1>
    <h1 class="nav-logo nav-logo-2">MD</h1>
    <ul>
        <li><a href="/fr-fr.html#">Accueil</a></li>
        <li><a href="/fr-fr.html#about">À propos</a></li>
        <li><a href="/fr-fr.html#games">Nos jeux</a></li>
        <li><a href="/fr-fr.html#order">Commander</a></li>
        <li><a href="/fr-fr.html#videos">Nos vidéos</a></li>
        <li><a href="/fr-fr.html#join">Nous rejoindre</a></li>
        <li class="nav-special-item"><a href="/fr-fr/mdstock.html">MDStock</a></li>
    </ul>
    <div id="icons"></div>
</nav>
`);

var links = document.querySelectorAll("nav ul li");

icons.addEventListener("click", () => {
  nav.classList.toggle("nav-mobile");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-mobile");
  });
});