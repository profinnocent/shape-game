const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const cWidth = canvas.width = 340;
const cHeight = canvas.height = 400;

let gameState = 0;


//Utility functions
function rxpos(){
    return Math.floor(Math.random() * (cWidth - 100));
}

function rypos(){
    return Math.floor(Math.random() * (cWidth - 100));
}

function rdxdy() {
    return Math.random() < 0.5 ? -1 : 1;
}

function clearArea(){
    ctx.clearRect(0,0,cWidth,cHeight);
}

function bwidth(){
    return Math.floor(Math.random() * 41) + 10;
}

function bheight(){
    return Math.floor(Math.random() * 41) + 10;
}

function ranclr(){
    return Math.floor(Math.random()*16777215).toString(16);
}


//Game stage functions
function startGen(){
    if(gameState == 0){
        gameState = 1;
        animate();
    }
}

function pauseGen(){
        gameState = 0;
}

function stopGen(){
        location.reload();
}



// Class object declaration
class Block{
    constructor(){
        this.x = rxpos();
        this.y = rypos();
        this.w = bwidth();
        this.h = bheight();
        this.clr = "#"+ranclr();
        this.dx = rdxdy();
        this.dy = rdxdy();
        this.speed = 1;
    }

    draw(){
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.clr
        ctx.closePath()

        this.x += this.dx;
        this.y += this.dy;
    }


}

//Create Block
let count = 0;
const blockets = [];
function createBlock(){
blockets[count]  = new Block();
count++;
}

function animate(){
    if(gameState == 0){

    }else{
        clearArea()

        createBlock()

        for(let i=0; i<blockets.length;i++){
            blockets[i].draw();
        }
    }

    // redBlock.draw();

    requestAnimationFrame(animate)
}


