import '../App.css'
import styled from "styled-components";
import {MdArrowBackIosNew} from 'react-icons/md';
import Astromatch from '../midias/Astromatch.png'


const Card = styled.div`

    width: 22rem;

    @media(max-width: 400px) {
   width: 22rem;
 },
`

const Img = styled.img `
  width: 60px;
`

function ListaMatchs() {
    return (
      <Card className="card bg-light mb-5 border-0">
      <div className="card-header bg-light p-1"> 
      <button className=" btn btn-outline-warning btn-lg ">
    <a href="#" >
       <MdArrowBackIosNew className="text-info" /> 
       </a>
   </button> 

      <img src= {Astromatch} style={{width: "15rem"}}
      /> 
      </div>
      <div className="card-body align-items-center">
          <Img src="http://freezonemz.com.br/wp-content/uploads/2021/09/agostinhocarrara.jpg"
          className="card-img img-fluid rounded-circle"/>
          <span className="card-title text-dark p-4">João</span>
      </div>
        <div className="card-footer bg-light">
            <button className="btn btn-outline-warning btn-md btn-block">
              Limpar Matchs
            </button>
        </div>
    </Card>
    
    );
  }
  
    
  
  export default ListaMatchs;