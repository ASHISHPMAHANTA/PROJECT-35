//Create variables here
var dog,dogImage;
var database;
var happyDog,happyDogImage;
var foodS;
var foodStock;
var foodremaining = 20;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
 
  createCanvas(800, 700);


  dog = createSprite(400,500,20,20);
  dog.addImage("dogimage",dogImage);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() { 

  background(46,139,87);
   fill("red")
  textSize(30)
  text("foodremaining : "+foodremaining,50,200);

textSize(30);
  text("NOTE: PRESS UP ARROW TO FEED THE DOG MILK",50,50)
 
  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage("happydogImage",happyDogImage);

  }
 
  drawSprites();
  //add styles here

}
function readStock(){
//foodS = data.val();

}

function writeStock(){
database.ref('/').update({
  food:foodremaining
})
}
function writeStock(){

  if(foodremaining<=0){
    foodremaining=0;
  }
  else{
    foodremaining = foodremaining-1;
  }
}

function showError(){
  console.log("Error in writing to the database");
}

function keyPressed(){
  if(keyCode === 32){
    
  }
}


