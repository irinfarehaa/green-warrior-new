var house1,road, ground;
var groundImage,boy, boyImage, treeImg;
var rail1, rail2,rail3, rail4 , rail5 , rail6;
var treeCount , endImage;
var gameState , treesG;

function preload(){
    groundImage = loadImage("set 4.jpg");
    boyImage = loadImage ("blue boy.png");
    endImage = loadImage("gameOver.png");
    treeImg = loadImage("tree1.png");
}

function setup(){
    createCanvas(1520,730);
    
    ground = createSprite(760,450,1520,220);
    ground.addImage(groundImage);
    ground.scale = 2.1;
    boy = createSprite(760,620,10,10);
    boy.addImage(boyImage);
    boy.scale = 0.2;
    treeCount = 0;
    gameState = 1;
    treesG = new Group();

    rail1 = createSprite(240, 650 , 10, 300);
    rail2 = createSprite(1280, 650 , 10, 300);
    rail3 = createSprite(470, 500 , 470, 10);
    rail4 = createSprite(1050, 500 , 470, 10);
    rail5 = createSprite(710, 330 , 10, 350);
    rail6 = createSprite(810, 330 , 10,350);
    rail7 = createSprite(1320, 280 , 400, 10);
    rail8 = createSprite(200, 280 , 400, 10);
    rail9 = createSprite(1120, 230 , 10, 100);
    rail10 = createSprite(400, 230 , 10, 100);
    rail11 = createSprite(970, 180 , 320, 10);
    rail12 = createSprite(560, 180 , 320, 10);
}
function draw(){
    background(0);

    boy.collide(rail1);
    boy.collide(rail2);
    boy.collide(rail3);
    boy.collide(rail4);
    boy.collide(rail5);
    boy.collide(rail6);
    boy.collide(rail7);
    boy.collide(rail8);
    boy.collide(rail9);
    boy.collide(rail10);
    boy.collide(rail11);
    boy.collide(rail12);

      if (gameState === 1){

        if  (keyDown(LEFT_ARROW)){
            boy.x = boy.x - 5;
        }
        if  (keyDown(RIGHT_ARROW)){
            boy.x = boy.x + 5;
        }
        if  (keyDown(UP_ARROW)){
            boy.y = boy.y - 5;
        }
        if  (keyDown(DOWN_ARROW)){
            boy.y = boy.y + 5;
        }
        if (keyCode === 32){
            treeCount = treeCount+1;
            tree = createSprite(boy.x,boy.y+80,15,15)
            tree.addImage(treeImg);
            treesG.add(tree);
        }
        console.log(treeCount);
        console.log("gameState is "+ gameState);
        if (treeCount>= 5){
            gameState = 0;
        }
    }
        if (gameState === 0){
            treeCount = 0;
            boy.addImage(endImage);
            boy.scale =3;
            boy. x =760;
            boy.y =650;
            treesG.destroyEach();
            ground.destroy();
        }
    drawSprites();
}