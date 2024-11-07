// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleSwitch = document.getElementById('theme-toggle');

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// JavaScript to toggle the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class
});
