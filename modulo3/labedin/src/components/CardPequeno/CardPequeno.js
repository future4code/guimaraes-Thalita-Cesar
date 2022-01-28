import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
          <div className="CardPequeno">
            <div>
            <img src={ props.imagem}/>
            <h4>{props.label}</h4>
            <h4>{props.texto}</h4>
            </div>
        </div>

    )
}

export default CardPequeno;