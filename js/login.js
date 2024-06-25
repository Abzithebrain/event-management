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
  
        
      } else {
        alert('Identifiant ou mot de passe incorrect.');
      }
    });
});