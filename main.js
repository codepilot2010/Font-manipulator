rightwristx=0;
leftwristx=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,110);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('posenet model is loaded');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("left wrist x = "+leftwristx+"right wrist x = "+rightwristx+"difference is "+difference);
    }
}
function draw()
{
    background('#0cf7ec');
    textSize(difference);
    document.getElementById("span1").innerHTML="Size of text will be = "+ difference+"px";
    fill('#fc1c03');
    text('Harshit Malhotra',200,200)
}