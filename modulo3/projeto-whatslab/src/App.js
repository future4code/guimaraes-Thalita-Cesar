import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/MessageForm';


const MainContainer = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: rgba(222, 184, 135, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius:5px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding: 30px;
  padding-top:10px;
 

`

const MessagesContainer = styled.div`
  width: 85vw;
  height: 70vh;
  background-color: rgba(245, 222, 179, 0.5);
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


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }



  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <MainContainer>
       <p> ThaChat </p>
        
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <p key={index}>
              <BoldText>{message.user}</BoldText> {"\n"}{' : ' + message.text}     </p>)
          }
        </MessagesContainer>
        <MessageForm addMessage={this.addMessage} />
      </MainContainer>
    );
  }
}

export default App;
