document.write(`
<nav id="nav">
    <div class="nav-icon-logo">
        <img src="/assets/media/nav-icon.png" alt="Icône" class="nav-icon nav-icon-unhover">
        <img src="/assets/media/nav-icon-blue.png" alt="Icône" class="nav-icon nav-icon-hover">
        <h1 class="nav-logo">MDJeux63</h1>
    </div>
    <ul>
        <li><a href="/fr-fr.html#">Accueil</a></li>
        <li><a href="/fr-fr.html#about">À propos</a></li>
        <li><a href="/fr-fr.html#games">Nos jeux</a></li>
        <li><a href="/fr-fr.html#order">Commander</a></li>
        <li><a href="/fr-fr.html#join">Nous rejoindre</a></li>
        <li class="nav-separator"></li>
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