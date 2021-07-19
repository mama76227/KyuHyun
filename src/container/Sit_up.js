import React from 'react';
const sit_up = ( { history } ) => {

    return (
        <div>
            <h3> 윗몸일으키기 페이지입니다. </h3>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    );
}
export default sit_up;