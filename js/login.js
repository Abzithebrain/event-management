document.addEventListener('DOMContentLoaded', function () {
    // Gestion de la soumission du formulaire de connexion
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      if (username === 'Abdoulaye' && password === 'Passer') {
        var loginAlert = document.getElementById('loginAlert');
        loginAlert.classList.remove('d-none');
  
        // Fermer la modale de connexion
        var loginModalElement = document.getElementById('loginModal');
        var loginModal = bootstrap.Modal.getInstance(loginModalElement);
        loginModal.hide();
  
        // Afficher le jumbotron
        var jumbotronSection = document.getElementById('jumbotronSection');
        jumbotronSection.classList.remove('d-none');

        //enlevez le padding de l'élément evenements populaires
        var eventspop = document.getElementById('eventspop');
        eventspop.classList.remove('pt-4');
        eventspop.classList.remove('mt-5');

        // Changer le lien de connexion en déconnexion
      var loginLink = document.getElementById('loginLink');
      loginLink.textContent = 'Se déconnecter';
      loginLink.removeAttribute('data-bs-toggle');
      loginLink.removeAttribute('data-bs-target');
      loginLink.setAttribute('href', '#');
      loginLink.addEventListener('click', function() {
        location.reload();
      });
  
        
      } else {
        alert('Identifiant ou mot de passe incorrect.');
      }
    });
});