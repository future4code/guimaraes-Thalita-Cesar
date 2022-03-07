import axios from 'axios'
import React from 'react'
import DetalhesPlaylist from './DetalhesPlaylist';
import styled from 'styled-components'

const PlaylistsContainer = styled.div`
 display: inline block;
 flex-direction: row;
 justify-content: baseline;
 align-items: baseline;
 width: 100%;
 height: 80%;
`

    const urlPlayList ='https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
    const headers = {
      headers: {
        Authorization: "thalita-cesar-guimaraes"
      }
    }
  
    export default class ListaDePaylists extends React.Component{
    
    state ={
        playlists:[],
        paginaTracks: false,
        playListSelect: ""
    }
    componentDidMount(){
      this.getAllPlaylists()
    }
      // Pegar as playlists //
    
      getAllPlaylists=()=>{
      axios 
      .get(urlPlayList,headers)
      .then((res)=>{
        this.setState({playlists: res.data.result.list})
    })
      .catch((err)=>{
      alert("Ocorreu algum erro. Tente Novamente.")
      })
      }

        // Deletar os usuarios //
      deletePlaylist =(id)=>{
        if(window.confirm("Deseja realmente excluir a playlist?")===true){
           axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,headers
          )
          .then((res)=>{
            this.getAllPlaylists()
            alert ("A playlist foi excluída")
          this.getAllPlaylists()
        })
          .catch((err)=>{
              alert("Ocorreu algum problema. Tente Novamente")
        })
      }
    }

    trocarPagina = (trackId) => {
        this.setState({ paginaTracks: true, playListSelect: trackId });
      };
    
      paginaVoltar = () => {
        this.setState({ paginaTracks: false });
      };
    
    
      render(){

        if (this.state.paginaTracks) {
            return (
              <DetalhesPlaylist
                paginaVoltar={this.paginaVoltar}
                playListSelect={this.state.playListSelect
                }
              />
            );
          }
        const listaPlaylists = this.state.playlists.map((play)=>{
          return (
            <PlaylistsContainer key={play.id}> <div>
              {play.name}
          </div>
          <div className="botoes">
              <button
             onClick={() => this.trocarPagina(play)}>
             Abrir
             </button>
              <button 
              className="botaoExcluir" 
              onClick={() => this.deletePlaylist(play.id)}>
                Deletar
                </button>
              </div>
          </PlaylistsContainer>
          )
        })
    
      return (
    
        <div className="ListDeNomesContainer">
         <h1>Lista de Playlists</h1>
         <br></br>
         <div>{listaPlaylists}</div>
         <br></br>
         <button 
         onClick=
         {this.props.irParaCriarPlaylist}>
           Tela Inicial
           </button>
        </div>
      );}
    }
    