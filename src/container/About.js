import React from 'react';
const About = ( { history } ) => {

    return (
        <div>
            <h3> About Page </h3>
            <h1> 안녕 !</h1>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    );
}

export default About;
