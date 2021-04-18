var Gamestate = 0;
var ready;
var start
var intro
var me, your, you;
var T_Rexium,T_pic1
var Donny
var Jules,Jules_pic, jusle
var Peely, Peely_pic
var Captain_Lootbeard
var station,stat
var trash,garbage
var mine
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
var T_Pose
var peels, banana
var b1,b1p,b2,b2p, b3, b3p
var bk1, bk2,bk3, q1, q2, q3, q4, q5, q6
var boom, ya
var stargazing, stressed
function preload(){
  start=loadImage("images/start.png")
T_pic1=loadImage("images/T-R3ximus Prime.png")
Jules_pic=loadImage("images/test drawing (2).png")
your=loadImage("images/you.png")
stat=loadImage("images/station.png")
intro=loadImage("images/bg.png");
garbage=loadImage("images/trash.png")
mine=loadImage("images/me_walk.png")
T_Pose=loadImage("images/T-walk.png")
banana=loadImage("images/agent peely.png")
peely=loadImage("images/peely.png")
jusle=loadImage("images/jules.png")
b1p=loadImage("images/place1.png")
b2p=loadImage("images/place1.png")
b3p=loadImage("images/place1.png")
bk1=loadImage("images/test drawing (5).png")
bk2=loadImage("images/test drawing (6).png")
bk3=loadImage("images/test drawing (7).png")
ya=loadImage("images/ya.png")
stargazing=loadSound("Stargazing.mp3")
stressed=loadSound("stressed out.mp3")
}
function setup() {
  createCanvas(2000,800);
ready = createSprite(1200,500,350,100)
ready.addImage(start);
ready.scale=0.5;
T_Rexium = createSprite(150,200,60,30)
T_Rexium.addImage(T_pic1);
T_Rexium.scale=0.5;
Jules = createSprite(450,200,60,30)
Jules.addImage(Jules_pic);
Jules.scale=0.5;
station=createSprite(750,530,60,30);
station.addImage(stat);
station.scale=0.5;
me=createSprite(750,590,60,30)
me.addImage(your);
me.scale=0.3;
trash=createSprite(50,650,60,30)
trash.addImage(garbage);
trash.scale=0.33;
peels=createSprite(950,500,50,50);
peels.addImage(banana);
peels.scale=1;
boom=createSprite(500,670,20,20)
boom.addImage(ya)
boom.scale=0.5;
q1=createSprite(900,380,50,50);
q1.addImage(bk3)
q1.scale=0.9
q4=createSprite(1250,750,50,50);
q4.addImage(bk3)
q4.scale=0.9
q3=createSprite(1250,750,50,50);
q3.addImage(bk1)
q3.scale=0.9
q2=createSprite(450,-350,50,50);
q2.addImage(bk2)
q2.scale=0.9
a = createSprite(0,100,60,400);
a.shapeColor="#966f33"
b = createSprite(-200,100,60,400)
b.shapeColor="#966f33"
c = createSprite(0,-400,60,400)
c.shapeColor="#966f33"
d = createSprite(-200,-400,60,400)
d.shapeColor="#966f33"
e = createSprite(200,-230,400,60)
e.shapeColor="#966f33"
f = createSprite(200,-70,400,60)
f.shapeColor="#966f33"
g = createSprite(0,400,60,600)
g.shapeColor="#966f33"
h = createSprite(-200,400,60,600)
h.shapeColor="#966f33"
i = createSprite(400,-230,200,60)
i.shapeColor="#966f33"
j = createSprite(600,-70,600,60)
j.shapeColor="#966f33"
k = createSprite(1100,-5,60,300)
k.shapeColor="#966f33"
l = createSprite(870,-30,60,120)
l.shapeColor="#966f33"
m = createSprite(800,20,200,60)
m.shapeColor="#966f33"
n = createSprite(720,80,60,100)
n.shapeColor="#966f33"
you=createSprite(-80,200,40,40)
you.addImage(mine)
you.scale=0.5
}

function draw() {
  background(intro);  
 if(Gamestate===0){
   textSize(100);
   fill("#3EA99F")
   strokeWeight(2)
   stroke("6698FF")
   textFont("Roman")
   text("Time out", 1000, 100);
   ready.visible=true;
   T_Rexium.visible=true;
   me.visible=true;
   station.visible=true;
   trash.visible=true;
   Jules.visible=true;
   peels.visible=true;
   boom.visible=true;   
   you.visible=false;
   q1.visible=false;
   q3.visible=false; 
   q2.visible=false;
   q4.visible=false;
   if(mousePressedOver(Jules)){
    me.addImage(Jules_pic);
    me.scale=0.5;
    you.addImage(jusle)
     you.scale=0.7;
   }
   if(mousePressedOver(T_Rexium)){
    me.addImage(T_pic1);
    me.scale=0.5;
    you.addImage(T_Pose)
    you.scale=0.5
   }
   if(mousePressedOver(trash)){
    me.addImage(your);
    me.scale=0.3;
    you.addImage(mine)
     you.scale=0.1;
   }
   if(mousePressedOver(peels)){
    me.addImage(banana)
    me.scale=1
     you.addImage(peely)
     you.scale=0.7;
   }
   if(mousePressedOver(ready)){
     Gamestate=1;
   }
  if(mousePressedOver(boom)){
   stargazing.play()
  }
 }
 if(Gamestate===1){
   background("#566D7E")
   ready.visible=false;
   T_Rexium.visible=false;
   me.visible=false;
   station.visible=false;
   trash.visible=false;
   Jules.visible=false;
   peels.visible=false;
   boom.visible=false;   
   you.visible=true;
   q1.visible=true;
   q3.visible=true;  
   q2.visible=true;   
   q4.visible=true; 

camera.x=you.x;
camera.y=you.y;
   if(keyDown(UP_ARROW)) {
    you.y = you.y- 2;
  //  you.rotation = 270;
 }
 if(keyDown(DOWN_ARROW)) {
  you.y =  you.y+2;
 // you.rotation = -270;
 }
 if(keyDown(LEFT_ARROW)) {
  you.x =  you.x- 2;
  //you.rotation = 180;
 }
 if(keyDown(RIGHT_ARROW)) {
  you.x =  you.x + 2;
  //you.rotation = 360;
 }
}
  drawSprites();
}