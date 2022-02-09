import { render } from "@testing-library/react"
import React from "react"
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em; `



class Final extends React.Component {
    render() {
      
      return (
        <ContainerPrincipal>
          <h3>O FORMULÁRIO ACABOU</h3>
          <hr/>
        <h3>Muito obrigado por participar! Entraremos em contato.</h3>
        </ContainerPrincipal>
      );
    }
  }
  
  export default Final;