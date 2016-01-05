
//dom
var canvas;


var snowflakes = [];



function setup(){
  

  canvas = createCanvas(windowWidth, windowHeight);

  
  noStroke();
  
  smooth(8);
  
  
  for(i = 0; i < sqrt(width*height); ++i) snowflakes.push(new Snowflake(random(width), random(height)));
  
}


function draw(){
  
  background(0);
  
  
  for(i = 0; i < snowflakes.length; ++i){
    
    snowflakes[i].draw();
    
    if(snowflakes[i].position.y >= height){
      
      snowflakes.splice(i, 1);
      snowflakes.push(new Snowflake(random(width), 0));
    
    }
    
  }
  
}


var Snowflake = function(x, y){

  this.position = createVector(x, y);

  this.size = random(1, 4);

  this.velocity = createVector(random(-0.1, 0.1), 0.5 + sqrt(this.size*2));

};


Snowflake.prototype.draw = function(){

  this.position.add(this.velocity);

  ellipse(this.position.x, this.position.y, this.size, this.size);

}


function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}