
import './App.css';
import PaginaMatchs from './components/PaginaMatchs'
import styled from "styled-components";

const Container = styled.div `
display:flex;
justify-content: center;
align-items: center;

`

function App() {
  return (
    <Container className='container-fluid bg-light'>
        <PaginaMatchs/>
        </Container>
  );
}

export default App;
