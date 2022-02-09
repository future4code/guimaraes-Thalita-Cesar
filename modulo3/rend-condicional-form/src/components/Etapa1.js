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


class Etapa1 extends React.Component {
    render() {
      
      return (
        <ContainerPrincipal>
          <h3>ETAPA 1 - DADOS GERAIS</h3>
          <hr/>

          <form>

          <div className="formGroup">
          <label>
            <p>1. Qual seu nome?</p>
            <input type ="text"
             name="name" 
            //onChange = {e=> setInput({name: e.target.value})}
            label="Name"
            />
            </label>
            </div>

          
            <div className="formGroup">
            <label>
            <p>2. Qual sua idade?</p>
            <input type="number" 
            name="idade" 
            //onChange = {e=> setInput({idade: e.target.value})}
            label="Idade"
            />
            </label>
            </div>

            <div className="formGroup">
            <label>
            <p>3. Qual seu Email?</p>
            <input type ="text" name="email" 
            //onChange = {e=> setInput({email: e.target.value})}
            label="Name"
            />
            </label>
            </div>

            <div className="formGroup">
              <label>
                <p>4. Qual sua escolaridade?</p>
            <select>
              <option value="Ensino médio incompleto">Ensino médio incompleto</option>
              <option value="Ensino médio completo">Ensino médio completo</option>
              <option value="Ensino superior incompleto">Ensino superior incompleto</option>
              <option value="Ensino superior completo">Ensino superior completo</option>
              </select>
              </label>
            </div>
            <br></br>
          
    
          </form>
          </ContainerPrincipal>
      );
    }
  }
  
  export default Etapa1;
  