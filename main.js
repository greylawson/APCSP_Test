function setup() {
    createCanvas(740, 480);
}

function draw() {
    var x = width/4;
    var y = height/2;
    
    //draws a puppy
    //face
    noStroke();
    fill('#52C5DC');
    ellipse(x, y, 200, 200);
    
    //nose
    fill('#EFB8D2');
    ellipse(x, y+30, 64, 64);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    //pupilLeft
    fill('#7FC35E');
    ellipse(x+42, y-26, 40, 40);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    //pupilRight
    fill('#7FC35E');
    ellipse(x-42, y-26, 40, 40);
    
    //earLeft
    fill('#52C5DC');
    push();
    translate(x-100, y-80);
    rotate(Math.PI/4);
    ellipse(0, 0, 52, 92);
    pop();
    
    //earRight
    fill('#52C5DC');
    push();
    translate(x+100, y-80);
    rotate(-Math.PI/4);
    ellipse(0, 0, 52, 92);
    pop();
    
    //tongue
    fill('#EE3E36');
    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    
    //draws a pig
    //face
    noStroke();
    fill('#FF99FF');
    ellipse(x*3, y, 200, 200);
    
    //earLeft
    noStroke();
    fill('#FF99FF');
    triangle(515, 135, 460, 190, 455, 130);
    
    //earRight
    noStroke();
    fill('#FF99FF');
    triangle(665, 130, 650, 190, 600, 135);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse((x*3)-42, y-26, 54, 54);
    
    //pupilLeft
    fill('#0000FF');
    ellipse((x*3)-42, y-26, 30, 30);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse((x*3)+42, y-26, 54, 54);
    
    //pupilRight
    fill('#0000FF');
    ellipse((x*3)+42, y-26, 30, 30);
    
    //nose
    fill('#FF3399');
    rect((x*3)-25, y+10, 50, 50);
    
    //nostrilLeft
    fill('#000000');
    ellipse((x*3)-12, y+20, 13, 13);
    
    //nostrilRight
    fill('#000000');
    ellipse((x*3)+12, y+20, 13, 13);
}

