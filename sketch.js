var dog,sadDog,happyDog;
var feed,addFood;
var foodStock,foodObj ;
foodObj=new food() ;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 

feed = createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("Add food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();

foodObj.display();
}
function feedDog(){


  
}

function addFoods(){


  
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
