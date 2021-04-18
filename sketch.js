var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("Images3/cityImage.png");
   balloonImage1=loadAnimation("Images3/hotairballoon1.png");
   balloonImage2=loadAnimation("Images3/hotairballoon1.png"," Images3/hotairballoon1.png",
   "Images3/hotairballoon1.png","Images3/hotairballoon2.png","Images3/hotairballoon2.png",
   "Images3/hotairballoon2.png","Images3/hotairballoon3.png","Images3/hotairballoon3.png","Images3/hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(-10,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(10,0);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10);
    balloon.scale=balloon.scale-0.01;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    updateHeight(0,10);
    balloon.scale=balloon.scale-0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function readHeight(data){
  position = data.val();
  console.log(height.x);
  balloon.x = height.x;
  balloon.y = height.y;
}




function writeHeight(x,y){
  database.ref('balloon/position').set({
      'x' : height.x + x,
      'y': height.y + y
  })
}
function showError(){
  console.log("Show error message is here")
}

