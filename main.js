var pg;

function setup() {
    createCanvas(740, 480);
    pg = new Pig();
}

function draw() {
    background(0,250,0);
    pg.display();
}


function Pig() {
    var x = mouseX;
    var y = mouseY;
    
    this.display = function() {
        var x = mouseX;
        var y = mouseY;
    
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
    ellipse(x+380, y, 200, 200);
    
    //earLeft
    noStroke();
    fill('#FF99FF');
    triangle(x+290, y-50, x+324, y-90, x+280, y-115);
    
    //earRight
    noStroke();
    fill('#FF99FF');
    triangle(x+420, y-95, x+465, y-120, x+460, y-67);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse((x+380)-42, y-26, 54, 54);
    
    //pupilLeft
    fill('#0000FF');
    ellipse((x+380)-42, y-26, 30, 30);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse((x+380)+42, y-26, 54, 54);
    
    //pupilRight
    fill('#0000FF');
    ellipse((x+380)+42, y-26, 30, 30);
    
    //nose
    fill('#FF3399');
    rect((x+380)-25, y+10, 50, 50);
    
    //nostrilLeft
    fill('#000000');
    ellipse((x+380)-12, y+20, 13, 13);
    
    //nostrilRight
    fill('#000000');
    ellipse((x+380)+12, y+20, 13, 13);
    }
}
