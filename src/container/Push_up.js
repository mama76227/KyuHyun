import React from 'react';


const push_up = ( { history } ) => {
    return (
        <div>
            <h3> 팔굽혀 펴기 페이지입니다. </h3>
            <div>
            WEBCAM
           </div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    );
}


export default push_up;