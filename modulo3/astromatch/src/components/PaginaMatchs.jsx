import '../App.css'
import styled from "styled-components";
import { AiFillLike } from 'react-icons/ai';
import {AiFillDislike} from 'react-icons/ai';
import {BsFillChatRightFill} from 'react-icons/bs';
import Astromatch from '../midias/Astromatch.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react';

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
   width: 18rem;
 },
`

const Img = styled.img `

  max-height: 320px;
  max-width: 20rem;
`



function PaginaMatchs(props) {

  const [matchsLista, setMatchsLista] = useState({});


    const getProfileToChoose = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/person`)
            .then((res) => setMatchsLista(res.data.profile))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
      getProfileToChoose()
   }, []);


   const onCLickDeslike =()=> {
     const body ={
       id: matchsLista.id,
       choice: false
     }

     axios
     .post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/person/choose-person`, body)
     .then ((res)=>{
       console.log(res)
       getProfileToChoose()
     })
    }

    const onCLickLike =()=> {
      const body ={
        id: matchsLista.id,
        choice: true
      }
      axios
      .post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/person/choose-person`, body)
      .then ((res)=>{
        console.log(res)
        getProfileToChoose()
      })
     }

    return (

      <div>

         {matchsLista !== null ? (

    <Card className="card bg-light mb-5 border-0">

      <div className="card-header bg-light p-1"> 

      <img src= {Astromatch} style={{width: "15rem"}}/> 

      <button 
      className=" btn btn-outline-warning btn-lg" 
      onClick={props.changePage}>
          <BsFillChatRightFill className="text-info" />
      </button> 

      </div>

      <div className="card-body align-items-center">

          <Img src={matchsLista.photo} 
          className="card-img-top img-fluid"/>

          <h5 className="card-title text-dark">
            {matchsLista.name},  
            <small className="text-muted">
              {matchsLista.age} 
              </small>
              </h5>

          <h6 className="card-text text-muted">
          {matchsLista.bio} </h6>
      </div>

        <div className="card-footer bg-light">

            <BotaoMatch 
            className=" btn btn-outline-danger mr-3 btn-lg"
            onClick={onCLickDeslike}>
              <AiFillDislike/>
              </BotaoMatch>
            <span> </span>

            <BotaoMatch 
            className=" btn btn-outline-success btn-lg" 
            onClick={onCLickLike}> 
            <AiFillLike/> 
            </BotaoMatch>
        </div>

    </Card>
  ) : (
    <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">Uau!</h4>
  <p>Você passou por todas as pessoas disponíveis e não há mais matchs. Volte mais tarde</p>
      </div>
)}
</div>
    );
  }

  
  export default PaginaMatchs;