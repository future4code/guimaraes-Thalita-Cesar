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



class Etapa2 extends React.Component {
    render() {
      
      return (
        <ContainerPrincipal>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
          <hr/>

          <form>

          <div className="formGroup">
          <label>
            <p>5. Qual curso?</p>
            <input type ="text"
             name="curso" 
            label="curso"
            />
            </label>
            </div>
          
            <div className="formGroup">
            <label>
            <p>6. Qual a unidade de ensino?</p>
            <input type="text" 
            name="uEnsino" 
            //onChange = {e=> setInput({idade: e.target.value})}
            label="Unidade de Ensino"
            />
            </label>
            </div>

            <br></br>
          
    
          </form>
        </ContainerPrincipal>
      );
    }
  }
  
  export default Etapa2;
  