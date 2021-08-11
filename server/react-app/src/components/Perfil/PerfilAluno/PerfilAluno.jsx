import './PerfilAluno.css'
import NavBar from '../../NavBar/NavBar';
import Logo from '../../../assets/fotoperfil.jpg';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import ListaProfessores from '../../Home/ListaProfessores/ListaProfessores';
import Footer from '../../Footer/Footer'


export default function PerfilAluno() {
  //ususer = axios.get('/me')
  //if(user.cargo === "adm"){
 //   return(componet)
 // }

  return(
    <div className="PerfilAluno">
      <NavBar/>
      <Container fixed className ="containerPerfil">
        <Row className = "rowDados">
          <Col xs lg="2" className = "ColunaImg">
            <Card.Title className="FotoPerfilAluno">
              <img src={Logo} alt="Foto de Perfil" />
              <br />
              <Card.Text>
                <p> Nome do Usuário </p>
                <button variant="submit">Adicionar Professor</button>    
              </Card.Text>
            </Card.Title>
          </Col>
          <Col xs={1}></Col>
          
          <Col xs lg="4"  className = "ColunaDados">
            <Card className="cardPerfil">
                <Card.Text className="cardPerfil">
                  <p> Email: teste@teste.com </p> 
                  <p> Senha: ********** </p> 
                  <p> Data de nascimento: 12/12/2012 </p> 
                  <p> Instrumento: Violão </p> 
                  <div className="botoesFormPerfil">
                    <Button variant="info">Editar</Button>   
                    <Button variant="success">Salvar</Button>    
                    <Button variant="danger">Cancelar</Button>    
                  </div>
                </Card.Text>
            </Card>

          </Col>
        </Row>

        <Row>
          <Col xs={3}></Col>
          <Col xs={3}></Col>
          <Col>
            <button type="submit">Adicionar Professor</button>    
          </Col>
        </Row>

        <Row className="tabelaPerfil">
          <Col sm>sm=true</Col>
          <Col sm>
            <h2> Professores </h2>
            <ListaProfessores/>
          </Col>
          <Col sm>sm=true</Col>
        </Row>

      </Container>
        
        <Footer/>
    </div>    
  )
}  