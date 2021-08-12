import React from 'react';
import styled from "styled-components";

import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import Content from "./Content";
import Story from "./Story";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right, 
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(http://image.chosun.com/sitedata/image/201801/11/2018011101776_0.jpg);
  background-size: cover;
`;

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

const About = ( { history } ) => {
    
    
    return (
        <div>
            <Container>
            <h3> <WhiteTextTypography>About Page</WhiteTextTypography> </h3>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        
            
            <Content></Content>
            </Container> 
            
            
            <Story></Story>
            
        </div>
        
    );
   
    
}

export default About;

// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF"
//   }
// })(Typography);

// export default function App() {
//   return (
//     <div className="App" style={{ backgroundColor: "black" }}>
//       <WhiteTextTypography variant="h3">
//         This is about page
//       </WhiteTextTypography>
//     </div>
//   );
// }