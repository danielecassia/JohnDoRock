import './PerfilAluno.css'
import Logo from '../../../assets/fotoperfil.jpg';
import { useParams, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import ListaProfAluno from '../ListaProfAluno/ListaProfAluno';

export default function PerfilAluno(props) {
  const [selectedUser, setSelectedUser] = useState();
  let { id } = useParams();

  useEffect(() => 
    axios.get(`/users/user/${id}`)
      .then( (res) => setSelectedUser(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])
  

  if(selectedUser){
    if((props.user.cargo !== 'admin') && (selectedUser[0].UserId !== props.user.id)){
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
                      </div>
                    </Card.Text>
              </Col>
            </Row>
    
            <ListaProfAluno userid={id} userCargo={selectedUser ? selectedUser[0].cargo : ''}/>
          </Container>
        </div>  
      )
    
    }
  else if(props.user.cargo === 'admin'){
    if(selectedUser[0].cargo === 'professor')
    return(
      <div className="PerfilAluno">
        <Container fixed className ="containerPerfil">
          <Row className = "rowDados" bg="dark">
  
            <Col xs lg="2" className = "ColunaImgPerfil">
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
                    <p> Nome: {selectedUser ? selectedUser[0].name : ''} </p> 
                    <p> Instrumento: {selectedUser ? selectedUser[0].instrumento : ''} </p>
                    <p> Data de nascimento: {selectedUser ? selectedUser[0].data_nasc : ''} </p>  
                    <div className="botoesFormPerfil">
                      <Button variant="warning"><Link to={`/editUser/${id}`}>Editar</Link></Button>
                    </div>
                  </Card.Text>
            </Col>
          </Row>
  
          <ListaProfAluno userid={id} userCargo={selectedUser ? selectedUser[0].cargo : ''}/>
        </Container>
      </div>    
    )
    else
    return(
      <div className="PerfilAluno">
        <Container fixed className ="containerPerfil">
          <Row className = "rowDados" bg="dark">
  
            <Col xs lg="2" className = "ColunaImgPerfil">
                <Card.Title className="FotoPerfilAluno" >
                  <img src={Logo} alt="Foto de Perfil" width="100%"/>
                  <br />
                  <Card.Text className="botoesFormPerfilAddProf">
                    <h3> {selectedUser ? selectedUser[0].name : ''} </h3>
                    <Button variant="primary"><Link to={`/addprofessor/${id}`}>Professor</Link></Button>    
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
                      <Button variant="warning"><Link to={`/editUser/${id}`}>Editar</Link></Button>
                    </div>
                  </Card.Text>
            </Col>
          </Row>
  
          <ListaProfAluno userid={id} userCargo={selectedUser ? selectedUser[0].cargo : ''}/>
        </Container>
      </div>    
    )
    
  }
  else{
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
                    {/* <Button variant="warning"> +Professor</Button>     */}
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
                      <Button variant="warning"><Link to={`/editUser/${id}`}>Editar</Link></Button>
                    </div>
                  </Card.Text>
            </Col>
          </Row>
  
          <ListaProfAluno userid={id} userCargo={selectedUser ? selectedUser[0].cargo : ''}/>
        </Container>
      </div>    
    )
  }
}
return(<p>ERRO NO SERVER!</p>)
}  
