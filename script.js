
// Theme switching
function changeTheme(theme) {
    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.getElementById('themeSelector').value = savedTheme;
    changeTheme(savedTheme);
}

// Contact toggle
function showContact() {
    const info = document.getElementById('contact-info');
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Scroll to case studies
function showWork() {
    const caseStudies = document.querySelector('.case-studies');
    if (caseStudies) {
        caseStudies.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load time message
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms.`);
    console.log('No frameworks. No build process. Just HTML, CSS, and a tiny bit of JS.');
    console.log('View source to see how simple effective marketing can be.');
});

// For potential partners
console.log('%cLooking for honest marketing?', 'font-size: 20px; font-weight: bold; color: #0066cc;');
console.log('We believe in clarity over complexity. Get in touch: hello@honestmarketing.com');

