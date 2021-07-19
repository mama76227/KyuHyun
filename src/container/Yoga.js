import React from 'react';
const Yoga = ({history}) => {
    return (
        <div>
            <h1>요가 채널입니다</h1>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    )
}

export default Yoga;