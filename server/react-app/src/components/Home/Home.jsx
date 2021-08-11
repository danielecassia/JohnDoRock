import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Home.css';

import ListaAlunos from './ListaAlunos/ListaAlunos';
import ListaProfessores from './ListaProfessores/ListaProfessores';

export default function Home() {
  const history = useHistory();
  const [user, setUser] = useState(false);
  useEffect(() => {
    axios.get('/users/me')
      .then((res) => setUser(res.data))
      .catch((err) => history.push('/'));
  },[]);

  return (
    <div className='Home'>
      <NavBar/>
      <Container maxWidth="md" className ="containerHome">
        <div className='Listas'>
          <h2> Últimos Alunos Cadastrados</h2>
          <Container className ="containerAlunos"> 
            <Row>
              <ListaAlunos/>
            </Row>
          </Container>

          <h2> Lista de Professores </h2>
          <Container className ="containerProfessores"> 
            <ListaProfessores/>
          </Container>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}