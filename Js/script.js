const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');


function jump() {
    mario.classList.add('jump');
    
    const audio = document.querySelector('audio')
    audio.currentTime = 0.1
    audio.play()
    
    setTimeout(() => {
        
        mario.classList.remove('jump');
        
    }, 500);
}

const loop = setInterval(() => {
    
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 105) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'imagens/game-over.png'
        mario.style.width = '60px'
        mario.style.marginLeft = '25px'
    };

        clearInterval(loop)
 
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
