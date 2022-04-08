import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import axios from 'axios'
import useProtectedPage from '../customHook/useProtectPage'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse'
import styled from "styled-components"
import { AiFillDelete } from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import {MdOutlineExpandMore} from 'react-icons/md';
import {useForm} from "../customHook/useForm"

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

const AdminHomePage = () => {

  const navigate = useNavigate()
  const [tripsList, setTripsList] = useState([])

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, onChangeForm] = useForm (
    {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
  })


const createTrip =()=>{ 
  const body= form
  axios
  .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/guimaraes-thalita-cesar/trips',
  body,
  {
    headers: { 
        auth: token
    }
}   
  )
  .then((res)=>{
    alert("Nova Viagem Foi Criada!")

  })
  .catch((err)=>{
    console.log(err)
  })
}

const onClickCreate = (ev) => {
  ev.preventDefault()
  createTrip(form)
}



  const token = localStorage.getItem('token')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useProtectedPage()

  
    const getTrips =()=>{
    axios
      .get
      (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guimaraes-thalita-cesar/trips/`)
      .then(res => setTripsList(res.data.trips))
      .catch(err => console.log(err))
      }  
      
      useEffect(()=>{
        getTrips()
      },[])


  const outLocalStorage =() =>{
      localStorage.setItem('token', "")
      navigate("/")
    }



  const ListTrip = tripsList.map((trip,id) => {
      return (

      <div className="media border p-3 mt-5 shadow" 
      key={id} name={trip.name} id={trip.id} getTrips={getTrips}
      style={{backgroundColor: "#ddc4f6"}}>
      <div className="media-body">
      <h3 className="jumbotron-heading text-center m-3">{trip.name} </h3>
      <div className="media-footer">
      <div>
      <button
        className="btn btn-outline-light rounded-circle"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >
       <MdOutlineExpandMore/>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p><b>Descrição:</b>{trip.description}</p>
        <p><b>Data: </b>{trip.date}</p>
        <p><b>Planeta: </b>{trip.planet}</p>
        <p><b>Duração: </b>{trip.durationInDays}</p>
        </div>
      </Collapse>
    </div>
      </div>


 </div>
 </div>
 
 )
  })



    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container">
      <h1 className="jumbotron-heading text-center
      px-3 py-3 pt-md-5 pb-md-4 mx-auto">Viagens</h1>



          <div className="container">
            <div className="mb-5"> {ListTrip} </div>

          <div className="botaogrupo">
          <div>
      <Button className="btn btn-lg my-2"
       variant="primary" onClick={handleShow}>
      Criar Viagem
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: "#ddc4f6"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="jumbotron-heading  mt-3 mb-3">
            Crie uma Nova Viagem</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form onSubmit={onClickCreate}>

        <div className="form-group p-3">
        <input type="name" className="form-control" 
        placeholder="Nome da Viagem"
        name={"name"} value={form.name} onChange={onChangeForm}
        required/>
        </div>

        <div className="form-group p-3">

        <select className="form-control" onChange={onChangeForm}
         name={"planet"} value={form.planet} required>
      <option selected disabled>Planeta</option>
      <option value="Mercúrio">Mercúrio</option>
      <option value="Vênus">Vênus</option>
      <option value="Terra">Terra</option>
      <option value="Marte">Marte</option>
      <option value="Júpiter">Júpiter</option>
      <option value="Saturno">Saturno</option>
      <option value="Urano">Urano</option>
      <option value="Netuno">Netuno</option>
      <option value="Plutão">Plutão</option>
      </select>  
        
        </div>

        <div className="form-group p-3">
        <input type="date" className="form-control" 
        placeholder="Nome da Viagem"
        required
        name={"date"} value={form.date} onChange={onChangeForm}/>
        </div>


        <div className="form-group p-3">
        <textarea className="form-control" rows="3" placeholder="Descrição"
        required
        name="description"value={form.description} onChange={onChangeForm}></textarea>
        </div>

        <div className="form-group p-3">
        <input type="number" className="form-control" placeholder="Duração em Dias"
        required
        name={"durationInDays"} value={form.durationInDays} onChange={onChangeForm}
          />
        </div>

        <div className="form-group p-3">
        <Button type="submit" className="btn btn-lg my-2 ">Criar</Button>
        </div> 

        </form> 

        </Offcanvas.Body>
      </Offcanvas>
    </div>

    <p className="text-end">
    <button className="btn btn-outline-dark rounded-circle"
     onClick={outLocalStorage}>
       <IoMdLogOut/></button>
     </p>

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
  
  export default AdminHomePage;