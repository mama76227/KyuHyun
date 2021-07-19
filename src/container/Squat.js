import React, { useState,useEffect, useRef } from 'react';
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import * as Pose from "@mediapipe/pose";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

import * as tmPose from '@teachablemachine/pose';
import Button from '../component/Button';

const Squat = ( { history } ) => {

  
  // const webcamRef = useRef(null);
  // const canvasRef = useRef(null);
  // const [text, setText] = useState("loading");
  // var camera = null;

  // const[angle, setAngle] = useState(0);
  // const[count, setCount] = useState(0);
  // const[stand, setStand] = useState("up");
 
  // function Angle(a,b,c){
  //   var radians = 
  //   (Math.atan2(c[1] - b[1], c[0] - b[0])) - 
  //   (Math.atan2(a[1] - b[1], a[0] - b[0]));

  //   var angle = Math.abs((radians * 180.0) / Math.PI);
    
  //   if(angle > 180.0) angle = 360 - angle;
    
  //   setAngle(angle);
    
  //   if(angle > 160){
  //     console.log("UP");
  //     setStand ("up");
  //     setCount(count + 1);
  //   }
  
  //   if(angle < 80 ){
  //     console.log("DOWN");
  //     setStand("down");
  //   }

    
  // }
  // //html에 스크립트 태그안의 src 연결
  // //const connect = window.drawConnectors;
  // // 에러 확인
  // const [err, setErr] = useState(null);
  // function onResults(results){
  //   canvasRef.current.width = webcamRef.current.video.videoWidth;
  //   canvasRef.current.height = webcamRef.current.video.videoHeight;

  //   const canvasElement = canvasRef.current;
  //   const canvasCtx = canvasElement.getContext("2d");
  //   canvasCtx.save();

  //   canvasCtx.drawImage(
  //     results.image,
  //     0,
  //     0,
  //     canvasElement.width,
  //     canvasElement.height
  //   );
  //   if(results.poseLandmarks !== undefined){
  //       drawConnectors(canvasCtx, results.poseLandmarks, Pose.POSE_CONNECTIONS);
  //       drawLandmarks(
  //       canvasCtx,
  //       Object.values(Pose.POSE_LANDMARKS_LEFT).map(
  //        (index) => results.poseLandmarks[index]
  //           ),
  //           { visibilityMin: 0.55, color: "green", fillColor:"red"}); 
  //       drawLandmarks(
  //       canvasCtx,
  //       Object.values(Pose.POSE_LANDMARKS_RIGHT).map(
  //         (index) => results.poseLandmarks[index]
  //           ),
  //           { visibilityMin: 0.55, color: "green", fillColor:"red"}); 
  //       drawLandmarks(
  //       canvasCtx,
  //       Object.values(Pose.POSE_LANDMARKS_NEUTRAL).map(
  //         (index) => results.poseLandmarks[index]
  //           ),
  //           { visibilityMin: 0.55, color: "green", fillColor:"red"});
            
  //       const hip = [results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_HIP].x,results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_HIP].y];
  //       const knee = [results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_KNEE].x,results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_KNEE].y];
  //       const ankle = [results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_ANKLE].x,results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_ANKLE].y];
  //       if(results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_HIP].visibility >= 0.7 
  //         && results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_KNEE].visibility >= 0.7 
  //         && results.poseLandmarks[Pose.POSE_LANDMARKS.LEFT_ANKLE].visibility >= 0.7){
  //           Angle(hip, knee, ankle);        
  //       }
  //       canvasCtx.restore();
  //     }
  //   }
  //   useEffect(()=>{
  //       const pose = new Pose.Pose({
  //       locateFile: (file) =>{
  //           return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.2/${file}`;
  //           },
  //       });
  //       pose.setOptions({
  //           selfieMode: true,
  //           minDetectionConfidence:0.5,
  //           minTrackingConfidence:0.5,
  //       });
  //       pose.onResults(onResults);

  //       if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null){
  //           camera = new cam.Camera(webcamRef.current.video,{
  //           onFrame: async () =>{
  //                await pose.send({image: webcamRef.current.video});
  //               setText("");
  //           },
  //           width: 640,
  //           height: 480,
  //       });
  //       camera.start();
        
  //       }
  //       else{
  //           setErr("camera is not working");
  //       }
  //   });

   

    return (
      <> 
      <div>
      <h3> 스쿼트 페이지입니다. </h3>
      <button onClick= {()=> {history.goBack()}}> 뒤로 버튼 
      </button>
      </div>
      
      <div className="App">
      {/* <div>{text}</div>
      <div style={{ fontSize: 30 }}> angle : {angle}</div>
      <div style={{ fontSize: 30 }}> count : {count}</div>
      <div style={{ fontSize: 30 }}> stand : {stand}</div> */}
      <header className="App-header">
        <Button/>
        {/* <Webcam
          hidden
          ref={webcamRef}
          style={{
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        ></canvas> */}
        {/* <Webcam
          hidden
          ref={webcamRef}
          style={{
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        ></canvas> */}
      </header>
    </div>
  );

      
      </> 
    );
}
export default Squat;