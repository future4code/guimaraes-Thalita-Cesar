import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.div`
  display: flex;
  padding-top:30px;
  justify-content: space-around;
  
 
  
`

const UserInput = styled.input`
display:flex
justify-content: space-around;
  width: 15hw;
  height: 8vh;
  background-color: #bb9a6e;
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
  background-color: #bb9a6e;
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



export class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userValue: '',
      textValue: ''
    }
  }

  onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMessage = () => {
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})
  }

  render() {
    return (
      <MessageFormContainer>
        <UserInput type="text" placeholder={'Seu Nome'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <Textbutton onClick={this.onSendMessage}><img src="https://icons.iconarchive.com/icons/vexels/office/32/email-send-icon.png"/></Textbutton>
      </MessageFormContainer>
    );
  }
}