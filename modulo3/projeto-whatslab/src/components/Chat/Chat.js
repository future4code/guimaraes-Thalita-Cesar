import React from 'react';
import styled from 'styled-components'



const Container = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: rgba(222, 184, 135, 0.8);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius:5px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding: 30px;
  padding-top:10px;
 

`

const MensagensContainer = styled.div`
  width: 85vw;
  height: 70vh;
  background-color: rgba(245, 222, 179);
  flex:1;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  border-radius:5px;
  padding:10px;
  color: #584833;
 
`

const BoldText = styled.span`
  font-weight: bold;
  color: #584833;
  
`
const ContainerChat = styled.div`
  display: flex;
  padding-top:30px;
  justify-content: space-around;
  
 
  
`

const UserInput = styled.input`
display:flex
justify-content: space-around;
  width: 15hw;
  height: 8vh;
  background-color: rgb(160, 132, 95);
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
    font-family: 'Poppins', sans-serif;
}
  
`

const TextInput = styled.input`
display:flex
justify-content: space-around;
  flex: 1;
  background-color: rgb(160, 132, 95);
  border:none;
  box-sizing: border-box;
  border-radius: 4px;
  width: 67vw;
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

const Textbutton = styled.button`
display:flex
justify-content: space-around;
border-radius:50px;
border-style: none;
width: 4vw;
height: 8vh;

`

export class Chat extends React.Component {

    state={
      ValueUser: '',
      ValueMsg: '',
      MsgList: []
    }

    onChangeUser = (event) => {
      this.setState({ValueUser: event.target.value})
    }
  
    onChangeText = (event) => {
      this.setState({ValueMsg: event.target.value})
    }
  
    onSendMessage = () => {
      const newMessage = {
        user: this.state.ValueUser,
        text: this.state.ValueMsg
      }
      const SendMessage = [...this.state.MsgList, newMessage]
    

    this.setState ({
      MsgList: SendMessage,
      ValueMsg: '',
      ValueUser: ''

    }) 
  }



    render() {
      const Msg = this.state.MsgList.map((msg)=>{ 
        
        return <containerChat> <UserInput>{msg.user + ":"}</UserInput>
        {msg.message} </containerChat>

      })
      return (
        <Container>
  
          <headerChat>
         <BoldText> ThaChat <img src="https://icons.iconarchive.com/icons/vexels/office/32/chat-icon.png"/></BoldText>
         </headerChat>
  
          <MensagensContainer>
           {Msg}
          </MensagensContainer>
          <containerChat>
          <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.ValueUser}/>
          <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.ValueMsg}/>
          <Textbutton onClick={this.onSendMessage}><img src="https://icons.iconarchive.com/icons/vexels/office/32/email-send-icon.png"/></Textbutton>
       </containerChat>
        </Container>

       ) }
    }