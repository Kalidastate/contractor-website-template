// Minimal JavaScript for navigation toggle and small interactive bits
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // Contact form placeholder behavior
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Simple user-facing confirmation. Replace with real submission logic.
      alert('Thank you! This is a demo form. Connect it to your backend or a form service to capture leads.');
      form.reset();
    });
  }
});
