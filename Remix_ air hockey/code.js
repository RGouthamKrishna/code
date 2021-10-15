var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1 = createSprite(200,28,100,20);
var goal2 = createSprite(200,372,100,20);
var striker = createSprite(200,200,10,10);
var playermallet = createSprite(200,50,50,10);
var compmallet = createSprite(200,350,50,10);
var border1 = createSprite(200,13,400,5);
var border2 = createSprite(200,387,400,5);
var border3 = createSprite(11,200,5,400);
var border4 = createSprite(389,200,5,400);
var border5 = createSprite(200,123,400,5);
var border6 = createSprite(200,277,400,5);
var gameState = "serve";
var compScore = 0;
var playerScore = 0;


function draw() {
  background("green");
 
  
  if(keyDown("space")&& gameState === "serve"){
    serve();
    gameState = "play";
  }
  
  fill("orange");
  textSize(15);
  text(compScore,38,230);
  text(playerScore,38,184);
   
   
  createEdgeSprites(); 
  playermallet.bounceOff(border3);
  playermallet.bounceOff(border4);
  compmallet.bounceOff(border4);
  compmallet.bounceOff(border3);
  
 
  playermallet.bounceOff(goal1);
  striker.shapeColor = "orange";
  
  if (gameState === "serve") {
    fill("red");
    textSize(15);
    text("Press Space to Serve",150,180);
    compmallet.x = 200;
  }
  
  if(keyDown("left")){
    playermallet.x = playermallet.x - 10;
  }
  if(keyDown("right")){
    playermallet.x = playermallet.x+10;
  }
  if(striker.y>290){
    compmallet.x = striker.x;
    
  }

if(striker.isTouching(goal1)){
  reset();
  gameState = "serve";
  compScore = compScore + 1;
}

if(striker.isTouching(goal2)){
     playerScore = playerScore + 1;
   }
 if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
 if(striker.isTouching(goal2)){
   reset();
   gameState = "serve";
   playerScore = playerScore++;
 }
 
 if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
 
  striker.bounceOff(border4);
  striker.bounceOff(border2);
  striker.bounceOff(border3);
  striker.bounceOff(border1);
  striker.bounceOff(compmallet);
  striker.bounceOff(playermallet);
  
  
  

 for (var i = 0; i < 400; i=i+20){
    line(i, 200, i+10, 200);
  }

  
  
  goal1.shapeColor = "yellow";
  goal2.shapeColor = "yellow";
  striker.shapecolor = "white";
  playermallet.shapeColor = "black";
  compmallet.shapeColor = "black";
   
  border1.shapeColor = "white";
  border2.shapeColor = "white";
  border3.shapeColor = "white";
  border4.shapeColor = "white";
  border5.shapeColor = "white";
  border6.shapeColor = "white";
   
   
   
   
  
 
 
  drawSprites();
   
}
function serve(){
  striker.velocityX = 10;
  striker.velocityY = 12;
  
}
function reset(){
  striker.x = 200;
  striker.y = 200;
  striker.velocityY = 0;
  striker.velocityX = 0;
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
