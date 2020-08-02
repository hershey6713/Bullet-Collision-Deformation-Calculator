var wall, thickness;
var bullet, speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX = speed;

  thickness=random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);

  if (hasCollided(bullet, wall)) {
    
    bullet.velocityX=0;
    deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if (deformation>10) {
      wall.shapeColor=color(255,0,0);
    } else if (deformation<=10) {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}