leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(400,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised and loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+results[0].pose.leftWrist.x+"leftWristY = "+results[0].pose.leftWrist.y);
    }
}

function draw(){
    background("#5196e3")
    document.getElementById("font_size").innerHTML="Font size of the text will be = "+difference+"px";
    textSize(difference);
    fill("00ff0a");
    text('Peter',50,400);
}