const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
const sprite = document.querySelector("#mysprite")

let cWidth = canvas.width = 400;
let cHeight = canvas.height = 400;

let sWidth = 50;
let sHeight = 50;

let sPosX = 0;
let sPosY = 0;


function animate(){
    ctx.clearRect(0,0,cWidth,cHeight);
    sPosX++;
    sPosY++;
    ctx.drawImage(sprite,sPosX,sPosY, sWidth, sHeight);
   
}

for(let i=0; i<300;i++){
    animate()
}
