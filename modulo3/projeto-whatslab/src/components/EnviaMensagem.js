import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
width: 90vw;
height: 93vh;
background-color:  rgba(0, 0, 0, 0.63);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
display: flex;
flex-direction: column;
align-content: space-between;
justify-content: center;
padding: 0px;
margin:10px
padding-top:30px;

`
const DivMostraMensagem = styled.div `
width: 90vw;
height: 70vh;
background-color: white
;
flex:1;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
padding-top:10px;
color: #584833;


`
const DivEnviarMensagem = styled.div `
width: 90vw;
padding:10px;

`
const CaixaMensagem = styled.p `
    padding: 2%;
    background-color: rgb(100, 98, 98);
    margin: 2%;
    border-radius:5px;
    `

const NomeUsuario = styled.span `
font-weight: bold;
color: white;
padding-left:20px;
padding:10px;
`

const UsuarioInput =styled.input `
display:flex
justify-content: space-around;
  width: 8hw;
  height: 8vh;
  background-color: rgb(100, 98, 98);
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  padding-right:10px;
  margin-right:10px;

  &:hover {
    border: 1px solid #584833;;
  }
  ::placeholder {
    color: white;
    font-family: 'Poppins', sans-serif; }
    `
const TextoInput = styled.input `
display:flex
justify-content: space-around;
  flex: 1;
  background-color: rgb(100, 98, 98);
  border:none;
  box-sizing: border-box;
  border-radius: 4px;
  width: 60vw;
  height: 8vh;
  padding-right:10px;
  margin-right:10px;
  &:hover {
    border: 1px solid #584833;;
    font-family: 'Poppins', sans-serif;
  }
  ::placeholder {
    color: white;
    font-family: 'Poppins', sans-serif;
}
`

const TextButton = styled.button`
display:flex
justify-content: space-around;
border-radius:50px;
border-style: none;
width: 4vw;
height: 8vh;

`
const BoldText = styled.span`
  font-weight: bold;
  color: white;
  padding-left:20px;
  padding:10px;
  font-family: 'Poppins', sans-serif;
  `


export class EnviaMensagem extends React.Component {
    
     state = {       
               
        valorInputUsuario: '',
        valorInputMensagem: '',
        listadeMensagens : []
    }

    mudouInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }

    mudouInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    EnviarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const mensagemPraEnviar = [...this.state.listadeMensagens, novaMensagem]

        this.setState({
            listadeMensagens: mensagemPraEnviar,
            valorInputMensagem: '',
            valorInputUsuario:'',
        })        
    }

    render() {
        const Mensagens = this.state.listadeMensagens.map(
            (mensagem) => {
               return <CaixaMensagem><NomeUsuario>{mensagem.usuario + ":"} </NomeUsuario>{ mensagem.mensagem}</CaixaMensagem>     
           })

        return (
            <Container>
                 <BoldText> ThaChat <img src="https://icons.iconarchive.com/icons/vexels/office/32/chat-icon.png"/></BoldText>
                <DivMostraMensagem>
                    {Mensagens}
                </DivMostraMensagem>                
                <DivEnviarMensagem>
                    <UsuarioInput classname="Usuario" type="text"  placeholder="Usuário" onChange={this.mudouInputUsuario} value={this.state.valorInputUsuario}/>
                    <TextoInput classname="Texto" type="text"  placeholder="Mensagem" onChange={this.mudouInputMensagem} value={this.state.valorInputMensagem}/>
                    <TextButton onClick={this.EnviarMensagem}><img src="https://icons.iconarchive.com/icons/vexels/office/32/email-send-icon.png"/></TextButton>
                </DivEnviarMensagem>
            </Container>
        ) 
    }
}