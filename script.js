const carouselImages = document.querySelectorAll('.carousel-images img');
let currentImageIndex = 0;

function showNextImage() {
  // Hide all images
  carouselImages.forEach((img, index) => {
    img.style.display = 'none';
  });

  // Show the next image
  carouselImages[currentImageIndex].style.display = 'block';

  // Update the current index
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
}

// Automatically change image every 3 seconds
setInterval(showNextImage, 3000);

// Initial display
showNextImage();
// JavaScript for switching between TShirts and Polos
const tshirtBtn = document.getElementById('tshirt-btn');
const polosBtn = document.getElementById('polos-btn');

tshirtBtn.addEventListener('click', function() {
  tshirtBtn.classList.add('active');
  polosBtn.classList.remove('active');
  // Add any action you want to take when TShirts is selected
});

polosBtn.addEventListener('click', function() {
  polosBtn.classList.add('active');
  tshirtBtn.classList.remove('active');
  // Add any action you want to take when Polos is selected
});

