
import './App.css';
import PaginaMatchs from './components/PaginaMatchs'
import ListaMatchs from './components/ListaMatchs'
import styled from "styled-components";


const Container = styled.div `
display:flex;
justify-content: center;
align-items: center;

`

function App() { 
//  <ListaMatchs/>
  return (

  <div>
    <Container className='container-fluid bg-light'>
       <PaginaMatchs/>
    </Container>
    </div>
  );
}

export default App;
