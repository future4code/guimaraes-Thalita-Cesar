import axios from 'axios'
import React from 'react'
import './styled.css';

const urlUser ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "thalita-cesar-guimaraes"
  }
}

export default class Cadastro extends React.Component{
    state ={
        name: "",
        email:"",
        userId:""
        }
          // Pegar as plailists //
        
          createUser =()=>{

            const body ={
                name: this.state.name,
                email: this.state.email

            }
            axios 
            .post(urlUser, body,headers)
            .then((res)=> {
        
          alert(`O usuário foi cadastrado com sucesso!`)
          this.setState ({name:""})
          this.setState ({email:""})
          this.props.getAllPlaylists()
            })
            .catch((err)=>{
              alert(`Erro ao cadastrar usuário. Tente Novamente`)
            })
          }


    onChangeName = (ev) => {
        this.setState ({name: ev.target.value})
    }

    onChangeEmail = (ev) => {
        this.setState ({email: ev.target.value})
    }
        
        
          render(){
            
          return (
        
            <div className="TelaDeCadastro">

            <h1>Cadastro</h1>
            <div className="CadastroContainer">
            <br></br>
             <div>
             <input type="name" 
             placeholder="Nome" 
             value={this.state.name}
             onChange ={this.onChangeName}/>
             </div>
             <div>
             <input type="email" 
             placeholder="Email" 
             value={this.state.email}
             onChange ={this.onChangeEmail}/>
             </div>
             <br></br>
             <div>
             <button onClick={this.createUser}> Enviar Cadastro </button>
             <button className="botoes" onClick={this.props.irParaListaDeUsuarios}>  Lista de Usuários </button>
             </div>
             </div>
            </div>
          );}
        }