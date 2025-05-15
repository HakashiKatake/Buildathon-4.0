
document.addEventListener('DOMContentLoaded', function() {

    initNavigation();
    initCountdownTimer();
    initFormValidation();
    initScrollEffects();
    initBackgroundMusic();
});


function initBackgroundMusic() {
    const music = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    const volumeIcon = document.getElementById('volume-icon');
    let isPlaying = false;
    
    music.volume = 0.3;
    
    musicControl.addEventListener('click', function() {
        if (!isPlaying) {
            music.play();
            isPlaying = true;
            volumeIcon.className = 'fas fa-volume-up';
            musicControl.classList.remove('muted');
        } else {
            if (music.muted) {
                music.muted = false;
                volumeIcon.className = 'fas fa-volume-up';
                musicControl.classList.remove('muted');
            } else {
                music.muted = true;
                volumeIcon.className = 'fas fa-volume-mute';
                musicControl.classList.add('muted');
            }
        }
    });
    
    const startMusicOnInteraction = function() {
        music.play();
        music.muted = true;
        isPlaying = true;
        volumeIcon.className = 'fas fa-volume-mute';
        musicControl.classList.add('muted');
        
        document.removeEventListener('click', startMusicOnInteraction);
        document.removeEventListener('touchstart', startMusicOnInteraction);
        document.removeEventListener('keydown', startMusicOnInteraction);
        document.removeEventListener('scroll', startMusicOnInteraction);
    };
    
           
    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('touchstart', startMusicOnInteraction);
    document.addEventListener('keydown', startMusicOnInteraction);
    document.addEventListener('scroll', startMusicOnInteraction);
}

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}


function initCountdownTimer() {
    
    const hackathonDate = new Date('May 30, 2025 09:00:00').getTime();
    
    
    const countdownTimer = setInterval(function() {
        
        const now = new Date().getTime();
        
        const timeLeft = hackathonDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
  
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            
           
        }
    }, 1000);
}


function initFormValidation() {
    const registrationForm = document.getElementById('registration-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalOkBtn = document.getElementById('modal-ok');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const teamName = document.getElementById('team-name').value;
            const leaderName = document.getElementById('leader-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!teamName || !leaderName || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            
            successModal.style.display = 'flex';
            
            
            registrationForm.reset();
        });
    }
    
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }
    
    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }
    
    
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
}


function initScrollEffects() {
    
    window.addEventListener('scroll', function() {
        const pixelElements = document.querySelectorAll('.pixel-frame, .track-card, .timeline-content');
        
        pixelElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    });
    
    
    const glitchTitle = document.querySelector('.glitch-title');
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseover', function() {
            this.classList.add('glitching');
        });
        
        glitchTitle.addEventListener('mouseout', function() {
            this.classList.remove('glitching');
        });
    }
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });
}


function createPixelEffect() {
    const pixelArtElement = document.querySelector('.pixel-art-element');
    
    if (pixelArtElement) {
       
        for (let i = 0; i < 50; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel-dot');
            
          
            pixel.style.left = Math.random() * 100 + '%';
            pixel.style.top = Math.random() * 100 + '%';
            
            
            const size = Math.random() * 5 + 2;
            pixel.style.width = size + 'px';
            pixel.style.height = size + 'px';
            
           
            const colors = ['#6e44ff', '#ff44e3', '#44ffd2'];
            pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            
            pixel.style.animationDelay = Math.random() * 5 + 's';
            
            pixelArtElement.appendChild(pixel);
        }
    }
}

document.addEventListener('DOMContentLoaded', createPixelEffect);