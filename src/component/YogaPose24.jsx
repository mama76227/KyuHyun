import React from "react";
import * as tmPose from '@teachablemachine/pose';

const URL = "https://teachablemachine.withgoogle.com/models/sbc1WJU6N/"; // Yoga_24 cloud model
let model, webcam, ctx, labelContainer, maxPredictions, std, timer;

let load;

let stand = "Stand";

let yoga;
let startTime = 0;
let isCheck = false;
let seconds = 0;

const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";


async function init() {

    model = await tmPose.load(modelURL, metadataURL);

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // Note: the pose library adds a tmPose object to your window (window.tmPose)
    
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 600;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    // set font style
    ctx.font = "48px serif";

    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }

    std = document.getElementById("std");
    std.appendChild(document.createElement("div"));
    load = document.getElementById("load");
    load.innerHTML = "";
    timer = document.getElementById("timer");
    timer.appendChild(document.createElement("div"));
}

async function stop() {
    webcam.stop();
}

async function loop(timestamp) {

    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
    
    if(yoga > 0.75){
        if(isCheck === false){
            startTime = parseInt(parseInt(timestamp) / 1000);
            isCheck = true;
            // console.log("Start time : " + timestamp);
        }
        seconds = parseInt(parseInt(timestamp) / 1000) - startTime;
    }else{
        isCheck =false;
        seconds = 0;
    }

    // console.log("currnent time : " + timestamp);

}

async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);

        if(prediction[i].className ==="Yoga_24"){
            yoga = parseFloat(prediction[i].probability);
        }
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
    std.childNodes[0].innerHTML = stand;
    timer.childNodes[0].innerHTML = "time : " + seconds;
    // finally draw the poses
    drawPose(pose);
}

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // draw font
        ctx.fillText('Seconds : ' + seconds, 10, 50);
        // draw the keypoints and skeleton
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}



class Button extends React.Component{
    

    componentDidMount(){
        init();
    }

    render() {
        return (
            <div>
                <button type='button' onClick={init}>start</button>
                <button type='button' onClick={stop}>stop</button>

                <div style={{ fontSize: 50 }} id="load">Loading...</div>
                <div><canvas id="canvas" /></div>
                <div style={{ fontSize: 50 }} id="label-container" />
                <div style={{ fontSize: 50 }} id="std"></div>
                <div style={{ fontSize: 50 }} id="timer"></div>
            </div>
        );
    }
  };


export default Button;