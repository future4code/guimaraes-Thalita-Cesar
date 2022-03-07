import './App.css';
import React from 'react'
import CriarPlaylist from './components/CriarPlaylist'
import ListaDePlaylists from './components/ListaDePlaylists'
import styled from 'styled-components'
import logo from "./midias/logo.png"

const Container = styled.div `
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
position: relative;
float:center;
padding: 40px;
margin:40px;
background-color: rgba(0, 0, 0, 0.603) `
const Header = styled.header`
background-color: rgba(0, 0, 0);
`

export default class App extends React.Component {
  state={
    telaInicial: 'criarPlaylist'
  }

  escolherTela = () => {
    switch (this.state.telaInicial) {
      case "criarPlaylist":
        return <CriarPlaylist irParaLista ={this.irParaLista}/>
      case 'lista':
        return <ListaDePlaylists irParaCriarPlaylist ={this.irParaCriarPlaylist} />
      default: 
        return <div> Página não encontrada! </div>
    }
    
  }

  irParaCriarPlaylist = () => {
    this.setState ({telaInicial: 'criarPlaylist'})
  }

  irParaLista = () => {
    this.setState ({telaInicial: 'lista'})
  }

  render () {
    return (
      <div className="App">
        <Header>
        <img src={logo} style={{height: "80px"}}/>
        </Header>
        <Container>
        {this.escolherTela()}</Container>

      </div>
    )
  }
}

