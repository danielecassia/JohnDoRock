import './PerfilAluno.css'
import NavBar from '../../NavBar/NavBar';
import Logo from '../../../assets/fotoperfil.jpg';
import { Card, Container } from 'react-bootstrap';

export default function PerfilAluno() {
  return(
    <div className="PerfilAluno">
      <NavBar/>
      <Container className="cardsPerfilAluno">
        <Card className="cardPerfil">
            <Card.Title className="FotoPerfilAluno">
                <img src={Logo} alt="Foto de Perfil" width="10%" />
                <Card.Text>
                    Nome do Usuário
                </Card.Text>
            </Card.Title>
            <Card className="cardPerfil">
                <Card.Text>
                    Data de nascimento: 12/12/2012
                    <br />
                    Instrumento: Violão
                </Card.Text>
            </Card>
        </Card>
      </Container>
    </div>    
  )
}  