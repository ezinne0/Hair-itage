document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    const phrases = ["Celebrating Black culture.", "Understanding our hair's history.", "Learning about our roots."];
    let currentIndex = 0;
  
    const animatedText = document.getElementById('animatedText');
  
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