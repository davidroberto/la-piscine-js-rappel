// je sélectionne dans la page entière (document = DOM)
// tous les élements qui ont la classe "card"
const dogCards = document.querySelectorAll(".card");

// je fais une boucle et pour chaque card trouvée
// j'execute une action (une fonction)

dogCards.forEach((dogCard) => {
  // quand je clique sur une card
  dogCard.addEventListener("click", () => {
    // je sélectionné le bouton contenant la classe "availability"
    const availability = dogCard.querySelector(".availability");
    // et je change son CSS pour l'afficher (par défaut il est en display none)
    availability.style.display = "block";
  });
});
