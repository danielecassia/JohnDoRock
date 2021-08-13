import './PerfilEdit.css'
import Logo from '../../../assets/fotoperfil.jpg';
import { useParams, useHistory, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Col, Row, Button, Form } from 'react-bootstrap';
import ListaProfAluno from '../ListaProfAluno/ListaProfAluno';

export default function PerfilAluno(props) {

  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState();
  let { id } = useParams();

  useEffect(() => 
    axios.get(`/users/user/${id}`)
      .then( (res) => setSelectedUser(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])

  const [formValues, setFormValues] = useState({
    name: '',
    instrumento: '',
    data_nasc: '',
  })

  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "instrumento")
      setFormValues({...formValues, instrumento: event.target.value})
    
    if(event.target.name === "data_nasc")
      setFormValues({...formValues, data_nasc: event.target.value})
  }

  function handleSubmit(event){
    console.log(formValues.name);
    event.preventDefault();
    axios.put(`/users/user/${id}`, formValues)
    .then((res) => history.push(`/perfil/${id}`))
    .catch((err) => alert(err.message));
  }
  
  return(
    <div className="PerfilAluno">
      <Container fixed className ="containerPerfil">
        <Row className="justify-content-md-center rowDados">

          <Col xs lg="2" className = "ColunaImgForm">
              <Card.Title className="FotoPerfilAluno" >
                <img src={Logo} alt="Foto de Perfil" width="100%"/>
                <br />
                <Card.Text className="botoesFormPerfilAddProf">
                  <h3> {selectedUser ? selectedUser[0].name : ''} </h3>
                </Card.Text>
              </Card.Title>
          </Col>

          <Col xs={1}></Col>
          
          <Col xs lg="4" className = "ColunaDados">
                <Card.Text className="cardPerfil">
                  <Form method="POST" onSubmit={handleSubmit} className="formAtualizar">
                    <input id="name" className="formPerfil" name="name" type="text" placeholder={selectedUser ? selectedUser[0].name : ''} onChange={inputChange}/>
                    <input id="instrumento" className="formPerfil" name="instrumento" type="text" placeholder={selectedUser ? selectedUser[0].instrumento : ''} onChange={inputChange}/>
                    <br/>
                    <input id="data_nasc" className="formPerfil" name="data_nasc" type="date" onChange={inputChange}/>
                    <div className="botoesFormPerfil">
                    <Button variant="primary" type="submit">Salvar</Button>
                    <Button variant="danger"><Link to={`/perfil/${id}`}>Cancelar</Link></Button>    
                        
                    </div>
                  </Form>
                  
                </Card.Text>

          </Col>
        </Row>
          <ListaProfAluno userid={id} userCargo={selectedUser ? selectedUser[0].cargo : ''}/>
      </Container>
    </div>    
  )
}  