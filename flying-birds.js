var img = new Image();
    img.src = 'https://drive.google.com/uc?id=1-yPldbpZ0nhJ1MxOA6EUhR_1L0AHK0Cw';

window.onload = function() {
 var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var x1 = 50;
    var y1 = 0;
    var x2 = 100;
    var y2 = 0;
    var x3 = 150;
    var y3 = 0;
    var x4 = 200;
    var y4 = 0;
    var x5 = 250;
    var y5 = 0;
    var x6 = 300;
    var y6 = 0;
    var x7 = 350;
    var y7 = 0;
    var x8 = 400;
    var y8 = 0;
    var x9 = 450;
    var y9 = 0;
    var x10 = 500;
    var y10 = 0;
    var x11 = 550;
    var y11 = 0;
    var x12 = 600;
    var y12 = 0;
    var x13 = 50;
    var y13 = 400;
    var x14 = 100;
    var y14 = 400;
    var x15 = 150;
    var y15 = 409;
    var x16 = 200;
    var y16 = 400;
    var x17 = 250;
    var y17 = 400;
    var x18 = 300;
    var y18 = 400;
    var x19 = 350;
    var y19 = 400;
    var x20 = 400;
    var y20 = 400;
    var x21 = 450;
    var y21 = 400;
    var x22 = 500;
    var y22 = 409;
    var x23 = 550;
    var y23 = 400;
    var x24 = 600;
    var y24 = 400;

    let count = 0;
    
    var t = Date.now();
    let speed = 25;

    document.onkeydown = function() {
        count += 1;
        y -= 25;
        speed = 25;
        }
    document.ontouchstart = function() {
        count += 1;
        y -= 25;
        speed = 25;
    }
        function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        
        if(y <= 350) {
            speed += 50 * timePassed;
            y += speed * timePassed;
        }
        if(y > 350) {
            count = 0;
        }
        
        context.clearRect(0, 0, 600, 400);
        
       context.beginPath();
        context.drawImage(img,x,y-50,50,50);
        
        context.beginPath();
        context.rect(x1, y1, 30, 100);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x2, y2, 30, 150);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x3, y3, 30, 75);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x4, y4, 30, 25);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x5, y5, 30, 80);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x6, y6, 30, 20);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x7, y7, 30, 75);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x8, y8, 30, 65);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x9, y9, 30, 100);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x10, y10, 30, 90);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x11, y11, 30, 75);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x12, y12, 30, 25);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x13, y13, 30, -50);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x14, y14, 30, -70);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x15, y15, 30, -105);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x16, y16, 30, -55);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x17, y17, 30, -100);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x18, y18, 30, -20);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x19, y19, 30, -75);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x20, y20, 30, -25);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x21, y21, 30, -100);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x22, y22, 30, -150);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x23, y23, 30, -75);
        context.fillStyle="green";
        context.fill();
        
        context.beginPath();
        context.rect(x24, y24, 30, -25);
        context.fillStyle="green";
        context.fill();
        
        
        
        x1 -= 1;
        if (x1 <= 0) {
            x1 = 600;
        }
        x2 -= 1;
        if (x2 <= 0) {
            x2 = 600;
        }
         x3 -= 1;
        if (x3 <= 0) {
            x3 = 600;
        }
         x4 -= 1;
        if (x4 <= 0) {
            x4 = 600;
        }
        x5 -= 1;
        if (x5 <= 0) {
            x5 = 600;
        }
        x6 -= 1;
        if (x6 <= 0) {
            x6 = 600;
        }
         x7 -= 1;
        if (x7 <= 0) {
            x7 = 600;
        }
         x8 -= 1;
        if (x8 <= 0) {
            x8 = 600;
        }
        x9 -= 1;
        if (x9 <= 0) {
            x9 = 600;
        }
        x10 -= 1;
        if (x10 <= 0) {
            x10 = 600;
        }
         x11 -= 1;
        if (x11 <= 0) {
            x11 = 600;
        }
         x12 -= 1;
        if (x12 <= 0) {
            x12 = 600;
        }
        x13 -= 1;
        if (x13 <= 0) {
            x13 = 600;
        }
        x14 -= 1;
        if (x14 <= 0) {
            x14 = 600;
        }
         x15 -= 1;
        if (x15 <= 0) {
            x15 = 600;
        }
         x16 -= 1;
        if (x16 <= 0) {
            x16 = 600;
        }
        x17 -= 1;
        if (x17 <= 0) {
            x17 = 600;
        }
        x18 -= 1;
        if (x18 <= 0) {
            x18 = 600;
        }
         x19 -= 1;
        if (x19 <= 0) {
            x19 = 600;
        }
         x20 -= 1;
        if (x20 <= 0) {
            x20 = 600;
        }
        x21 -= 1;
        if (x21 <= 0) {
            x21 = 600;
        }
        x22 -= 1;
        if (x22 <= 0) {
            x22 = 600;
        }
         x23 -= 1;
        if (x23 <= 0) {
            x23 = 600;
        }
         x24 -= 1;
        if (x24 <= 0) {
            x24 = 600;
        }
        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
        window.requestAnimationFrame(draw);
    }
draw();
}