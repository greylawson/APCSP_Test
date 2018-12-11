var pg;
var feed = [];
var amount = prompt("How many apples do you want to feed the pig?");
if(amount < 0){
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
    background(0,250,0);
    pg.display();
    
    // display all the food
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
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
        for(var i = 0; i < feed.length ; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
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
    rect(x-25, y+10, 50, 50);
    
    //nostrilLeft
    fill('#000000');
    ellipse(x-12, y+20, 13, 13);
    
    //nostrilRight
    fill('#000000');
    ellipse(x+12, y+20, 13, 13);
    }
}

