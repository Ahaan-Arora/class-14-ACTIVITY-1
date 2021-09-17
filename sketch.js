

var ball=
{
  x:50,
  y:30,
  colour:["blue","orange","red","black"],
  radius:50,
  speedx:0,
  speedy:0,
  

  



}









function setup() {
  createCanvas(400, 400);
  //fill(ball.colour)
}

function draw() {
  background(220);


if (frameCount %50 == 0){
switch (Math.round(random(0,3)))
{
case 0:fill(ball.colour[0]);break
case 1:fill(ball.colour[1]);break
case 2:fill(ball.colour[2]);break
case 3:fill(ball.colour[3]);break


}
}


  circle(ball.x,ball.y,ball.radius)
  ball.speedx=2
  ball.x=ball.x+ball.speedx
}




