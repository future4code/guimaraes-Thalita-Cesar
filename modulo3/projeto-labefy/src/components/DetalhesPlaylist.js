import React from "react";
import axios from "axios";
import MusicaCard from "./MusicaCard"

const headers = {
  headers: {
    Authorization: "thalita-cesar-guimaraes"
  }
}
export default class DetalhesPlaylist extends React.Component{
    state = {
        name: "",
        artist: "",
        url: "",
        listaDeMusicas: [],
      };


       getPlaylistTracks=()=>{
        
        axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
          headers
        )
        .then((respostas) => {
          this.setState({ listaMusicas: respostas.data.result.tracks });
          console.log("Atenção", respostas.data.result.tracks);
        })
        .catch((erros) => console.log(erros));
    };
  
    componentDidMount() {
      this.getPlaylistTracks();
    }

    addTrackToPlaylist =(ev)=>{
    const body={
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    };

axios
.post (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
body, headers)
.then((res)=>{
this.setState({ name: "", artist: "", url: "" });
this.getPlaylistTracks();
alert("A música foi adicionada com sucesso!");
})
.catch((err)=>{
    alert("Algo deu errado. Tente novamente.")
});
this.getPlaylistTrackst();
};

  onChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  onChangeArtist = (ev) => {
    this.setState({ artist: ev.target.value });
  };

  onChangeUrl = (ev) => {
    this.setState({ url: ev.target.value });
  }; 
render(){
    const listaDeMusicas = this.state.listaDeMusicas.map(musicas =>{
        return <MusicaCard key={musicas.id}
                TrackName={musicas.name}
                TrackArtist={musicas.artist}
                TrackUrl={musicas.url}
                TrackId={musicas.id} />
    })

    console.log(listaDeMusicas)
    return(
        <div>
            <h3>Adicione nova música:</h3>
            <input placeholder="Música"
            value= {this.state.name}
            onChange ={this.onChangeName}/>

            <input placeholder="Artista"
            value= {this.state.artist}
            onChange ={this.onChangeArtist}/>

            <input placeholder="Link da música"
            value= {this.state.url}
            onChange ={this.onChangeUrl}/>
            
            <button onClick={this.addTrackToPlaylist}>
              Adicionar Música
            </button>

            {listaDeMusicas}

            <button onClick={this.props.PaginaVoltar}>
              Voltar
            </button>

        </div>

    )
}
}


