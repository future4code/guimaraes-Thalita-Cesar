import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import logo from "../images/logo.png"
import Menu from '../components/Menu'
import Footer from'../components/Footer'


const Button = styled.button`
border-radius:50px;
background-color: #310062;
color: white;
&:hover{
  background-color: #ddc4f6;
  box-shadow: 0 0 1em #310062;
  color: #310062;
}

`

const Nav = styled.div `
    background-color: #ddc4f6;
`

function AplicationFormPage() {

  const navigate = useNavigate()


   const goBack = () => {
     navigate(-1)
   }

    return (
<div>
    <header> <Menu/></header>
      <main>
<div>

      <div className="container">

       <div className="row mt-5 pt-5">

       <Nav  className="col-sm-4 shadow  p-5">
       <h3 className="jumbotron-heading  mt-3 mb-3">
         Faça sua Inscrição</h3>
       <p className=" mt-4 mb-5 pb-5">
         Responda o fomulário de inscrição. 
         Ao enviar sua candidatura ficará em análise,
          pelo prazo de 3 dias receberá resposta.
         </p>
         <img className ="img-fluid "src={logo} />
      </Nav>

  

            <form className="col-sm-8 shadow p-5 bg-dark">
  <div class="form-group p-3">
    <select class="form-control" id="exampleFormControlSelect1">
      <option disabled>Destino</option>
      <option>Europa - Júpiter</option>
      <option>Vênus</option>
      <option>Marte</option>
      <option>Lua</option>
    </select>
  </div>

  <div class="form-group p-3">
   <input type="name" class="form-control" placeholder="Nome"/>
  </div>

  <div class="form-group p-3">
 <input type="number" class="form-control" placeholder="Idade"/>
</div>
  <div class="form-group p-3">
    <textarea class="form-control" rows="3" placeholder="Carta de
     Candidatura"></textarea>
  </div>

  <div class="form-group p-3">
   <input type="text" class="form-control" placeholder="Profissão"/>
  </div>

  <div class="form-group p-3">
    <select class="form-control" id="exampleFormControlSelect1">
      <option disabled>País</option>
      <option>Europa - Júpiter</option>
      <option>Vênus</option>
      <option>Marte</option>
      <option>Lua</option>
    </select>
  </div>
  </form>
   
      </div>
      </div>
  


          <p className="text-center mb-5 mt-2 pb-5"> <div 
          class="btn-group" 
    role="group">
         <Button  type="submit"
         className="btn btn-lg my-2 mt-5 border-left"
         >Enviar</Button>
         <Button onClick={goBack}
         className="btn btn-lg my-2 mt-5"
         >Voltar</Button>
          </div> </p>
     
      </div>
      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>
    );
  }
  
  export default AplicationFormPage;