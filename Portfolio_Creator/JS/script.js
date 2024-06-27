function generatePortfolio() {
    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;
    const specialization = document.getElementById('specialization').value;
    const image = document.getElementById('image').value;
    const achievements = document.getElementById('achievements').value;
    const articles = document.getElementById('articles').value;
    const books = document.getElementById('books').value;
    const certificates = document.getElementById('certificates').value.split('\n').map(cert => cert.split(','));
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const youtube = document.getElementById('youtube').value;

    const portfolioOutput = document.getElementById('portfolioOutput');

    portfolioOutput.innerHTML = `
        <div class="navbar">
            <a href="#" class="toggle-button" onclick="toggleNavbar()">
                <i class="fas fa-bars"></i>
            </a>
            <div class="navbar-links">
                <a href="#" onclick="showSection('home')">Home</a>
                <a href="#" onclick="showSection('achievements')">Achievements</a>
                <a href="#" onclick="showSection('certifications')">Certifications</a>
                <a href="#" onclick="showSection('contact')">Contact Details</a>
            </div>
        </div>
        <div id="home" class="full-width-section">
            <div class="portfolio-section">
                <div class="left">
                    <h2>${name}</h2>
                    <p><strong>Experience:</strong> ${experience}</p>
                    <p><strong>Specialization:</strong> ${specialization}</p>
                </div>
                <div class="right">
                    <img src="${image}" alt="${name}">
                </div>
            </div>
            <div class="social-media">
                <a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${youtube}" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div id="achievements" class="full-width-section">
            <h2>Achievements</h2>
            <p>${achievements}</p>
            <h2>Published Articles</h2>
            <p>${articles}</p>
            <h2>Books</h2>
            <p>${books}</p>
        </div>
        <div id="certifications" class="full-width-section">
            <h2>Certifications</h2>
            ${certificates.map(cert => `
                <div class="certificate">
                    <a href="${cert[1]}" target="_blank">
                        <img src="${cert[0]}" alt="${cert[2]}">
                        <p>${cert[2]}</p>
                    </a>
                </div>
            `).join('')}
        </div>
        <div id="contact" class="full-width-section">
            <h2>Contact Details</h2>
            <p>${contact}</p>
        </div>
    `;

    document.querySelectorAll('.full-width-section').forEach(section => section.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

function showSection(sectionId) {
    document.querySelectorAll('.full-width-section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}
/* Existing JavaScript functions */

function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar .navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}
