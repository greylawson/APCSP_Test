var pg;
var feed = [];
var counter = 0;

var amount = prompt("How many apples do you want to feed the pig?");
while(amount < 0){
    var amount = prompt("Please enter a number zero or greater.")
}
var numFood = amount;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    pg = new Pig();
    
    // initializing a set amount number of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(102,255,255);
    
    // draws grass
    for(var i = -15; i < windowWidth; i+=10){
        fill(0,230,0);
        noStroke();
        triangle(i, windowHeight, i+20, windowHeight-random(50,70), i+40, windowHeight);
        fill(0,230,0);
    }
    
    // draws second row of clouds
    for(var i = -300; i < windowWidth+100; i+=200) {
        fill(255,255,255);
        strokeWeight(20);
        stroke(224,224,224);
        ellipse(i, 70, 220, 90);
        noStroke();
        fill(255,255,255);
    }
    
    //draws sun
    fill(255,245,85);
    ellipse(200, windowHeight-windowHeight/1.09, 200, 200);
    noStroke();
    
    // draws first row of clouds
    for(var i = 0; i < windowWidth+100; i+=200) {
        fill(255,255,255);
        strokeWeight(15);
        stroke(224,224,224);
        ellipse(i, 10, 220, 90);
        noStroke();
        fill(255,255,255);
    }
    
    pg.display();
    
    // display all the food
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    noStroke();
    fill(0,0,250);
    text("You have eaten " + counter + " of " + numFood + " apples.", 25, 35);
    textSize(25);
}

function mousePressed() {
    pg.eat();
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object
    
    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
        fill(51, 204, 51)
        rect(this.x-4, this.y-15, 8, -25);
        ellipse(this.x+11, this.y-21, 30, 10);
        
    }
}


function Pig() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 100;

    this.getDistance = function(other) {
        var di = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return di;
    }
    
    this.eat = function() {
        for(var i = feed.length-1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                counter++;
            }
        }
    }
    
    this.display = function() {
        x = mouseX;
        y = mouseY;
        noStroke();
    
    //draws a pig
    //face
    noStroke();
    fill('#FF99FF');
    ellipse(x, y, 200, 200);
    
    //earLeft
    noStroke();
    fill('#FF99FF');
    triangle(x-80, y-68, x-20, y-105, x-70, y-120);
    
    //earRight
    noStroke();
    fill('#FF99FF');
    triangle(x+80, y-68, x+20, y-105, x+70, y-120);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x-42, y-26, 54, 54);
    
    //pupilLeft
    fill('#0000FF');
    ellipse(x-42, y-26, 30, 30);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x+42, y-26, 54, 54);
    
    //pupilRight
    fill('#0000FF');
    ellipse(x+42, y-26, 30, 30);
    
    //nose
    fill('#FF3399');
    rect(x-20, y+10, 40, 40);
    
    //nostrilLeft
    fill('#000000');
    ellipse(x-12, y+20, 12, 12);
    
    //nostrilRight
    fill('#000000');
    ellipse(x+12, y+20, 12, 12);
    
    //mouth
    if (mouseIsPressed) {
        ellipse(x, y+75, 60, 40);
    } else {
        fill(230, 0, 76);
        arc(x, y+65, 60, 45, 0, HALF_PI);
        arc(x, y+65, 60, 45, HALF_PI, PI);
        }
    }
}