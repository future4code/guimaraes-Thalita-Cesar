import '../App.css'
import styled from "styled-components";
import { AiFillLike } from 'react-icons/ai';
import {AiFillDislike} from 'react-icons/ai';
import {BsFillChatRightFill} from 'react-icons/bs';
import Astromatch from '../midias/Astromatch.png'

const BotaoMatch = styled.button `
  border-radius:50px;
  width: 80px;
  height:80px;

  @media(max-width: 400px) {
   width: 60px;
   height:60px;
   margin-left: 0px;
  } `

const Card = styled.div`

    width: 22rem;

    @media(max-width: 400px) {
   width: 22rem;
 },
`



function PaginaMatchs() {
    return (
    <Card className="card bg-light mb-5 border-0">
      <div className="card-header bg-light p-1"> 
      <img src= {Astromatch} style={{width: "15rem"}}
      /> 
     <button className=" btn btn-outline-warning btn-lg ">
       <a href="#" >
          <BsFillChatRightFill className="text-info" /> 
          </a>
      </button> 
      </div>
      <div className="card-body align-items-center">
          <img src="http://freezonemz.com.br/wp-content/uploads/2021/09/agostinhocarrara.jpg" 
          className="card-img-top img-fluid"/>
          <h5 className="card-title text-dark">João, 24</h5>
          <h6 className="card-text text-muted">
            Surfo, amo acampar e a brisa da natureza.</h6>
      </div>
        <div className="card-footer bg-light">
            <BotaoMatch className=" btn btn-outline-danger btn-lg"><AiFillDislike/></BotaoMatch>
            <span> </span>
            <BotaoMatch className=" btn btn-outline-success btn-lg"> <AiFillLike/> </BotaoMatch>
        </div>
    </Card>
    
    );
  }
  
  export default PaginaMatchs;