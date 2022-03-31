import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import {FaUserAstronaut} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import Menu from '../components/Menu'
import Footer from'../components/Footer'


const Button = styled.button`
border-radius:50px;
background-color: #310062;
color: white;
&:hover{
  background-color: #ddc4f6;
  box-shadow: 0 0 1em #310062;
  color: #310062;
}

`

function LoginPage() {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const goToAdminPage = () => {
    navigate('/admin/trips/list')
  }
    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container mt-5 pt-5">
 
        <div className="container my-5 py-5">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-6 border p-4 rounded" style={{backgroundColor: "#ddc4f6"}}>
        <div className="col-md-12">

          <form className="form">
          <h3 class="text-center m-3 p-3">Login ADM</h3>


                  <div className="form-group input-group m-2 p-2">
                  <button className="btn btn-lg bg-light"><FaUserAstronaut/></button><input type="email" className="form-control"/>
                  </div>

                  <div className="form-group input-group m-2 p-2">
                  <button className="btn btn-lg bg-light"><RiLockPasswordFill/> </button>
                  <input type="text" className="form-control"/>
                  </div>

                  <div className="form-group m-2 p-2">
                  <label className="text-dark"><span>Lembrar</span>
                  <span>
                  <input type="checkbox"/></span></label><br></br>
                  </div>
          </form>
      </div>
      </div>
      </div>
      </div>
    
   
          <p className="text-center mb-5 mt-2 pb-5"> 
          <div className="btn-group"role="group">
         <Button onClick={goToAdminPage}
         className="btn btn-lg my-2 mt-5"
         >Login</Button>
           <Button  type="submit"
        className="btn btn-lg my-2 mt-5 border-left"
          onClick={goBack}
        >Voltar</Button>
          </div> </p>
     
      </div>

      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>     

    );
  }
  
  export default LoginPage;