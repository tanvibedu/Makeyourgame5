var girl;
var computer, computerImage;


function preload(){
    girl_walking =   loadAnimation("1.png","2.png","3.png",
     "4.png","5.png", "6.png","7.png");   

    computerImage = loadImage("computer.PNG");
    
    loginImage = loadAnimation("lg1.png","lg1.png","lg2.png","lg2.png","lg3.png",
    "lg3.png","lg4.png","lg4.png","lg5.png","lg5.png", "lg6.png","lg6.png","lg7.png","lg7.png");

    scamImage = loadImage("scam.PNG");
    scammerImage = loadImage("scammer.PNG");


}

function setup(){
   createCanvas(800,800)
  girl = createSprite(100,180,20,50);
  girl.addAnimation("walking",  girl_walking);
  girl.scale = 0.5;

  computer = createSprite(500,180,20,50);
  computer.addImage("computer",  computerImage);
  computer.scale = 0.5;

  login = createSprite(400,100,800,800);
  login.addAnimation("login",  loginImage);

  scam = createSprite(400,200,800,800);
  scam.addImage("scam",  scamImage);

  scammer = createSprite(400,200,800,800);
  scammer.addImage("scammer",  scammerImage);
    
    
}

function draw(){
    background(255);
    drawSprites();

    textSize(20);
    text("Press space to move the girl to computer", 100,100);
    login.visible = false;
    scam.visible = false
    scammer.visible = false;
    if(keyDown("space")) {
        girl.velocityX = 10;
      }

    if(girl.isTouching(computer)){
        girl.velocityX = 0;
        girl.visible = false;
        computer.visible = false;

        login.visible = true;
        text("Now, press the right arrow to Login to your laptop", 200, 200);

    }

  if(keyDown("right")) {
        login.velocityX = 10;
        scam.visible=true;
       
      } 
    if(login.isTouching(scam)){
        login.velocityX = 0;
        scam.visible=true;
        login.visible = false
        
    }
     
}   

