import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const TelaDeCriarPlaylist = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 80%;
`

const urlPlayList ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers: {
    Authorization: "thalita-cesar-guimaraes"
  }
}




export default class CriarPlaylist extends React.Component{
    state ={
        name: "",
        playlistId:""
        }
          // Pegar as plailists //
          getAllPlaylists = () => {
            axios
              .get(urlPlayList, headers)
              .then((response) => {
                console.log(response.data.result.list);
              })
              .catch((error) => {
                console.log(error.response);
              });
          };

          // Criar Playlist
        
          createPlaylist =()=>{

            const body ={
                name: this.state.name,

            }
            axios 
            .post(urlPlayList, body,headers)
            .then((res)=> {
          alert(`Uau! A sua playlist foi criada com sucesso! ;)`)
          this.setState ({name:""});
          this.getAllPlaylists();
            })
            .catch((err)=>{
              alert(`As playlists não podem conter nomes iguais. Tente Novamente.`)
            })
          }


    onChangeName = (ev) => {
        this.setState ({name: ev.target.value})
    }

        
        
          render(){
            
          return (
        
            <TelaDeCriarPlaylist>

      
            <img src=
            "https://media0.giphy.com/media/LwBTamVefKJxmYwDba/giphy.gif?cid=6c09b9529f0d523dabef5101ebb3bd6e2b5d31b522578ef0&rid=giphy.gif&ct=s"
            style={{width: "400px"}}/>
            <h3>COMECE AGORA CRIANDO SUA PLAYLIST</h3>
            <div className="PlaylistContainer">
            <br></br>
             <div>
             <input type="name" 
             placeholder="Nome" 
             value={this.state.name}
             onChange ={this.onChangeName}/>
             </div>
             <br></br>
             <div>
             <button onClick={this.createPlaylist}> Enviar </button>
             <button className="botoes" onClick={this.props.irParaLista}>  Ver todas as playlists </button>
             </div>
             </div>
            </TelaDeCriarPlaylist>
          );}
          }