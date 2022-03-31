import React from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'

function TripDetailsPage() {
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
              <img src=""/>
              <div className="detalhes">

              </div>
          </div>
          <div className="grid">
          <div className="card">
          </div>
          </div>

          <button onClick={goBack}>Voltar</button>
      </div>

      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>
    );
  }
  
  export default TripDetailsPage;