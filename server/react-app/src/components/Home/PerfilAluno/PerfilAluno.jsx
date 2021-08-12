import './PerfilAluno.css'
import Logo from '../../../assets/fotoperfil.jpg';
import { useParams, useHistory, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import ListaProfAluno from '../ListaProfAluno/ListaProfAluno';

export default function PerfilAluno() {

  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState();
  let { id } = useParams();

  useEffect(() => 
    axios.get(`/users/user/${id}`)
      .then( (res) => setSelectedUser(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])
  
  return(
    <div className="PerfilAluno">
      <Container fixed className ="containerPerfil">
        <Row className = "rowDados" bg="dark">

          <Col xs lg="2" className = "ColunaImgPerfil">
              <Card.Title className="FotoPerfilAluno" >
                <img src={Logo} alt="Foto de Perfil" width="100%"/>
                <br />
                <Card.Text className="botoesFormPerfilAddProf">
                  <p> {selectedUser ? selectedUser[0].name : ''} </p>
                  <Button variant="warning"> +Professor</Button>    
                </Card.Text>
              </Card.Title>
          </Col>

          <Col xs={1}></Col>
          
          <Col xs lg="4" className = "ColunaDados">
                <Card.Text className="cardPerfil">
                  <p> Nome: {selectedUser ? selectedUser[0].name : ''} </p> 
                  <p> Instrumento: {selectedUser ? selectedUser[0].instrumento : ''} </p>
                  <p> Data de nascimento: {selectedUser ? selectedUser[0].data_nasc : ''} </p>  
                  <div className="botoesFormPerfil">
                    <Button variant="primary"><Link to={`/editUser/${id}`}>Editar</Link></Button>
                  </div>
                </Card.Text>
          </Col>
        </Row>

        <Row className="rowPerfil">
          <h2> Alunos </h2>
          <ListaProfAluno userid={id}/>
        </Row>
      </Container>
    </div>    
  )
}  