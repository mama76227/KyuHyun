import React from 'react';
import Pushup from '../component/PushUp';

const push_up = ({ history }) => {
    return (
      <>
        <div>
          <h3> 팔굽혀펴기 페이지입니다. </h3>
          <button onClick={() => { history.goBack() }}> 뒤로 버튼 </button>
        </div>
        <div className="App">
          <header className="App-header">
            <Pushup />
          </header>
        </div>
      </>
    );
  }


export default push_up;