import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
      <GlobalStyle />
      <Navbar />
      <div>Hello FitFam Meal Prep</div>
    </>
  );
}

export default App;
