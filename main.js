
noseX=0;
noseY=0;
differance=0;
leftWristX=0;
rightWristX=0;
function setup() {
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is Inixialised ,Model Loaded!");
}

function draw() {
    background('cyan');
    fill('#FFD333');
    stroke('#87FF33');
    square(noseX,noseY,differance);
    document.getElementById("square_size").innerHTML = "Width And Height Of A Square Will Be= " + differance + "px";
}

function gotPoses(results) {
if(results.lenght>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose X= " + noseX + "Nose Y= " + noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    differance=floor(leftWristX - rightWristX);
    console.log("Left Wrist X= " + leftWristX + "Right Wrist X= " + rightWristX + "Difference= " + differance);
}

}

