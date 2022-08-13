const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const cWidth = canvas.width = 500;
const cHeight = canvas.height = 500;

class Player{
    constructor(x, y, rad, color){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
    }
}

const player = new Player(250, 250, 20, "blue");


function drawPlayer(){
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.rad, 0, Math.PI*2);
    ctx.fillStyle = player.color;
    ctx.fill();
}

//Aim player Gun
let posCount = 0;
function aimGun(){
    
    if(posCount == 0){
        gun.y += 5;
        gun.x += 0
        posCount++;
    }else if(posCount == 1){
             gun.y += 10;
            gun.x -= 5;
        posCount++;
    }else if(posCount == 2){
        gun.y += 15;
         gun.x -= 10
        posCount++;
    }else if(posCount == 3){
        gun.y += 15;
         gun.x -= 15
        posCount++;
    }else if(posCount == 4){
        gun.y -= 10;
         gun.x -= 10
        posCount++;
    }else if(posCount == 5){
        gun.y -= 15;
         gun.x -= 0
        posCount++;
    }else if(posCount == 6){
        gun.y -= 10;
         gun.x += 5
        posCount++;
    }else if(posCount == 7){
        gun.y -= 5;
         gun.x += 10
        posCount++;
    }else if(posCount == 8){
        gun.y += 5;
         gun.x += 15
        posCount++;
    }else if(posCount == 9){
        gun.y += 10;
         gun.x += 10
        posCount = 0;
    }

}


//craete gun
const gun = new Player(player.x + player.rad, player.y, 5, "red");

//Draw Gun
function drawGun(){
    ctx.beginPath();
    ctx.arc(gun.x, gun.y, gun.rad, 0, Math.PI*2);
    ctx.fillStyle = gun.color;
    ctx.fill();
}

//craete bullets
function createBullet(){
const bullet = new Player(gun.x, gun.y, 3, "violet");

    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.rad, 0, Math.PI*2);
    ctx.fillStyle = bullet.color;
    ctx.fill();

    while (bullet.x < cWidth){
        bullet.x += 5;
    }
}

//Draw bullet
function drawBullet(){
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.rad, 0, Math.PI*2);
    ctx.fillStyle = bullet.color;
    ctx.fill();
}

//Animate bullet
function moveBullet(){

}

//Shoot
function shootBullet(){
    createBullet();

}



//Postion of bullet
function bulletPos(){

}



//Main Entry block
function startGame(){
    clearCanvas();

    drawPlayer();
    drawGun();
    shootBullet()
    //Change position


    requestAnimationFrame(startGame);

}

startGame()

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