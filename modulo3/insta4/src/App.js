import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
state = {
    posts : [
     {nomeUsuario:'paulinha', fotoUsuario: 'https://picsum.photos/50/50',
     fotoPost:'https://picsum.photos/200/150'},
   
     { nomeUsuario:'joao', fotoUsuario:'https://picsum.photos/50/51',
     fotoPost:'https://picsum.photos/200/151'},
   
     {nomeUsuario:'amanda', fotoUsuario:'https://picsum.photos/50/52',
     fotoPost:'https://picsum.photos/200/155'},
   ]

   
   };

  
  render() {
  

   const ListaDePosts = this.state.posts.map((item,i) => {return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario}  fotoPost={item.fotoPost}/>});  

    return (
      <MainContainer>
       
        {ListaDePosts}  
  
         
      </MainContainer>
    );
  }
}
export default App;
