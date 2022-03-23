
import './App.css';
import PaginaMatchs from './components/PaginaMatchs'
import ListaMatchs from './components/ListaMatchs'
import styled from "styled-components";
import React, { useState } from 'react';


const Container = styled.div `
display:flex;
justify-content: center;
align-items: center;

`

function App() { 

  const [paginaDeListas, setPaginaDeListas] = useState(false);

  const PaginaDeListas = () => {
    setPaginaDeListas( true )
  }

  const VoltarPagina = () => {
    setPaginaDeListas( false )
  }

  let pagina = paginaDeListas ? (
    <ListaMatchs onClickVoltarPagina={VoltarPagina} />
  ) : (
    <PaginaMatchs onClickPaginaDeListas={PaginaDeListas} />
  )


  return (

  <Container className="container-fluid bg-warning">
    
     {pagina}

    </Container>
  );
}

export default App;
