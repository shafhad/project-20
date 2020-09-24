
 var car1,car2,car3,wall1,wall2,wall3;
 var speed,weight;

 function setup(){

  createCanvas(1600,400);

  car1 = createSprite(50,200,50,50);
  wall1 = createSprite(1500,200,60,height/2);

  

 }
 function draw(){

  background(0);

  car1.velocitX = speed;

  speed = random(55,90);
  weight = random(400,1500);

  if(wall1.x - car1.x  <  (car1.width + wall1.width)/2)
  {
   
     car1.velocityX = 0;
     var deformation=0.5 * weight * speed * speed/22509;
     if(deformation>180)
     {

        car1.shapeColour=colour(255,0,0);

     }
     
     if(deformation<180 && deformation > 100) 
     {
    
       car1.shapeColour=colour(230,230,0);     

     }
     if(deformation<100)
     {

       car1.shapeColour=colour(0,255,0);

    }


  }



  drawSprites();
 }
