document.addEventListener('DOMContentLoaded', function() {
    const phrases = ["Progress Building Resources", "An automated toolkit for social justice.", "Reducing barriers to entry for activism."];
    let currentIndex = 0;
  
    const animatedText = document.getElementById('animated-text');
  
    setInterval(() => {
      // Fade out and change the text
      animatedText.style.opacity = 0;
  
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        animatedText.textContent = phrases[currentIndex];
  
        // Fade in with new text
        animatedText.style.opacity = 1;
      }, 1000); // Matches the CSS transition time
    }, 3000); // Change text every 3 seconds
  });