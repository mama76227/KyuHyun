import React from "react";
import * as tmPose from '@teachablemachine/pose';

const URL = "https://teachablemachine.withgoogle.com/models/azqsp2tS5/";
let model, webcam, ctx, labelContainer, maxPredictions, cnt, std;

let load;

let count= 0;
let stand = "Stand";

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


    cnt = document.getElementById("cnt");
    cnt.appendChild(document.createElement("div"));
    std = document.getElementById("std");
    std.appendChild(document.createElement("div"));
    load = document.getElementById("load");
    load.innerHTML = "";
}

async function stop() {
    webcam.stop();
}

async function loop(timestamp) {

    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
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
        if(prediction[i].className ==="Standby" && prediction[i].probability > 0.9){
            if(stand === "Push Up"){
                stand = "Stand";
                count++;
            }
        }
        if(prediction[i].className ==="Push Up" && prediction[i].probability > 0.9){
            stand = "Push Up";
        }
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
    cnt.childNodes[0].innerHTML = "count : " + count;
    std.childNodes[0].innerHTML = stand;
    // finally draw the poses
    drawPose(pose);
}

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // draw font
        ctx.fillText('Count : ' + count, 10, 50);
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

                <div style={{fontSize : 50}} id="load">Loading...</div>
                <div><canvas id="canvas" /></div>
                <div style={{fontSize : 50}} id="label-container" />
                <div style={{fontSize : 50}} id="std"></div>
                <div style={{fontSize : 50}} id="cnt"></div>
            </div>
        );
    }
  };


export default Button;