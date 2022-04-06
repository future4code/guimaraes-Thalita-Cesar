import React,  {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import axios from 'axios'
import useProtectedPage from '../customHook/useProtectPage'

function TripDetailsPage() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  useProtectedPage()
useEffect(() => {
  const token = localStorage.getItem('token')
  axios
    .get
    ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guimaraes-thalita-cesar/trip/eZ784aJl8qXHtBUAGgvx', {
      headers: {
        auth: token
      }
    })
    .then(res => console.log(res.data.trip))
    .catch(err => 
      alert("Erro ao fazer o login. Verifique o usuário e senha e tente novamente."))
}, [])
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