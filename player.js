const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const scoreEl = document.querySelector('#score');
let score = 0;
// let endScore = 0

const modal = document.querySelector("#modal")
const modalScore = document.querySelector("#mcontent h1")

// sound
const sBullet = document.querySelector('#sbullet')


const cWidth = canvas.width = 450;
const cHeight = canvas.height = 400;

const anime = null;
const bullets = [];
const enemies = [];
const particles = [];
let speedx = 0;
let speedy = 0;

let gameState = 0;
let c8enemies = null;
let count = 0;

let gameEngine;

modal.style.display = "none";


// Animate game
function runGame(){

    clearCanvas();

    player.draw();
    bullets.forEach(bullet => bullet.draw());
    enemies.forEach(enemy => enemy.draw());
    particles.forEach((particle, pindex) => {
        particle.draw();

        //Remove first 5 particle every 2sec
        setTimeout(() => {
            if(particles.length > 24){
                particles.splice(pindex, 24);
            }
        },500)

    })
    // drawGun();
    // shootBullet()
    //Change position

    //startAnime()
    gameEngine = requestAnimationFrame(runGame);

}


//Main Entry block
function startGame(){
    gameState = 1;
    speedx = 0;
    speedy = 0;
    score = 0;
    scoreEl.innerText = score;
    modal.style.display = "none";

    runGame();

    // Create an enemy every timed interval
    c8enemies = setInterval(spawnEnemies, 2000);
}

function pauseGame(){
    cancelAnimationFrame(gameEngine);
    clearInterval(c8enemies);
}

function stopGame(){

    location.reload();
}



// Create Player instance
class Player{
    constructor(){
        this.x = cWidth/2;
        this.y = cHeight/2;
        this.rad = 20;
        this.color = "blue";
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create player instance
const player = new Player();


// Create Enemy instance
class Enemy{
    constructor(x, y, rad, color, espeedx, espeedy){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
        this.edx = espeedx;
        this.edy = espeedy;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();


        // Handle motion
        this.x += this.edx;
        this.y += this.edy;

        // Check for collision
        enemies.forEach((enemy, enemyIndex) => {

            // No need to remove enemies when offview
            
           // Check for collision with bullets
            bullets.forEach((bullet, bulletIndex) => {

                // Remove bullets when offview
                if(bullet.x + bullet.rad < 0 || (bullet.x - bullet.rad - 20) > cWidth || bullet.y + bullet.rad < 0 || bullet.x - bullet.rad - 20 > cHeight){
                    bullets.splice(bulletIndex, 1);
                }

                // Bullet colliding with enemy
                const distEB = Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y)
                
                if(distEB - enemy.rad - bullet.rad < 1 && enemy.rad <= 10){
                    
                    enemies.splice(enemyIndex, 1);
                    bullets.splice(bulletIndex, 1);
                    sBullet.play();


                    //Explode
                    for(let i=0; i < (enemy.rad * 3); i++){

                        const px = enemy.x;
                        const py = enemy.y;
                        const prad = Math.floor(Math.random() * (8 -3) + 3);
                        const pclr = enemy.color;
                        const pdx = ((Math.random() - 0.5) * 5) * 0.97 ;
                        const pdy = ((Math.random() - 0.5) * 5) * 0.97;


                        particles.push(new Particle(px,py,prad,pclr,pdx,pdy))
                        console.log(particles.length);
                    }
                

                    score += 5;
                }else if(distEB - enemy.rad - bullet.rad < 1 && enemy.rad > 10){

                    if(enemy.rad - 10 < 8){
                        enemy.rad = 8;
                        score += 3
                    }else{
                        enemy.rad -= 10;
                        score += 1
                    }
                    bullets.splice(bulletIndex, 1);

                }

                scoreEl.innerText = score; 


            })


            // END GAME : Check for collision with player
            const distEP = Math.hypot(player.x - enemy.x, player.y - enemy.y)
        
            if(distEP - enemy.rad - player.rad < 1 && gameState == 1){

                pauseGame();
                modal.style.display = "block";

                // if(gameStatus == 1){
                    modalScore.innerText = score;
                    gameState = 0;
                // }

            }


        })

    }

    
}

// create instances of enemies
function spawnEnemies(e) {

    let ex = 0;
    let ey = 0;

    const erad = Math.floor(Math.random() * (30 - 8) + 8);

    if(Math.random() > 0.5){

        ex = Math.random() > 0.5 ? -erad : cWidth + 30;
        ey = Math.random() * cHeight;

    }else{

        ey = Math.random() > 0.5 ? -erad : cHeight + 30;
        ex = Math.random() * cWidth;

    }
    // const ex = Math.random() > 0.5 ? Math.floor(Math.random() * (-30)) : Math.floor(Math.random() * (cWidth + 30));
    // const ey = Math.random() > 0.5 ? Math.floor(Math.random() * (-30)) : Math.floor(Math.random() * (cHeight + 30));


    const eclr = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    const angle = Math.atan2((cHeight / 2) - ey, (cWidth / 2) - ex);
    const espdx = Math.cos(angle);
    const espdy = Math.sin(angle);

    enemies.push(new Enemy(ex, ey, erad, eclr, espdx, espdy))
    //console.log(enemies.length);
}

// Create Explosion Particles
class Particle{
    constructor(x, y, rad, color, px, py){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
        this.pdx = px;
        this.pdy = py;
    }
    
    draw(){

        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Handle motion
        this.x += this.pdx * 4;
        this.y += this.pdy * 4;

        

    }

    
}



// Bullet
class Bullet{
    constructor(){
        this.x = cWidth/2;
        this.y = cHeight/2;
        this.rad = 5;
        this.color = "red";
        this.dx = speedx * 3;
        this.dy = speedy * 3;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y , this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Handle motion
        this.x += this.dx;
        this.y += this.dy;

    }

}


// Mouse click event
addEventListener('click', shootBullet);


function shootBullet(e){
    // console.log(e);
    const angle = Math.atan2(e.pageY - 120 - (cHeight / 2), e.clientX - 10 - (cWidth / 2));
    // console.log(angle);
    speedx = Math.cos(angle);
    speedy = Math.sin(angle);

   bullets.push(new Bullet(speedx, speedy));
//    console.log(bullets.length);



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


