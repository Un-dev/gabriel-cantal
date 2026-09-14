document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Load settings and works
    loadSettings();
    loadWorks();
});

async function loadSettings() {
    try {
        const response = await fetch('data/settings.json');
        const settings = await response.json();

        // Update page title
        document.title = `${settings.name} - ${settings.title}`;

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = settings.bio;
        }

        // Update hero section if exists
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        if (heroTitle) heroTitle.textContent = settings.name.toUpperCase();
        if (heroSubtitle) heroSubtitle.textContent = settings.title;

        // Update about page if exists
        const aboutName = document.querySelector('.about-text h2');
        const aboutBio = document.querySelector('.about-text p');
        if (aboutName) aboutName.textContent = settings.name;
        if (aboutBio) aboutBio.textContent = settings.bio;

        // Update footer social links
        const socialLinks = document.querySelector('.social-links');
        if (socialLinks && settings.instagram) {
            const instagramLink = socialLinks.querySelector('a[href*="instagram"]');
            if (instagramLink) {
                instagramLink.href = settings.instagram;
            }
        }

        // Update contact form email
        const contactEmail = document.querySelector('#contactForm');
        if (contactEmail) {
            contactEmail.dataset.email = settings.email;
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

async function loadWorks() {
    try {
        const response = await fetch('data/works.json');
        const data = await response.json();

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        if (currentPage === 'clips.html') {
            renderWorks(data.clips, '.work-grid');
        } else if (currentPage === 'moyens-metrages.html') {
            renderWorks(data.moyensMetrages, '.work-grid');
        } else if (currentPage === 'publicites.html') {
            renderWorks(data.publicites, '.work-grid');
        } else if (currentPage === 'index.html' || currentPage === '') {
            renderFeaturedWorks(data, '.featured-grid');
        }
    } catch (error) {
        console.error('Error loading works:', error);
    }
}

function renderWorks(works, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container || !works) return;

    container.innerHTML = works.map(work => `
        <div class="work-card">
            <div class="video-container">
                <iframe src="${work.videoUrl}" allowfullscreen></iframe>
            </div>
            <div class="work-card-content">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <span class="tag">${work.tag || ''}</span>
            </div>
        </div>
    `).join('');
}

function renderFeaturedWorks(data, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const featured = [
        ...(data.clips || []).slice(0, 2),
        ...(data.moyensMetrages || []).slice(0, 1),
        ...(data.publicites || []).slice(0, 1)
    ];

    container.innerHTML = featured.map(work => `
        <div class="work-card">
            <div class="video-container">
                <iframe src="${work.videoUrl}" allowfullscreen></iframe>
            </div>
            <div class="work-card-content">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <span class="tag">${work.tag || ''}</span>
            </div>
        </div>
    `).join('');
}
