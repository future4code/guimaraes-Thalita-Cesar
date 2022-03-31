import styled from "styled-components"
import logo from "../images/logo.png"
import {RiAdminFill} from 'react-icons/ri';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = styled.nav `
background-color: #ddc4f6;
`

const Menu = () => {

    const navigate = useNavigate()
    const goToLogin = () => {
    navigate('/login')
    }

    const goToHome = () => {
    navigate('/')
    }

    return (
        <Nav className="navbar p-3 border-bottom-info shadow-lg ">
        <a className="navbar-brand" href="#">
       <img src={logo} height="50"/></a>
  
       <button className="btn btn-outline-light rounded-circle" onClick={() =>goToLogin()}>
       <RiAdminFill/>
       </button>
        </Nav>
    );
  }

export default Menu