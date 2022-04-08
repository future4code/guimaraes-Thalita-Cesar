import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"
import europa from "../images/europa.jpg"
import venus from "../images/venus.jpg"
import marte from "../images/marte.jpg"
import lua from "../images/lua.jpg"


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

const ListTripsPages = () => {

  const navigate = useNavigate()

  const goToApplicationFormPage = () => {
    navigate('/trips/application')
  }

   const goBack = () => {
     navigate(-1)
   }
   useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);
    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container mt-5 mb-5 pb-5 pt-5">
        <h1 className="jumbotron-heading text-center mb-5 pb-5"  > Nossos Destinos </h1>
      

        <div className="row">

    <div className="col-sm-6" data-aos="fade-up">
      <div className="card m-5 shadow" style={{backgroundColor: "#ddc4f6"}}>
      <div className="card-header">
      <img class="img-fluid card-img-top" 
      src={europa}/>
      </div>
    <div className="card-body">
    <h4 class="card-title text-center">Europa - Júpiter</h4>
    <div className="card-deck mb-3 text-center">
      A melhor visão do universo. É possível ver júpiter de pertinho. 
      Em europa se concentra as maiores empresas do sistema solar.
      Os maiores eventos músicais também se encontra lá. 
        <p><b>Data:</b>08/04/2022</p>
        <p><b>Duração:</b>5 dias</p>
        </div>
        </div>
      <div className="card-footer">
      <h1 className="card-title pricing-card-title text-center">$850.2480
      </h1>
      </div>
      </div>

      </div>

      <div className="col-sm-6" data-aos="fade-up">
      <div className="card m-5 shadow" style={{backgroundColor: "#ddc4f6"}}>
      <div className="card-header">
      <img class="img-fluid card-img-top" 
      src={venus}/>
      </div>
    <div className="card-body">
    <h4 class="card-title text-center">Vênus</h4>
    <div className="card-deck mb-3 text-center">
      Romantismo e arte. Vênus é o ponto preferido para viagem a dois e 
      retiros espirituais. Vênus possui lindos lagos artificiais, inúmeros
      hóteis e diversos museus de arte moderna.  
      <p><b>Data:</b>11/11/2022</p>
      <p><b>Duração:</b>15 dias</p>
        </div>
        </div>
      <div className="card-footer">
      <h1 className="card-title pricing-card-title text-center">$587.000
      </h1>
      </div>
      </div>
      </div>

      <div className="col-sm-6" data-aos="fade-up">
      <div className="card m-5 shadow" style={{backgroundColor: "#ddc4f6"}}>
      <div className="card-header">
      <img class="img-fluid card-img-top" 
      src={marte}/>
      </div>
    <div className="card-body">
    <h4 class="card-title text-center">Marte</h4>
    <div className="card-deck mb-3 text-center">
      Marte possui diversos pontos de festivais de lutas, 
      Muay Thai, Jiu Jitsu e Luta Livre. Também conta com o evento 
      das Olimpiadas Do Sistema Solar, que ocorre em setembro. 
      O planeta animado ainda tem diversos campeonatos como a corrida de naves.
      <p><b>Data:</b>07/08/2022</p>
       <p><b>Duração:</b>15 dias</p>
        </div>
        </div>
      <div className="card-footer">
      <h1 className="card-title pricing-card-title text-center">$580.000
      </h1>
      </div>
      </div>
      </div>

          <div className="col-sm-6" data-aos="fade-up">
          <div className="card m-5 shadow" style={{backgroundColor: "#ddc4f6"}}>
      <div className="card-header">
      <img class="img-fluid card-img-top" 
      src={lua}/>
      </div>
    <div className="card-body">
    <h4 class="card-title text-center">Lua</h4>
    <div className="card-deck mb-3 text-center">
      É um lugar visitado por empresários. Nos últimos anos a lua se tornou um 
      agrupado de fábricas e centros de pesquisa ciêntifica. 
      Há diversas cidades. Com a vançada tecnologia é possível tomar banho nas 
      catreras avistando a bela vista do céu estrelado.
      <p><b>Data:</b>31/12/2022</p>
      <p><b>Duração:</b>2 dias</p>
        </div>
        </div>
      <div className="card-footer">
      <h1 className="card-title pricing-card-title text-center">$60.000
      </h1>
      </div>
      </div>
      </div>
     

  
     
    </div>
    <h4 className="jumbotron-heading text-center mt-5 pt-5" data-aos="fade-up"> 
    Escolheu a melhor viagem?  </h4>
    <p className="lead text-muted text-center mt-1 pt-1" data-aos="fade-up">
      Para ser direcionado para nossa página de inscrição de viagem  <br></br>
      basta clicar em se inscrever abaixo.
</p>

     <p className="text-center mb-5 mt-2"> <div className="btn-group" 
     role="group" data-aos="fade-up">

          <Button onClick={goToApplicationFormPage}
          className="btn btn-lg my-2 mt-5 border-left"
          >Se inscreva</Button>
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
  
  export default ListTripsPages;