import React from 'react';
import TaeKwon01 from '../component/TaeKwon01';

const Tae = ({ history }) => {
    return (
      <>
        <div>
          <h3> 태권도 페이지입니다. </h3>
          <button onClick={() => { history.goBack() }}> 뒤로 버튼 </button>
        </div>
        <div className="App">
          <header className="App-header">
            <TaeKwon01 />
            {/* <TaeKwom02 /> */}
            {/* <TaeKwon03 /> */}
          </header>
        </div>
      </>
    );
  } 

export default Tae;