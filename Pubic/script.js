function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  // script.js

// Get the current URL path
const currentPath = window.location.pathname;

// Get all list items
const menuItems = document.querySelectorAll('.navbar ul li');

// Loop through the list items
menuItems.forEach(item => {
  const link = item.querySelector('a');
  
  // Check if the link's href matches the current path
  if (link.getAttribute('href') === currentPath) {
    item.classList.add('active'); // Add the active class
  }
});
