//Create variables here
var dog, happyDog, database, foodS, foodStock, milk;
var dogImg, dogHappy;
var feedPet, addFood, food;
var fedTime, lastFed;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(width/2, height/2)
  dog.scale=0.3
  dog.addImage(dogImg)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  fill(255,200,0)
  text('Press the up arrow key to feed the dog some milk', 10, 15)
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  //food = new Food()
  drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

