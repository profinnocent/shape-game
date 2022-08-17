const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const cWidth = canvas.width = 400;
const cHeight = canvas.height = 400;

const anime = null;
const bullets = [];


class Player{
    constructor(rad, color){
        this.x = cWidth/2;
        this.y = cHeight/2;
        this.rad = rad;
        this.color = color;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const player = new Player(20, "blue");

// Bullet
class Bullet{
    constructor(rad, color){
        this.x = cWidth/2;
        this.y = cHeight/2;
        this.rad = rad;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Handle motion
        this.x += this.dx;
        this.y += this.dy;

        // Destroy when offview
        bullets.forEach((bullet, index) => {
            if(bullet.x + bullet.rad < 0 || bullet.x - bullet.rad > cWidth || bullet.y + bullet.rad < 0 || bullet.x - bullet.rad > cHeight){
                bullets.splice(index, 1);
            }
        })
    }
}



//Main Entry block
function startGame(){
    clearCanvas();

    player.draw();
    bullets.forEach(bullet => bullet.draw());
    // drawGun();
    // shootBullet()
    //Change position

    //startAnime()
    requestAnimationFrame(startGame);


}

function pauseGame(){
    cancelAnimationFrame(anime);
}

function stopGame(){
    location.reload();
}


//Utility functions


//Clear canvas
function clearCanvas(){
    ctx.clearRect(0, 0, cWidth, cHeight);
}

//Keyboard Events
document.addEventListener('keydown', playerAction);


//Handles all player keyboard directed action
function playerAction(e){
// alert('Key pressed')
    if(e.key === 'ArrowUp' || e.key === 'Up'){
        shootBullet();
    }else if(e.key === 'ArrowDown' || e.key === 'Down'){
        aimGun();
    }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }else if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }
}


// Mouse click event
document.addEventListener('click', shootBullet);


function shootBullet(){
   bullets.push(new Bullet(5, "red"));
   console.log(bullets.length);

}