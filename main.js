leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,420);
    canvas.position(560,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background("#3E95AC");
    fill('#c8ea11');
    textSize(difference)
    text("Keerthivaasan",50,250,);
}
function modelLoaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if (results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("LeftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);
    }
    }