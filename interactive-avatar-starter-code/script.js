/* VARIABLES */
let eyeWidth = 50
let eyeHeight = 40
let pupilWidth = 22
let pupilHeight = 25

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background("pink"); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

//Face
  if (mouseIsPressed){
    stroke(0,0,0)
  strokeWeight(5)
  fill(173,216,230)
  ellipse(width/2,height/2,175,200);
  } else{
  stroke(0,0,0)
  strokeWeight(5)
  fill('#DDF5D9')
  ellipse(width/2,height/2,175,200);
  }

  //Eyes
    if (mouseIsPressed) {
      //eyes closed
      fill(0)
      ellipse(170,170,eyeWidth,eyeHeight/8)
      ellipse(230,170,eyeWidth,eyeHeight/8)
  } else {
      //eyes open
    fill(255,255,255)
    ellipse(170,170,eyeWidth,eyeHeight);
    ellipse(230,170,eyeWidth,eyeHeight); 
    fill(0,0,0);
    noStroke();
    ellipse(170,170,pupilWidth,pupilHeight);
    ellipse(230,170,pupilWidth,pupilHeight);
    }
      
  //Mouth
    if (mouseIsPressed) {
    noFill()
    strokeWeight(4);
    stroke(0,0,0)
    arc(200,230,50,50,180,0);
  } else {
    noFill()
    strokeWeight(4);
    stroke(0,0,0)
    arc(200,230,50,50,0,180);}

//Text
  fill('black')
  strokeWeight(0)
  textSize(25)
  text("Interactive Avatar!!", 40, 40)

//Directions for mouse press
  text("Click to see\n me change!",240,350)

}