import '../App.css'
import styled from "styled-components";
import {MdArrowBackIosNew} from 'react-icons/md';
import Astromatch from '../midias/Astromatch.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react';


const Card = styled.div`
    width: 22rem;
    height: 38rem;
    @media(max-width: 420px) {
   width: 20rem;
   height: 35rem;
 },
`

const Img = styled.img `
  width: 60px;
  height: 60px;
`

function ListaMatchs(props) {

    const [matchsLista, setMatchsLista] = useState([]);

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/matches")
        .then ((res)=>{ setMatchsLista(res.data.matches)})
        .catch((err) => {
            console.log(err)
        })
    }

  useEffect(() => {
    getMatches()
}, [matchsLista])

  const LimparMatchs = () => {
    
      axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/clear")
        .then((res)=>{ window.location.reload()})
        .catch((err) => {
          console.log(err)
      })
  }
    return (

      <Card className="card bg-light m-3 border border-info rounded shadow">
      <div className="card-header bg-light p-1"> 
      <button className=" btn btn-outline-warning btn-lg "
      onClick={props.onClickVoltarPagina}>
       <MdArrowBackIosNew className="text-info" /> 
   </button> 
      <img src= {Astromatch} style={{width: "15rem"}}
      /> 
      </div>
      <div className="card-body align-items-center overflow-auto">

           {matchsLista.map((matchs) => {
              return (
              <div key={matchs.id}>
          <Img src={matchs.photo}
          className="card-img img-fluid rounded-circle"/>
          <span className="card-title text-dark p-4">{matchs.name}</span> </div>
           )})}

          </div> 
        <div className="card-footer bg-light">
            <button className="btn btn-warning btn-md btn-block"
             onClick={LimparMatchs}>
              Limpar Matchs
            </button>
        </div>
    </Card>
     )}
  
    
  
  export default ListaMatchs;