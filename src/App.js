import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3 {
    font-family: 'Righteous', cursive;
  }
  // body {
  //   color: ${props => (props.whiteColor ? 'white' : 'black')};
  // }
`;

function App() {
  return (
    <>
      <h1>FitFam Meal Prep</h1>
      <GlobalStyle />
      <div>Hello FitFam Meal Prep</div>
    </>
  );
}

export default App;
