// Define an array of image URLs
const images = [
            
    // "Images/xodose.jpg",
    "Images/wp6254473-the-weeknd-computer-wallpapers.jpg",
    "Images/Downloads — Bandicoot Design.jpg",
    
        ];


const mainDiv = document.querySelector('.container');

// Function to change the background image
function changeBackground() {
const index = Math.floor(Math.random() * images.length);
const imageUrl = images[index];
mainDiv.style.backgroundImage = `url('${imageUrl}')`;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 4000);

// Call the function once to set an initial background image
changeBackground();

//JS for the toggle menu
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
