status = "";
objects = [];


function preload(){
   
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(480,380);
    canvas.center();
}


function draw(){
   image(video,0,0,480,380);
   if(status != " "){
     r = random(255);
     g = random(255);
     b = random(255);
     objectDetector.detect(video , gotResult);
     for(i = 0 ; i<objects.length ; i++);
     document.getElementById("status").innerHTML = "Status : objects detected";
     document.getElementById("number_of_objects").innerHTML = "Number of objects " + objects.length;
     fill(r , g ,b );
     percent = floor(objects[i].confidence * 100);
     text(objects[i].label + " " + percent + " % " + objects[i].x + 15 , objects[i].y + 15);
     noFill();
     stroke( r , g ,b);
     rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
   }

}

function start(){
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Object";
  input = document.getElementById("input").value;
  
}

function modelLoaded(){
    console.log("Model has been initialised");
    status = true;
   
}

function gotResult(error , results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects = results;

  }
}