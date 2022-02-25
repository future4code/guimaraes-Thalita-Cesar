import axios from 'axios'
import React from 'react'
import './StyledLista.css';


    const urlUsers ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/';
    const headers = {
      headers: {
        Authorization: "thalita-cesar-guimaraes"
      }
    }
  
    export default class ListaDeNomes extends React.Component{
    
    state ={
    list:[]
    }
    componentDidMount(){
      this.getAllUsers()
    }
      // Pegar os usuarios //
    
    getAllUsers=()=>{
      axios 
      .get(urlUsers,headers)
      .then((res)=>{
        this.setState({list: res.data})
    })
      .catch((err)=>{
      console.log(err.res)
      alert("Ocorreu algum erro. Tente Novamente.")
      })
      }

        // Deletar os usuarios //
      deleteUser =(id)=>{
        if(window.confirm("Deseja realmente excluir o usuário?")===true){
           axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers: {
            Authorization: "thalita-cesar-guimaraes"
          }}
          )
          .then((res)=>{
            this.getAllUsers()
            alert ("O usuário foi removido")
          })
          .catch((err)=>{
              alert("Ocorreu algum problema. Tente Novamente")
        })
      }
    }
    
      render(){
        const listaUsuarioo = this.state.list.map((user)=>{
          return <div className="Usuarios" key={user.id}>
              {user.name}
              <span className="botaoExcluir" style={{color:"red"}} onClick={() => this.deleteUser(user.id)}>X</span>
          </div>
        
        })
    
      return (
    
        <div className="ListDeNomesContainer">
         <h1>Lista de Usuários Cadastrados</h1>
         <br></br>
         <div>{listaUsuarioo}</div>
         <br></br>
         <button style={{float:"right"}} onClick={this.props.irParaCadastro}>Tela Inicial</button>
        </div>
      );}
    }
    