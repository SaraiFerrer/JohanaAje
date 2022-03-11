var tablero, tableroImg;

function preload(){
  tableroImg=loadImage("images/tablero.png");
}

function setup(){
  createCanvas(600,600);
  tablero = createSprite(300,300);
  tablero.addImage(tableroImg);

}

function draw() {
  background(0);
  
  drawSprites();
}