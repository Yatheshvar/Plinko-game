const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var world,engine;

function setup() {
  createCanvas(485,800);
  engine = Engine.create();
  world = engine.world;
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  console.log(width);
  for(var j = 40;j <= width; j = j + 50){
    console.log(j);
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15;j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40;j <= width; j=j+50){
    plinkos.push(new Plinko(j,275));
}
  for(var j = 15;j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
base=new Ground(600,790,1200,20);

}

function draw() {
  background("black");
  Engine.update(engine);
 console.log(divisions);
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10),(width/2+10),10,10));
}
 for (var z = 0;z < divisions.length;z++){
   divisions[z].display();
 }
 for(var i = 0;i <plinkos.length;i++){
   plinkos[i].display();
 }
for (var i = 0;i < plinkos.length;i++){
  plinkos[i].display();
}
for (var i = 0;i < plinkos.length;i++){
  plinkos[i].display();
}
for (var i = 0;i < plinkos.length;i++){
  plinkos[i].display();
}
for (var e = 0;e < particles.length;e++){
  particles[e].display();
}
 base.display();
}


