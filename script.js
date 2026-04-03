// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Update active nav
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            document.querySelector('.nav-links').style.display = '';
        }
    });
});

// Active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Validate
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(data.subject ? `[LeoVerse] ${data.subject}` : '[LeoVerse] New Message');
    const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Topic: ${data.subject || 'General'}\n\n` +
        `Message:\n${data.message}`
    );
    
    // Open email client
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    
    // Show success
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
    }, 5000);
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to cards
document.querySelectorAll('.card, .quote-card, .featured-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = '';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(5, 5, 5, 0.98)';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '15px';
    }
});

// Background Music Playlist
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const songTitle = document.getElementById('songTitle');

const playlist = [
    { src: 'queendom.mp3', name: 'Queendom - AURORA' }
];

let currentSongIndex = 0;
let isPlaying = false;

function loadSong(index) {
    const song = playlist[index];
    bgMusic.src = song.src;
    if (songTitle) {
        songTitle.textContent = song.name;
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    bgMusic.play().catch(() => {});
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    bgMusic.play().catch(() => {});
}

if (musicToggle && bgMusic) {
    loadSong(0);
    
    bgMusic.addEventListener('ended', playNext);
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(() => {
                console.log('Music requires user interaction to play');
            });
            musicToggle.textContent = '🔊';
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
    
    bgMusic.addEventListener('click', () => {
        if (isPlaying) playNext();
    });
}

// Virtual Pet
const petContainer = document.getElementById('petContainer');
const petElement = document.getElementById('pet');
const petBubble = document.getElementById('petBubble');
const petMenu = document.getElementById('petMenu');

let isMenuOpen = false;

function feed() {
    isMenuOpen = false;
    petMenu.classList.remove('show');
    petElement.classList.add('happy');
    petBubble.textContent = 'Yummy! 🍖';
    petContainer.classList.add('speaking');
    setTimeout(() => {
        petElement.classList.remove('happy');
        petContainer.classList.remove('speaking');
    }, 3000);
}

function play() {
    isMenuOpen = false;
    petMenu.classList.remove('show');
    petElement.classList.add('happy');
    petBubble.textContent = 'Fire! 🔥';
    petContainer.classList.add('speaking');
    setTimeout(() => {
        petElement.classList.remove('happy');
        petContainer.classList.remove('speaking');
    }, 3000);
}

function sleep() {
    isMenuOpen = false;
    petMenu.classList.remove('show');
    petElement.classList.add('sleeping');
    petBubble.textContent = 'Zzz... 💤';
    petContainer.classList.add('speaking');
    setTimeout(() => {
        petElement.classList.remove('sleeping');
        petContainer.classList.remove('speaking');
    }, 5000);
}

petContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('pet-btn')) return;
    
    if (isMenuOpen) {
        isMenuOpen = false;
        petMenu.classList.remove('show');
    } else {
        isMenuOpen = true;
        petMenu.classList.add('show');
        petBubble.textContent = 'Roar! 🐉';
        petContainer.classList.add('speaking');
        setTimeout(() => {
            petContainer.classList.remove('speaking');
        }, 2000);
    }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? '' : 'light');
    themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme === 'dark' ? '' : 'light');
});

// Visitor Counter
let visitors = localStorage.getItem('visitors');
if (!visitors) {
    visitors = 1;
} else {
    visitors = parseInt(visitors) + 1;
}
localStorage.setItem('visitors', visitors);
document.getElementById('visitorCount').textContent = visitors;

// Fun Section - Quote Generator
const quotes = [
    '"I am not in danger, Skyler. I am the danger." - Heisenberg',
    '"Winter is coming." - Ned Stark',
    '"Friends don\'t lie." - Eleven',
    '"The name of the song is Goodbye." - Homelander',
    '"I don\'t want to conquer anything. I just think the guy with the most freedom in the whole sea is the Pirate King." - Luffy',
    '"All I do is survive." - Rick Grimes',
    '"Shall we dance?" - Oikawa',
    '"Happiness depends on ourselves." - Aristotle',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Never give up, never surrender!" - Galaxy Quest'
];

function newQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('funQuote').textContent = randomQuote;
    document.getElementById('funQuote').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('funQuote').style.animation = 'fadeIn 0.5s';
    }, 10);
}

// Click Game
let clickCount = localStorage.getItem('clickCount') || 0;
document.getElementById('clickScore').textContent = clickCount;

function playGame() {
    clickCount++;
    localStorage.setItem('clickCount', clickCount);
    document.getElementById('clickScore').textContent = clickCount;
}

// Initialize
console.log('LeoVerse loaded! Welcome to my universe 🚀');
