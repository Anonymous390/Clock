function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(255);
  translate(200,200);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  var d = day();
  var mth = month();
  var yr = year();

  stroke(0);
  fill(0);
  ellipse(0,0,320);


  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  var secondAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300,0,secondAngle);

  stroke(43, 241, 255);
  var minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,280,280,0,minuteAngle);

  stroke(0,255,42);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0,0,260,260,0,hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0,0,100,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(43, 241, 255);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0,255,42);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0, 0);

}