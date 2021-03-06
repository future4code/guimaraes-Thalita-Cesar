import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://secure.gravatar.com/avatar/8d3b170ef9eb1d2f7b9b504f2b435785/?s=120&d" 
          nome="Thalita" 
          descricao="Oi, eu sou a Thalita. Sou aluna do curso de desenvolvimento web full stack Labenu, estou aqui em busca de uma oportunidade no mercado de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <div className="page-selection-container">
      <CardPequeno
      
      imagem="https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/32/email-icon.png"
      email="thalita.walleska@gmail.com"
    
      imagem="https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/32/map-icon.png"
      endereco="Rua Aldeia da Mata, 2345, Mato Grosso"
      />
      </div>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://play-lh.googleusercontent.com/-HNOwAPskh0OmsrEVYi_rSCUSDhhDh29WEb4dR0XIJLq-C6J4iLRKN0MMupMRN4QGg" 
          nome="Telefonica" 
          descricao="Analista" 
        />
        
        <CardGrande 
          imagem="https://www.netbrasilia.net/wp-content/uploads/2018/09/icon-net-brasilia.png" 
          nome="NET" 
          descricao="Atendimento ao Cliente." 
        />
      </ PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
