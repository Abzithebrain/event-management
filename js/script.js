document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    const eventsList = document.getElementById('eventsList');
  
    eventForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const eventName = document.getElementById('eventName').value;
      const eventDescription = document.getElementById('eventDescription').value;
      const eventDate = document.getElementById('eventDate').value;
      const eventTime = document.getElementById('eventTime').value;
      const eventLocation = document.getElementById('eventLocation').value;
  
      const eventItem = document.createElement('div');
      eventItem.className = 'list-group-item list-group-item-action flex-column align-items-start';
      eventItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${eventName}</h5>
          <small>${eventDate} ${eventTime}</small>
        </div>
        <p class="mb-1">${eventDescription}</p>
        <small>${eventLocation}</small>
        <button class="btn btn-danger btn-sm mt-2 delete-event">Supprimer</button>
      `;
  
      eventsList.appendChild(eventItem);
  
      // Reset the form
      eventForm.reset();
    });
  
    eventsList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete-event')) {
        if (confirm('Voulez-vous vraiment supprimer cet événement?')) {
          e.target.closest('.list-group-item').remove();
        }
      }
    });
  });
  