import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import logo from "../images/logo.png"
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import {useForm} from '../customHook/useForm'
import  {countries} from '../contanst/countries'
import axios from 'axios'

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

const Nav = styled.div `
    background-color: #ddc4f6;
`

const AplicationFormPage = () => {
  useEffect(()=>{
    getTrips()
  },[])

  const [id, setId]=useState("")
  const [tripslist, setTripsList] = useState([])

  const navigate = useNavigate()


   const goBack = () => {
     navigate(-1)
   }

   const [form, onChangeForm] = useForm (
    {

    name: "",
    trip: "",
    age: "", 
    applicationText: "",
    profession: "",
    country: "",
  })

    const getTrips =()=>{
    axios
      .get
      (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guimaraes-thalita-cesar/trips/`)
      .then(res => setTripsList(res.data.trips))
      .catch(err => console.log(err))
      }   
    

  const onChangeId = (ev) => {
    setId(ev.target.value);
};

const mapTrip = tripslist.map((trip, i)=>{
return (
  <option key={i} value={trip.id} >{trip.name}</option>
)})

console.log(tripslist)

const applyToTrip = () => {
  const body = form
  axios
  .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guimaraes-thalita-cesar/trips/${form.tripId}/apply`,
   body)
   .then((ress)=>{
    alert("Sua inscrição foi realizada com sucesso. Boa sorte!");})
.catch((error)=>{
    console.log(error)})
}


    return (
<div>
    <header> <Menu/></header>
      <main>
<div>

      <div className="container">

       <div className="row mt-5 pt-5">

       <Nav  className="col-sm-4 shadow  p-5">
       <h3 className="jumbotron-heading  mt-3 mb-3">
         Faça sua Inscrição</h3>
       <p className=" mt-4 mb-5 pb-5">
         Responda o fomulário de inscrição. 
         Ao enviar sua candidatura ficará em análise,
          pelo prazo de 3 dias receberá resposta.
         </p>
         <img className ="img-fluid "src={logo} />
      </Nav>

  

    <form className="col-sm-8 shadow p-5 bg-dark"
    onSubmit={applyToTrip}>

  <div className="form-group p-3">
  <select className="form-control" name={"trip"} 
  value={form.trip} onChange={onChangeId}
   required>
  <option selected disabled>Escolha uma viagem</option>
  {mapTrip}
  </select>
  </div>
            
  <div className="form-group p-3">
   <input type="name" className="form-control" placeholder="Seu Nome"
   name={"name"} value={form.name} onChange={onChangeForm}
   required />
  </div>

  <div className="form-group p-3">
 <input type="number" className="form-control" placeholder="Idade"
 name={"age"} value={form.age} onChange={onChangeForm}
 required/>
</div>
  <div className="form-group p-3">
    <textarea className="form-control" 
    rows="3" placeholder="Motivos da viagem"
     name={"applicationText"} value={form.applicationText} 
     onChange={onChangeForm} required></textarea>
  </div>

  <div className="form-group p-3">
   <input type="text" className="form-control" placeholder="Profissão"
   name={"profession"} value={form.profession} 
   onChange={onChangeForm} required/>
  </div>

  <div className="form-group p-3" name={"country"} 
  value={form.country} required>
      {countries}
  </div>
  </form>
   
      </div>
      </div>
          <p className="text-center mb-5 mt-2 pb-5"> <div 
          className="btn-group" 
    role="group">
         <Button  type="submit"
         className="btn btn-lg my-2 mt-5 border-left"
         >Enviar</Button>
         <Button onClick={goBack}
         className="btn btn-lg my-2 mt-5"
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
  
  export default AplicationFormPage;