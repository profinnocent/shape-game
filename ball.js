const scoretxt = document.querySelector("#scoretxt");
const startBtn = document.querySelector("#start");

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");


let score = 0;
let lives = 0;

let cWidth = canvas.width = 500;
let cHeight = canvas.height = 500;

let sWidth = 50;
let sHeight = 50;

let sPosX = 0;
let sPosY = 0;

const circle = {
    x: 200,
    y: 420,
    rad: 30,
    speed: 0,
    dx: 5,
    dy: -4
}


//Clear canvas to update new postions
function clearCanvas(){
    ctx.clearRect(0, 0, cWidth, cHeight)
}

function darwCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.rad, 0, Math.PI * 2);
    ctx.fillStyle = "violet";
    ctx.fill();
    ctx.closePath()

}

function circlePos(){
    circle.x += circle.dx
    circle.y += circle.dy
}

function showCircle(){
    //Clear the canvas before you drawing
    // clearCanvas();

    //Draw the shape
    darwCircle();

    //change position
   circlePos();

    //Detect sidewalls
    collision()


    //Redraw
    // requestAnimationFrame(showCircle)
} 

// showCircle();


//Player bat object
const player = {
    width: 80,
    height: 20,
    x: 200,
    y: 480,
    speed: 5,
    dx: 0,
    dy: 0
}

//Draw player
function darwPlayer(){
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

//ShowPlayer
function showPlayer(){
    // clearCanvas();

    darwPlayer();

    player.x += player.dx;

    // requestAnimationFrame(showPlayer);

}

//Call the show player function
//showPlayer()


//Handle keyboard event to move Player
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);


//Handl key Down event
function movePlayer(e){

    //check for collison

        if(e.key === "ArrowLeft" || e.key === "Left" ){
            playerLeft();
        }else  if(e.key === "ArrowRight" || e.key === "Right" ){
            playerRight();
        }

}


//Handl key up event to stop player from moving continuously
function stopPlayer(e){
    // alert("Keydown")
    if(e.key === "ArrowRight" || e.key === "Right" || e.key == "ArrowLeft" || e.key == "Left" ){
        playerStop();
    
    }
}


//Player Button control on phone
leftBtn.addEventListener('mouseenter', playerLeft);
rightBtn.addEventListener('mouseenter', playerRight);

// leftBtn.addEventListener('mousedown', playerLeft);
// rightBtn.addEventListener('mousedown', playerRight);
leftBtn.addEventListener('mouseleave', playerStop);
rightBtn.addEventListener('mouseleave', playerStop);

function playerLeft(){
    if(player.x < 0){
        player.dx = 0;
    }else{
        player.dx = -player.speed;
    }
}

function playerRight(){
    if(player.x + player.width > cWidth){
        player.dx = 0;
    }else{
        player.dx = player.speed;
    }
}

function playerStop(){
    player.dx = 0;
}





//Collision
function collision(){

    if(circle.x + circle.rad > cWidth || circle.x - circle.rad < 0){
        circle.dx *= -1;
    }
    
    //Detect top wall 
    if(circle.y - circle.rad < 0 ){
        circle.dy *= -1;
    }

    //Detect bottom wall 
    if(circle.y + circle.rad > cHeight){
        lives--;
        document.getElementById('livestxt').innerText = lives;

        if(lives > 0){
        circle.dy *= -1;
        }else{
            endGame(1);
        }

    }

    //Detect collision with player pad
    if(circle.x > player.x && circle.x < player.x + player.width && circle.y + circle.rad > player.y){
        score++;
        scoretxt.innerText = score;

        if(score > 10){
            circle.speed += 5;
        }

        circle.dy *= -1;
    }
    

}


//Start game
function startGame(){

        clearCanvas();

        showCircle();
        showPlayer();

        requestAnimationFrame(startGame);

   

}

// End game
function endGame(choice){

    if(choice == 0){
        if(confirm("Do you want to end this Game?")){
            location.reload();
        }
    }else{
        location.reload();
        alert("Game Over!!! Your score is " + score)
    }

}

// resume game
function restartGame(){
    circle.dx = 5;
    circle.dy = -4;

    lives = 3
    document.getElementById('livestxt').innerText = lives;

    scoretxt.innerText = 0;

    startBtn.disabled = true;

    startGame();
}