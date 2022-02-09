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



class Etapa3 extends React.Component {
    render() {
      
      return (
        <ContainerPrincipal>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
          <hr/>

          <form>

          <div className="formGroup">
          <label>
            <p>7. Por que não terminou um curso de graduação</p>
            <input type ="text"
             name="curso" 
            label="curso"
            />
            </label>
            </div>
          
            <div className="formGroup">
            <label>
            <p>8. Você fez algum curso complementar?</p>
            <select>
                <option value ="Nenhum">Nenhum</option>
                <option value ="Curso Técnico">Curso Técnico</option>
                <option value ="Curso de Inglês">Curso de Inglês</option>
            </select>
          <br></br>
            </label>
            </div>

           <br></br>
          </form>
          </ContainerPrincipal>
      );
    }
  }
  
  export default Etapa3;