document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    // Affiche l'alerte de succès
    var successAlert = document.getElementById('successAlert');
    successAlert.classList.remove("d-none");

    // Ferme la modale
    var formModalElement = document.getElementById('formModal');
    var formModal = bootstrap.Modal.getInstance(formModalElement);
    formModal.hide();

    // Réinitialise le formulaire
    event.target.reset();

    
});
