import { Carousel } from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import banner1 from "../images/banner1.png"
import banner2 from "../images/banner2.png"
import banner3 from "../images/banner3.png"
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"
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

export default function HomePage() {

 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(()=>{
      Aos.init({duration: 2000})
    },[]);

    const navigate = useNavigate()

    const goToListTripsPage = () => {
      navigate('/trips/list')
    }


  return (
<div>
    <header> <Menu/></header>
      <main>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

         
          <section className="jumbotron text-center mt-5 mb-5 pt-5 pb-5">
        <div className="container mt-5 mb-5">
          <h1 className="jumbotron-heading" data-aos="fade-up">
            Viaje Conosco</h1>
          <p className="lead text-muted" data-aos="fade-up">
            As melhores viagens do universo é aqui. <br></br>
        Saia da sua bolha terráquea e desvende outros mundos.</p>
        <Button onClick={goToListTripsPage}
         className="btn btn-lg my-2 mt-5" data-aos="fade-up">Encontre o Pacote Ideal para Você</Button>
        </div>

        <div className="container">

        <h1 className="jumbotron-heading pt-5 pb-5" data-aos="fade-up" >Nossos Destinos</h1>
  <div className="row " data-aos="fade-up">

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3 shadow ">
      <img src="https://services.meteored.com/img/article/lua-de-jupiter-e-o-melhor-lugar-para-procurar-vida-fora-da-terra-339991-3_1280.jpg"
      className="img-fluid card-img-top"  style={{ height:"300px"}} />
       <div className="card-img-overlay">
      <h4 className="card-title text-light border">Europa</h4> </div>
    </div> </div>
    

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3  shadow" >
   <img src="https://www.hypeness.com.br/1/2018/04/Ven1.jpg"
className="img-fluid card-img-top"  style={{ height:"300px"}}/>
 <div className="card-img-overlay">
  <h4 className=" card-title text-light border">Vênus</h4> </div>
  </div>
</div>

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3  shadow" >
    <img src="https://olhardigital.com.br/wp-content/uploads/2019/08/20190823060412.jpg"
  className="img-fluid card-img-top" style={{ height:"300px"}}/>
   <div className="card-img-overlay">
      <h4 className="card-title text-light border">Marte</h4> </div>
    </div>  </div>


 <div className="col-sm-6 " data-aos="fade-up">
 <div className="card m-3 shadow" >
 <img src="https://socientifica.com.br/wp-content/uploads/2021/11/lua-tem-oxigenio.jpg"
 className="img-fluid fluid-card-img-top" style={{ height:"300px"}} />
  <div className="card-img-overlay">
   <h4 className="card-title text-light border">Lua</h4> </div>
 </div>
  </div> </div>

</div> 
      </section>


      <section className="Premium">


    <div className="container">

    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="jumbotron-heading text-center" data-aos="fade-up">Seja Premiun</h1>
    <p className="lead text-muted" data-aos="fade-up">Tenha um pacote que oferece 
    muitos serviços em viagens espaciais. <br></br> Com hotel e alimentação incluso. 
    <br></br>Escolha a opção que melhor se encaixa no seu bolso.</p>

    <img src="https://assets.catho.com.br/mkt_ads_app/images/banners/rocket.png" data-aos="fade-up" className="d-inline-block align-top pr-1" alt=""/>
  </div>

  <div className="row">

  <div className="col-sm" data-aos="fade-up">
      <div className="card-deck mb-3 text-center shadow">
        <div className="card mb-4 shadow-sm">
          <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
            <h4 className="my-0 font-weight-normal ">Solo</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15.2480 <small 
            className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>3 viagens por ano para uma pessoa</li>
              <li>30 diárias em hóteis</li>
              <li>Internet do sistema solar</li>
              <li>Água, alimento e roupa incluso</li>
              <li>Acesso ao centro de ajuda</li>
            </ul>
            <Button type="button"
             className="btn btn-lg btn-block " >
               Cadastre-se</Button>
          </div>
        </div>
        </div> 
        </div>

        <div className="col-sm" data-aos="fade-up">
    <div className="card-deck mb-3 text-center shadow">
      <div className="card mb-4 shadow-sm">
        <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
          <h4 className="my-0 font-weight-normal ">Duo</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$25.2480 <small 
          className="text-muted">/ mês</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>3 viagens por ano para 2 pessoas</li>
            <li>30 diárias em hóteis</li>
            <li>Internet do sistema solar</li>
            <li>Água, alimento e roupa incluso</li>
            <li>Acesso ao centro de ajuda</li>
          </ul>
          <Button type="button"
           className="btn btn-lg btn-block" 
           >
             Cadastre-se</Button>
        </div>
      </div>
      </div> 
      </div>

      <div className="col-sm" data-aos="fade-up">
    <div className="card-deck mb-3 text-center shadow">
      <div className="card mb-4 shadow-sm">
        <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
          <h4 className="my-0 font-weight-normal ">Família</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$50.2480 <small 
          className="text-muted">/ mês</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>3 viagens por ano para 5 pessoas</li>
            <li>30 diárias em hóteis</li>
            <li>Internet do sistema solar</li>
            <li>Água, alimento e roupa incluso</li>
            <li>Acesso ao centro de ajuda</li>
          </ul>
          <Button type="button"
           className="btn btn-lg btn-block" 
           >
             Cadastre-se</Button>
        </div>
      </div>
      </div> 
      </div>



  
        </div>
      </div>
      </section>
  

  <section className="comentarios container mt-5 pt-5 ">

  <h1 className="jumbotron-heading text-center" data-aos="fade-up">Nossos Clientes</h1>

  <div className="media border p-3 mt-5 shadow" data-aos="fade-up">

  <img src="https://i.pinimg.com/236x/c2/b3/45/c2b345a8d9169d2c17b5ec092e2432b6.jpg" alt="Michael Souza" 
  className="mr-3 mt-3 rounded-circle" height="60px" style={{width:"60px"}} />
  <div className="media-body">
    <h4>Michael Souza<small><i> 19, Outubro de 2021</i></small></h4>
    <p>Viajar com a labeX foi de longe a melhor experiência da minha vida, 
      já havia visitado 15 países, mas nenhuma experiência se comparou com a 
      viagem a vênus. Com certeza irei mais vezes.
    </p>
  </div>
  </div>

  <div className="media border p-3 mt-5 shadow" data-aos="fade-up">

<img src="https://i.pinimg.com/736x/c1/f3/31/c1f3317f44a0d83c43e769892e4d3473.jpg" alt="Carla Lisboa" 
className="mr-3 mt-3 rounded-circle" height="60px" style={{width:"60px"}} />
<div className="media-body">
  <h4>Carla Lisboa<small><i> 05, Novembro de 2021</i></small></h4>
  <p> Eu sou agente de relacionamento espacial e vou no mínimo 5 vezes por ano
     a algum planeta do sistema solar. Sempre escolho a labeX para essas viagens 
     pois eles cuidam de tudo para mim.
  </p>
</div>
</div>

<div className="media border p-3 mt-5 shadow mb-5" data-aos="fade-up">

<img src="https://s.conjur.com.br/img/b/diogo-santana3.jpeg" alt="Carla Lisboa" 
className="mr-3 mt-3 rounded-circle" height="60px" style={{width:"60px"}} />
<div className="media-body">
  <h4>Emanuel Gonçalves<small><i> 20, Janeiro de 2022</i></small></h4>
  <p> As viagens espaciais em família é sempre na labeX, por isso fiz questão de aderir ao plano família. O suporte é excelente, o que torna uma viagem segura para minha filha de 10 anos e meu cachorro Tob.
  </p>
</div>
</div>



  </section>

<section className=" mt-5 pt-5 mb-5 pb-5">
  <div className="container-sm shadow rounded d-md-flex flex-row justify-content-around align-items-center" 
  style={{backgroundColor: "#ddc4f6"}}
  data-aos="fade-up">
 <div> 
   <p className="text-center"><img src="https://cdn-icons.flaticon.com/png/512/5829/premium/5829821.png?token=exp=1648666058~hmac=d8caad535191a2b3077dfa35c602f6fc"
   className="img-fluid" style={{height:"200px"}} /> </p>
 </div>
 <div >
  <h1 className="jumbotron-heading text-center pt-3 m-3">Central de Ajuda Espacial</h1>
  <p className="lead text-muted text-center"> Nossos atendentes estão preparados <br></br>
   para te atender com gentileza <br></br>
   e de forma humanizada.</p>
   <p className="text-center"><Button type="button"
    className="btn btn-lg btn-block  m-3" 
    >
      Acesse Agora</Button></p>
  </div>

  <div> 
  <p className="text-center">
    <img src="https://cdn-icons.flaticon.com/png/512/2448/premium/2448650.png?token=exp=1648666522~hmac=d2c051986e8630128a626d279200635d"
   className="img-fluid" style={{height:"200px"}} /></p> 
 </div>


  </div>
</section>
      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>
    );
  }


 
  