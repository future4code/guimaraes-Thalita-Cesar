import React from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'

function AdminHomePage() {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const goToCreateTripPage = () => {
    navigate('/admin/trips/create')
  }

  const goToDetails = () => {
    navigate('/admin/trips/:id')
  }

    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container">


          <div className="container">
            <h1>Viagens</h1>
            <div className="card">
              <h1> Título da Viagem</h1>
              <img src="#"/>
              <p>Descrição</p>
              <button onClick={goToDetails}>Detalhes</button>
            </div>
          </div>

          <div className="botaogrupo">
          <button onClick={goBack}>Voltar</button>
          <button onClick={goToCreateTripPage}>Criar Viagem</button>
          <button>Logout</button>
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
  
  export default AdminHomePage;