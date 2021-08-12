import React, { useState, useEffect, useRef } from 'react';
import Button from '../component/Button';

const Squat = ({ history }) => {
  return (
    <>
      <div>
        <h3> 스쿼트 페이지입니다. </h3>
        <button onClick={() => { history.goBack() }}> 뒤로 버튼 </button>
      </div>
      <div className="App">
        <header className="App-header">
          <Button />
        </header>
      </div>
    </>
  );
}
export default Squat;