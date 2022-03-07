import React from "react";

export default function MusicaCard (props) {
    return (
        <div>
            <div>
                <p>Música: {props.TrackName}</p>
                <p>Artista: {props.TrackArtist}</p>
            </div>
            <audio controls="controls"> 
                <source src={props.TrackUrl} type="audio/ogg" />
            </audio>
        </div>
    )
}
