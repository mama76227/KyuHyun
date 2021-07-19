import React, {Component} from 'react';
import Header from "../component/Header";
import Gnb from "../component/Header";
import Footer from "../component/Footer";


const Home = ( {history} ) => {
    return (
        <div>
        <Header />
        메인 채널입니다.
        
        
        <div className="App">
            <button onClick={ ()=> {history.push("/push_up")}}> 팔굽혀펴기 </button>
            <button onClick={ ()=> {history.push("/sit_up")}}>  윗몸일으키기 </button>
            <button onClick={ ()=> {history.push("/squat")}}> 스쿼트 </button>
        </div>
        <div className="App2">
            <button onClick={ ()=> {history.push("/tae")}}> 태권도 </button>
            <button onClick={ ()=> {history.push("/yoga")}}> 요가 </button>
            <button onClick={ ()=> {history.push("/dance")}}> 댄스 </button>
        </div>
        <span><button onClick={ ()=> {history.push("/about")}}> about</button></span>
        <span><button onClick={ ()=> {history.push("/sit_up")}}>  memo</button></span>

        <Footer />
        </div>
    )
}


export default Home;