var canvas;
var music;
var ball;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200, 800);

    //create 4 different surfaces

    surface1 = createSprite(50, 500, 50, 10);
    surface1.shapeColor = "yellow";

    surface2 = createSprite(100, 770, 50, 10);
    surface2.shapeColor = "green";

    surface3 = createSprite(150, 770, 50, 10);
    surface3.shapeColor = "pink";
    
    surface4 = createSprite(200, 770, 50, 10);
    surface4.shapeColor = "red"; 


    //create box sprite and give velocity
    ball = createSprite(Math.round(random(50, 700)), 400, 15, 15);
    ball.velocityY = 5;
    ball.velocityX = 5;
    ball.shapeColor = "orange"

}

function draw() {

    drawSprites();

    background(rgb(169,169,169));
    //create edgeSprite
 createEdgeSprites();


ball.bounceOff(surface1);
ball.bounceOff(surface2);
ball.bounceOff(surface3);
ball.bounceOff(surface4);

if(ball.isTouching(surface1)){
    ball.shapeColor = "yellow";
}

if(ball.isTouching(surface2)){
    ball.shapeColor = "green";
}

if(ball.isTouching(surface3)){
    ball.shapeColor = "pink";
}

if(ball.isTouching(surface4)){
    ball.shapeColor = "red";
}
}
