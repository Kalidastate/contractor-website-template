// Minimal JavaScript for navigation toggle and small interactive bits
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // nav toggle for small screens
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      siteNav.classList.toggle('open');
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

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
