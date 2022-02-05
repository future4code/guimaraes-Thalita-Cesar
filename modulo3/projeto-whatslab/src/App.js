import React from 'react';
import styled from 'styled-components'
import {Chat} from './components/Chat/Chat'

styled.body `
  margin: 30px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(components/3d-abstract-wave-pattern-background_53876-104422\ \(1\).webp);
  
` 
styled.p `
  font-family: 'Poppins', sans-serif;
  color: #000000;
  `


function App() {
return (
  <div>
    <Chat/>
  </div>
)
}

export default App;
