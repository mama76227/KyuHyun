import React from 'react';
const Dance = ({history}) => {
    return (
        <div>
            <h1>댄스 채널입니다</h1>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    )
}

export default Dance;  