import styled from "styled-components"
import logo from "../images/logo.png"
import {RiAdminFill} from 'react-icons/ri';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import {FaUserAstronaut} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';

const Nav = styled.nav `
background-color: #ddc4f6;
`

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

const Menu = () => {

    const navigate = useNavigate()
    const goToLogin = () => {
    navigate('/login')
    }

    const goToHome = () => {
    navigate('/')
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const goToAdminPage = () => {
    navigate('/admin/trips/list')
  }

    return (
        <Nav className="navbar p-3 border-bottom-info shadow-lg ">
        <button className="btn" onClick={() =>goToHome()}>
       <img src={logo} height="50"/></button>
  
       <button className="btn btn-outline-light rounded-circle" onClick={handleShow}>
       <RiAdminFill/>
       </button>


       <Modal show={show} onHide={handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#ddc4f6"}}>
        <form className="form">
         <h3 class="text-center m-3 p-3">Login Adm</h3>
                 <div className="form-group input-group m-2 p-2">
                 <button className="btn btn-lg bg-light">
                   <FaUserAstronaut/></button><input type="email" 
                   className="form-control"/>
                 </div>
                 <div className="form-group input-group m-2 p-2">
                 <button className="btn btn-lg bg-light">
                   <RiLockPasswordFill/> </button>
                 <input type="text" className="form-control"/>
                 </div>
                 <div className="form-group m-2 p-2">
                 <label className="text-dark"><span>Lembrar</span>
                 <span>
                 <input type="checkbox"/></span></label><br></br>
                 </div>
         </form>

         
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#ddc4f6"}}>
          <div className="btn-group">
        <Button onClick={goToAdminPage}
       className="btn btn-lg"
       >Login</Button> 
           <Button className="btn btn-lg" >Registre-se</Button> 
       </div>
        </Modal.Footer>
      </Modal>
        </Nav>
    );
  }

export default Menu