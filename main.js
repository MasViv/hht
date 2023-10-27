function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100);
    canvas=createCanvas(550,500);
    canvas.position(900,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
background("black");
}

function modelLoaded()
{
    console.log('What is this...?')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
    }
}