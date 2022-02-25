
import './App.css';
import Cadastro from './Components/Cadastro/Cadastro'
import ListaDeNomes from './Components/ListaDeNomes/ListaDeNomes'
import React from 'react'

export default class App extends React.Component {
  state={
    telaInicial: 'cadastro'
  }

  escolherTela = () => {
    switch (this.state.telaInicial) {
      case "cadastro":
        return <Cadastro irParaListaDeUsuarios ={this.irParaListaDeUsuarios}/>
      case 'lista':
        return <ListaDeNomes irParaCadastro ={this.irParaCadastro} />
      default: 
        return <div> Página não encontrada! </div>
    }
    
  }

  irParaCadastro = () => {
    this.setState ({telaInicial: 'cadastro'})
  }

  irParaListaDeUsuarios = () => {
    this.setState ({telaInicial: 'lista'})
  }

  render () {
    return (
      <div className="App">
        {this.escolherTela()}
      </div>
    )
  }
}



