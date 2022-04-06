import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import axios from 'axios'
import useProtectedPage from '../customHook/useProtectPage'
import Url from '../contanst/url'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse'
import styled from "styled-components"
import { AiFillDelete } from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';

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
  const token = localStorage.getItem('token')

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useProtectedPage()

  const goToCreateTripPage = () => {
    navigate('/admin/trips/create')
  }

  const goToDetails = () => {
    navigate('/admin/trips/:id')
  }


  
    const getTrips =()=>{
    axios
      .get
      (Url + `/trips/`, {
        headers: {
          auth: token
        }
      })
      .then(res => setTripsList(res.trips))
      .catch(err => console.log(err))
      }   


  const deleteTrip = (id) => {
    axios
    .delete
    (Url + `/trips/${id}`, 
    {
      headers: {
      auth: token}
    })
      .then(() => {
        window.location.reload()
      })
      .catch((err) => console.log(err.message))
    }

   // const createTrip = (ev) => {
   //   ev.preventDefault()
   //   const body = form;
   //   axios.post(Url + `/trips/`, 
   //   body, {
   //     headers: {
   //       auth: token
   //     }
   //   })
      
   //     .then((res) => {
   //       alert("Viagem criada com sucesso")
   //       window.location.reload()
   //     })
   //     .catch((er) => {
   //       console.log("erro: ", er.response)
   //     })
   //  }


    const outLocalStorage =() =>{
      localStorage.setItem('token', "")
      navigate("/")
    }


    const ListTrip = tripsList.map((trip,id) => {
      return <div key={id} name={trip.name} id={trip.id}>
        {trip.name}
      </div>
  })

  const onClickDelete=(ev, trip) => {
    ev.stopPropagation()
    if (window.confirm(`Tem certeza que deseja deletar a viagem?`)) {
      deleteTrip(trip.id, getTrips)
    }
  }
  useEffect(() => {
    
  }, [getTrips])


    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container">
      <h1 className="jumbotron-heading text-center
      px-3 py-3 pt-md-5 pb-md-4 mx-auto">Viagens</h1>



          <div className="container">

          <div className="row align-items-center">
          <div className="col-sm">
          <div className="card-deck mb-3 text-center shadow">
          <div className="card mb-4 shadow-sm" style={{backgroundColor: "#ddc4f6"}}>
          <div className="card-header">
          <p className="text-end">
  <button className="btn btn-outline-light rounded-circle"
   onClick={onClickDelete}>
    <AiFillDelete/></button></p>
          <h3 className="jumbotron-heading text-center m-3">{ListTrip}</h3>
        </div>
                    <div className="card-footer">
                      <div>
      <Button
        className="btn btn-lg my-2"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Detalhes
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>

                    </div>
                    </div>
                </div>
                </div>
                </div>

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
        <form>

        <div className="form-group p-3">
        <input type="name" className="form-control" 
        placeholder="Nome da Viagem"/>
        </div>

        <div className="form-group p-3">
        <select className="form-control" id="exampleFormControlSelect1">
        <option >Escolha um Planeta</option>
        <option>Europa - Júpiter</option>
        <option>Vênus</option>
        <option>Marte</option>
        <option>Lua</option>
        </select>
        </div>

        <div className="form-group p-3">
        <input type="date" className="form-control" 
        placeholder="Nome da Viagem"/>
        </div>


        <div className="form-group p-3">
        <textarea className="form-control" rows="3" placeholder="Descrição"></textarea>
        </div>

        <div className="form-group p-3">
        <input type="number" className="form-control" placeholder="Duração em Dias"/>
        </div>

        <div className="form-group p-3">
        <Button className="btn btn-lg my-2 ">Criar</Button>
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