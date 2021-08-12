import React from 'react';
import SitUp from '../component/SitUp';
const sit_up = ({ history }) => {
    return (
      <>
        <div>
          <h3> 윗몸일으키기 페이지입니다. </h3>
          <button onClick={() => { history.goBack() }}> 뒤로 버튼 </button>
        </div>
        <div className="App">
          <header className="App-header">
            <SitUp />
          </header>
        </div>
      </>
    );
  }
export default sit_up;