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

  var autoplayVideos = document.querySelectorAll('video.autoplay-video');

  if ('IntersectionObserver' in window && autoplayVideos.length) {
    var videoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var video = entry.target;
        if (entry.intersectionRatio >= 0.5) {
            video.muted = true;
            video.playsInline = true;
            video.webkitPlaysInline = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.play().catch(function() {});
          } else {
            video.pause();
          }
      });
    }, { threshold: 0.5 });

    autoplayVideos.forEach(function(video) {
      videoObserver.observe(video);
    });
  }
});
