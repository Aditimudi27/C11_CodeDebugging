//Define variables
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//Load the Animations
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    //Add sprite Animation
    trex.addAnimation("running", trex_running);
    //Scale the sprite
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround=createSprite(200,190,400,20);
    invisibleGround.visible=false;
    
}

function draw() {
    background(220);
    console.log(trex.y);
    //jump when the space button is pressed
    if (keyDown("space") && trex.y>=156) {  
        trex.velocityY = -10;
    }
    //Add Gravity to T-rex
    trex.velocityY = trex.velocityY + 0.8

    //Create Infinite Ground 
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    //Collide T-rex with Ground 
    trex.collide(invisibleGround);
    drawSprites();
}
