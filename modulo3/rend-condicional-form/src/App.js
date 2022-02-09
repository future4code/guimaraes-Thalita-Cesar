
import './App.css';
import {useState} from 'react'
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from 'styled-components'

const ButtonEtapa = styled.button`
position: relative;
float: right;
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: white;
padding: 10px;
`

function App() {


  const [pagina, setProxPagina] = useState(1);

const  rederizarPagina = () => {
  switch(pagina){
  case 1:
  return <Etapa1/>
  case 2:
  return <Etapa2/>
  case 3:
  return <Etapa3/>
  default:
  return <Final/>
}
}


const proximaEtapa = () => {
  if(pagina>4)
  pagina =1;
  setProxPagina(pagina+1)
}

    return (
      <div>
          {rederizarPagina()}
          {pagina !== 4 && (
         <ButtonEtapa onClick={proximaEtapa}>Próxima etapa</ButtonEtapa>
         )}
      </div>
    );
  }


export default App
