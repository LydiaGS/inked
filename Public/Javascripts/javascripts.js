// Affiche ou cache le bouton selon le scroll
window.addEventListener("scroll", function () {
  const button = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Scroll en douceur vers le haut
document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//témoigang
document.querySelector('.temoignages-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nom = document.getElementById('nom').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (nom && message) {
      // Affiche sur le site
      const liste = document.getElementById('liste-temoignages');
      const avis = document.createElement('div');
      avis.innerHTML = `<strong>${nom}</strong><p>${message}</p>`;
      avis.style.marginBottom = '1rem';
      liste.prepend(avis);
  
      // Envoie à Google Sheets
      fetch("https://script.google.com/macros/s/AKfycbyeV6Ab7enEAnb9k5ZkH43T5XT88ra81TonNI5WXcnaRbp5KWU-ev1ekcjRA_O4B6MD/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nom: nom, message: message })
      });
  
      // Vide le formulaire
      this.reset();
    }
  });
  
  
 