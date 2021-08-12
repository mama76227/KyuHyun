import React from 'react';
import TaeKwon from '../component/TaeKwon';

const Tae = ({ history }) => {
    return (
      <>
        <div>
          <h3> 태권도 페이지입니다. </h3>
          <button onClick={() => { history.goBack() }}> 뒤로 버튼 </button>
        </div>
        <div className="App">
          <header className="App-header">
            <TaeKwon />
          </header>
        </div>
      </>
    );
  }

export default Tae;