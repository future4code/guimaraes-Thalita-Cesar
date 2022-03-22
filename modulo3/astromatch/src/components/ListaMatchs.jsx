import '../App.css'
import styled from "styled-components";
import {MdArrowBackIosNew} from 'react-icons/md';
import Astromatch from '../midias/Astromatch.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react';


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

    const [matchsLista, setMatchsLista] = useState([]);

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/matches")
        .then(response => {
          setMatchsLista(response.data.matches)
        })
        .catch(error => {
            console.log(error)
        })
    }

  useEffect(() => {
    getMatches()
}, [matchsLista])

  const LimparMatchs = async () => {
    try {
      await axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thalita/clear")
        .then(() => window.location.reload())
    } catch {
      console.log('Error')
    }
  }
    return (
      <div>
           {matchsLista.map((match) => {
              return (
      <Card className="card bg-light mb-5 border-0">
      <div className="card-header bg-light p-1"> 
      <button className=" btn btn-outline-warning btn-lg ">
       <MdArrowBackIosNew className="text-info" /> 
   </button> 

      <img src= {Astromatch} style={{width: "15rem"}}
      /> 
      </div>
      <div className="card-body align-items-center">
          <Img src={match.photo}
          className="card-img img-fluid rounded-circle"/>
          <span className="card-title text-dark p-4">{match.name}</span>
      </div>
        <div className="card-footer bg-light">
            <button className="btn btn-outline-warning btn-md btn-block"
             onClick={LimparMatchs}>
              Limpar Matchs
            </button>
        </div>
    </Card>
     )
    })}

    </div>
    
    );
  }
  
    
  
  export default ListaMatchs;