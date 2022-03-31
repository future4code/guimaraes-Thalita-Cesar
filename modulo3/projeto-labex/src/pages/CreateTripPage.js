import React from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'

function CreateTripPage() {

  const navigate = useNavigate()
const goBack = () => {
  navigate(-1)
}
    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container">
          <div className="box">
            <div>Imagem</div>
          <div className="form">
                <h1> Crie uma Nova viagem</h1>
             
              <input></input>
              <select></select>
              <input></input>
              <textarea></textarea>
              <input></input>
              <button onClick={goBack}>Voltar</button>
                <button>Criar</button>
          </div>
          </div>
      </div>
      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>
    );
  }
  
  export default CreateTripPage;