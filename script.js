

document.addEventListener('DOMContentLoaded', function() {
    initCountdownTimer();
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



// Countdown Timer
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