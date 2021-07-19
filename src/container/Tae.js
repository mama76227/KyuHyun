import React from 'react';
const Tae = ({history}) => {
    return (
        <div>
            <h1>태권도 채널입니다</h1>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    )
}

export default Tae;