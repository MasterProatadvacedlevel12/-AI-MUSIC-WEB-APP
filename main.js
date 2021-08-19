song = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("Posenet is Loaded");
}

function draw(){
    image(video,0,0,600,500);
}


function preload(){
    song = loadSound("music2.mp3");
}

function playsong(){
    song.play();
}