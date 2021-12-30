var jungleimg,player,goldimg
var parachuteimg,snakeimg,giraffee1img;
var playerimg, giraffeimg, queImg;
var playerthinkingimg, chance;
var elephantimg, monsterimg;
var gameState = "wow";
var key,teacher,next;
var timer, score = 0;
var ss = 15;


function preload(){
  jungleimg = loadImage("images/jungle1.jpg")
  jungle1img = loadImage("images/jungle4.jpg")
  goldimg = loadImage("images/gold.gif")
   parachuteimg = loadImage("images/parachute.png")
  snakeimg = loadImage("images/snake-unscreen.gif")
  playerimg = loadImage("images/player.png")
  giraffeimg = loadImage("images/giraffee obstacle.gif")
  queImg = loadImage("images/question.png")
 // giraffee1img = loadImage("giraffblack.png")
  playerthinkingimg = loadImage("playerthinking.png")
  monsterimg = loadImage("images/monster-unscreen.gif");
  monster2img = loadImage("images/monster2.gif")
  textboximg = loadImage("images/maths.png")
  timerimg = loadImage("images/clock.png");
  timersound = loadSound("images/clock1.mp3");
  keyimg = loadImage("images/key.png");
  teacher1img = loadImage("images/teacher-removebg-preview.png");
}
// sameera share the live server with me
function setup() {
  createCanvas(displayWidth, displayHeight);
  parachute = createSprite(displayWidth-1900,displayHeight-200,20,60)
  parachute.addImage('para',parachuteimg)
  player = createSprite(displayWidth-1900,displayHeight-100,20,60)
  player.addImage('walking',playerimg);
  textbox = createSprite(displayWidth-850,displayHeight-210,100,170);
 textbox.addImage('mathslevel',textboximg)
 
  textbox.scale = 0.3;
  

  obstacle = new Obstacle(displayWidth-850,displayHeight-90,100,170);
  //obstacle2 = new Obstacle(displayWidth-400,displayHeight-70,100,170);
  question = createSprite(displayWidth-970,displayHeight-80,100,170)
  question.scale = 0.2;
  question.visible = false;
  timer = createSprite(displayWidth - 470,displayHeight-290,50,50)
  teacher = createSprite(displayWidth-950,displayHeight/2+750)
  teacher.addImage('teacher',teacher1img)
  teacher.visible = false;

   key = createSprite(displayWidth-1050, displayHeight/2+780);
  key.addImage('key',keyimg);
  key.scale = 0.4;
key.visible = false;

  timer.addImage('clock',timerimg)
  timer.scale = 0.2;
  timer.visible = false;
}

function draw() {
  background(0);
 
  if(gameState === "level1"){
    image(jungle1img,-displayWidth/2-50,displayHeight/2-520,displayWidth*1.4,displayHeight*1.4)
    
  
   
    drawSprites();
    textSize(24)
    fill("black")
    text("maths level",displayWidth - 910,displayHeight-200)
  if(keyDown("right")){
    player.x=5+player.x
    }
    if(keyDown("right")){
      parachute.x=5+player.x
      }

  if(player.isTouching(obstacle.ob)){
    //  obstacle.ob.addImage(giraffeimg)
     // obstacle.ob.scale = 0.5;
      gameState = "question1"
    }
    camera.position.y = player.y;
  camera.position.x = player.x;
  }
  else if (gameState === "question1"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
  textSize(20)
    drawSprites();
    
    text("Score: "+ score,displayWidth - 700,displayHeight-280)
    fill("black");
    text(" "+ss,displayWidth - 502,displayHeight-275)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
   //timersound.play();
   //timersound.setVolume(0.5);
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("if a zebra has 50 stripes & a tiger has 60 stripes ", displayWidth/2-400, displayHeight-200)
   text("how many black stripes are there altogethere if ", displayWidth/2-400, displayHeight-100)
   fill("black");
   text("there are 2 tigers & 5 zebras?", displayWidth/2-400, displayHeight)
  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-150, displayHeight-290)
   
   obstacle.go.position(displayWidth/2-30, displayHeight-290)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("370")
   //console.log(num)

    if(chance.localeCompare("370") === 0){
     score = score + 5;
      gameState = "question2";
      
    }
   });

  }
  
  else if (gameState === "question2"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
    drawSprites();
    text("Score: "+ score,displayWidth - 700,displayHeight-280)
    fill("black");
    text(" : "+ss,displayWidth - 502,displayHeight-275)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("how many legs does 4 cockroach has ", displayWidth/2-300, displayHeight-150)
   text(" altogether?", displayWidth/2-300, displayHeight-100)
   //text("altogether?", displayWidth/2-300, displayHeight-50)
   fill("brown");
  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-150, displayHeight-290)
   obstacle.go.position(displayWidth/2-30, displayHeight-290)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
  // num = chance.localeCompare("24")
  // console.log(num)

    if(chance.localeCompare("24") === 0){
     score = score + 5;
      gameState = "question3";
      
    }
   });

  }

  else if (gameState === "question3"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
    drawSprites();
    text("Score: "+ score,displayWidth - 700,displayHeight-280)
    fill("black");
    text(" : "+ss,displayWidth - 502,displayHeight-275)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("A fly lays her eggs in 3 equal batches.if the", displayWidth/2-300, displayHeight-200)
   text(" fly lays 400 eggs altogether in the first two  ", displayWidth/2-300, displayHeight-100)
   text("batches ,the how many eggs did the flay lay in total?", displayWidth/2-400, displayHeight-10)
   fill("brown");


  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-150, displayHeight-280)
   obstacle.go.position(displayWidth/2-30, displayHeight-280)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("giraffe")
   
    if(chance.localeCompare("600") === 0){
     score = score + 5;
      gameState = "wow";
      
    }
   });

  }
 else if (gameState === "wow") {  
   
  timer.visible = false;
 parachute.visible = false;
 textbox.visible = false;
 key.visible = true;

  image(jungle1img,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
 
  //player = createSprite(displayWidth-1300,displayHeight-50,20,60)
 // player.x = displayWidth-1400
  player.y = displayHeight/2+780

  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
 obstacle.ob.visible = false;

drawSprites();
  
camera.position.y = player.y;
camera.position.x = player.x;

  if(keyDown("right")){
    player.x=5+player.x
    }

   

  if(player.isTouching(key)){
   // player.collide(key);
    //key.destroy();
    gameState = "next";
    
   
  }
  
  drawSprites();
 }
else if (gameState === "next"){
 
  textSize(30);
  fill("black");
 
  player.x = displayWidth-1900
  
 teacher.visible = true;
 image(jungle1img,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)

  next = createSprite(displayWidth-1050,displayHeight/2+950, 120,50);
  next.shapeColor = "green";
  
 // next.debug = true;
  if(mousePressedOver(next)){
    //teacher.visible = false;
    //next.visible = false;
    gameState = "level2";
    
  }
  drawSprites();
  text("NEXT",displayWidth-1090,displayHeight/2+965)
  textSize(40)
  text("Congratulations! Maths Level 1 complete!", displayWidth-1100,displayHeight/2+500)
}

  else if ( gameState === "level2"){
   
   // 1. image
   // 2. player moving
   //3. obstacle 
  
   drawSprites();

 image(jungleimg,-displayWidth/2,displayHeight/2-100,displayWidth*1.5,displayHeight*1.5)
 obstacle.ob.visible = true;

 //teacher.y = displayHeight-90
 teacher.visible = false;
 next.visible = false;
 timer.visible = false;
 key.visible = false;

   // player.x = displayWidth-2000;
    player.y = displayHeight/2+780;
    
    
    obstacle.ob.x  = displayWidth-470;
    obstacle.ob.y = displayHeight/2+780;

    if(keyDown("right")){
      player.x=5+player.x
      } 

      camera.position.y = player.y;
      camera.position.x = player.x;
     
    drawSprites();

 
   
 //if(player.isTouching(obstacle.ob)){
  // gameState = "question"
 //}
 
 /* question.x = displayWidth/2
 question.addImage(queImg);
//player.changeAnimation('walking',playerthinkingimg);
player.x =displayWidth/2-600;
question.scale = 1.8; 
textSize(50)
text("which is the heaviest ", displayWidth/2-300, displayHeight-200)
text("animal on land ", displayWidth/2-300, displayHeight-100)
fill("black");
text("Answer",displayWidth/2-200, displayHeight+50)
obstacle.ans.position(displayWidth/2-300, displayHeight-180)
obstacle.go.position(displayWidth/2, displayHeight-180)
 chance = obstacle.ans.value();
 //console.log(chance);
//obstacle.goButton();

//ans.position(displayWidth/2-300, displayHeight-18)

obstacle.go.mousePressed(() => {
 console.log(chance);
 chance.toLowerCase();
chance= chance+"";
num =chance.localeCompare("elephant")
console.log(num)


if(chance.localeCompare("false") === 0){
  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
  obstacle.ob.addImage(giraffeimg);
  obstacle.ob.scale = 0.5;
 // console.log("great!!")
  gameState = "level2";
  
} */


  }
}