import './AddProfessor.css'
import Logo from '../../../assets/fotoperfil.jpg';
import { useParams, useHistory, Link, useRouteMatch  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Col, Row, Button, Form } from 'react-bootstrap';
import ListaProfAluno from '../ListaProfAluno/ListaProfAluno';
import PerfilProfessor from '../FormAddProfessor/FormAddProfessor';
import FormAddProfessor from '../FormAddProfessor/FormAddProfessor';

export default function PerfilAluno(props) {

  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState();
  let { id } = useParams();

  const match = useRouteMatch();
  const [professores, setProfessores] = useState('');

  useEffect(() => {
      axios.get('/users/professores')
      .then(
          (res) => setProfessores(res.data))
      .catch((err) => console.log(err.response))
  }, []); 

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
  

  return(
    <div className="PerfilAluno">
      <Container fixed className ="containerPerfilAdd">
        <Row className="justify-content-md-center rowDadosAddProf">

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
                {}
                <Card.Text className="cardPerfil">
                  <FormAddProfessor/>
                </Card.Text>

          </Col>
        </Row>
        <div style={{padding: '20px'}}>

        </div>
      </Container>
    </div>    
  )


}  
