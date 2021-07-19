import React from 'react';

const Gnb = () => (
    <ul className="gnb">
        <li>
        <button onClick={ ()=> {history.push("/about")}}> About 버튼  </button>
            
        </li>
        <li>
        <button onClick={ ()=> {history.push("/memo")}}> Memo 버튼 </button>
        </li>
    </ul>
)

export default Gnb;