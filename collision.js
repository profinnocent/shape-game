const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const cWidth = canvas.width = 340;
const cHeight = canvas.height = 400;

let count = 0;
const blockets = [];
let cbInterval = null;
let kaboom = 0;


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

        //handle position of object
        this.x += this.dx;
        this.y += this.dy;

        //Handle wall detection
        if(this.x + this.w > cWidth || this.x < 0){
            this.dx *= -1;
        }else if(this.y + this.h > cHeight || this.y < 0){
            this.dy *= -1;
        }

        
    }

   


}

//Create Block
function createBlock(){
    //Control the amount of blcoks created
        blockets[count]  = new Block();
        count++;

    if(count >= 5){
    
        clearInterval(cbInterval)
    }

}


function animate(){
    clearArea()

    collisionDetect();

    for(let i=0; i<blockets.length;i++){
        blockets[i].draw();
    }

    requestAnimationFrame(animate)
}


//Game State Function
function startGen() {
    // Interval functions
    cbInterval = setInterval(() => createBlock(), 3000);
    
    document.getElementById('startbtn').disabled = true;

    animate()
}

function stopGen() {
    alert("Random Generator machine stopped")
    location.reload();
}

const colbox = [];
let jcol = -1

function collisionDetect(){
        //Handle collision detection
        for(let i=0;i<blockets.length;i++){

            for(let j=0;j<blockets.length;j++){
    
                if(i !== j && j !== jcol){
    
                    if(blockets[i].x + blockets[i].w > blockets[j].x && blockets[i].x < blockets[j].x + blockets[j].w && blockets[i].y + blockets[i].h > blockets[j].y && blockets[i].y < blockets[j].y + blockets[j].h ){

                        blockets[i].dx *= -1;
                        blockets[i].dy *= -1;
                        blockets[j].dx *= -1;
                        blockets[j].dy *= -1;
                        jcol = i;
                        // console.log(i,j);
                        break;

                    }
    
                }
                
            }
        }
}