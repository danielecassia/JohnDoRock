import './PerfilAluno.css'
import Logo from '../../../assets/fotoperfil.jpg';
import { useParams, useHistory  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import ListaProfessores from '../ListaProfessores/ListaProfessores';

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
        <Row className = "rowDados">

          <Col xs lg="2" className = "ColunaImg">
              <Card.Title className="FotoPerfilAluno" >
                <img src={Logo} alt="Foto de Perfil" width="100%"/>
                <br />
                <Card.Text className="botoesFormPerfil">
                  <p> {selectedUser ? selectedUser.name : ''} </p>
                  <Button variant="warning">Adicionar Professor</Button>    
                </Card.Text>
              </Card.Title>
          </Col>

          <Col xs={1}></Col>
          
          <Col xs lg="4" className = "ColunaDados">
                <Card.Text className="cardPerfil">
                  <p> Nome: {selectedUser ? selectedUser.name : ''} </p> 
                  <p> Email: {selectedUser ? selectedUser.email : ''} </p> 
                  <p> Data de nascimento: {selectedUser ? selectedUser.data_nasc : ''} </p> 
                  <p> Instrumento: Violão </p> 
                  <div className="botoesFormPerfil">
                    <Button variant="primary">Editar</Button>   
                    {/* <Button variant="danger">Cancelar</Button>    
                    <Button variant="success">Salvar</Button>     */}
                  </div>
                </Card.Text>

          </Col>
        </Row>

        <Row className="rowPerfil">
          <h2> Professores </h2>
          <ListaProfessores/>
        </Row>
      </Container>
    </div>    
  )
}  