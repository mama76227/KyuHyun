// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { Promise } from 'bluebird';

import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "../App.css";
import {drawRect} from "../utilities"; 

// import { openDB } from 'idb'; // npm install idb
const MODEL_PATH = '/model/model.json';
const INDEXEDDB_KEY = 'web-model';

let model;
let net;

Promise.config({ cancellation: true});

export default function Classify() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {  
    if (('indexedDB' in window)) {
      try {
        // this.model = await tf.loadLayersModel('indexeddb://' + INDEXEDDB_KEY);
        model = await tf.loadGraphModel('indexeddb://' + INDEXEDDB_KEY);
      }
      // If error here, assume that the object store doesn't exist and 
      // the model currently isn't saved in IndexedDB.
      catch (error) {
        console.log('Not found in IndexedDB. Loading and saving...');
        console.log(error);
        // this.model = await tf.loadLayersModel(MODEL_PATH);
        model = await tf.loadGraphModel(MODEL_PATH);
        await model.save('indexeddb://' + INDEXEDDB_KEY);
      }
    }
    // If no IndexedDB, then just download like normal.
    else {
      console.warn('IndexedDB not supported.');
      // this.model = await tf.loadLayersModel(MODEL_PATH);
      model = await tf.loadGraphModel(MODEL_PATH);
    }    
      
    console.count('detecting object');
    return new Promise(() => {
      setInterval(() => {
        detect(model);
      }, 1000);   // 16.7
    });
  }

  // useEffect(()=>{runCoco()},[]);

  useEffect(()=>{
    const promise = runCoco();

    return () => {
      promise.cancel();
    };
  },[]);

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      // const resized = tf.image.resizeBilinear(img, [640,480])
      const resized = tf.image.resizeBilinear(img, [videoWidth, videoHeight])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      // console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  const videoConstraints = {
    facingMode: "environment"
    // facingMode: "user"
  };

  return (
    <div className="container">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            // width: 640,
            // height: 480,
            width: "100%",
            height: "100%",
          }}
          videoConstraints={videoConstraints}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            // width: 640,
            // height: 480,
            width: "100%",
            height: "100%",
          }}
          videoConstraints={videoConstraints}
        />
      </header>
    </div>
  );
}

// export default App;
