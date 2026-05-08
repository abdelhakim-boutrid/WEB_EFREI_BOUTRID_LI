
function afficher(id) {
  const sections = document.querySelectorAll(".contenu");

  sections.forEach(section => {
    section.classList.remove("actif");
  });

  document.getElementById(id).classList.add("actif");
}


/* Messages de succès dans contact.html */

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const message = form.nextElementSibling;

    message.style.display = "block";

    form.reset();
  });
});

/* Forrmulaire contact + admission */
/* ============================================================
   1. GESTION DES FORMATIONS (Page: cours_formation.html)
   ============================================================ */
function afficher(id) {
  // Sélectionne toutes les sections de contenu
  const sections = document.querySelectorAll(".contenu");

  // Retire la classe 'actif' de toutes les sections
  sections.forEach(section => {
    section.classList.remove("actif");
  });

  // Ajoute la classe 'actif' à la section cliquée
  const sectionCible = document.getElementById(id);
  if (sectionCible) {
    sectionCible.classList.add("actif");
  }
}

/* ============================================================
   2. GESTION DES FORMULAIRES (Page: contact.html)
   ============================================================ */
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Sélectionne le message de succès qui suit immédiatement le formulaire
    const message = form.nextElementSibling;

    if (message && message.classList.contains("message-succes")) {
      message.style.display = "block";
      
      // Cache le message après 5 secondes
      setTimeout(() => {
        message.style.display = "none";
      }, 5000);
    }

    form.reset(); // Vide les champs
  });
});


/* changement dimage automatique de laccueil */
/* ============================================================
   3. CARROUSEL AUTOMATIQUE (Page: index.html)
   ============================================================ */
const inputsRadio = document.querySelectorAll('input[name="slider"]');
let indexActuel = 0;

if (inputsRadio.length > 0) {
  setInterval(() => {
    indexActuel++;
    if (indexActuel >= inputsRadio.length) {
      indexActuel = 0;
    }
    inputsRadio[indexActuel].checked = true;
  }, 4000); // Change d'image toutes les 4 secondes
}


/* l'animation au scroll des pages*/
/* ============================================================
   4. ANIMATION AU SCROLL (Toutes les pages)
   ============================================================ */
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// On applique l'effet aux sections pour un rendu fluide
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";

  section.style.transform = "translateY(50px)";


  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});



/* ============================================================
   5. NAVIGATION ACTIVE (Toutes les pages)
   ============================================================ */
// Met en gras le lien de navigation correspondant à la page actuelle
const pageActuelle = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === pageActuelle) {
    link.style.borderBottom = "2px solid white";
    link.style.paddingBottom = "5px";
  }
});