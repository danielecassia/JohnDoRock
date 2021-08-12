import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.css';
import ListaAlunos from './ListaAlunos/ListaAlunos';
import ListaProfessores from './ListaProfessores/ListaProfessores';
import PerfilAluno from './PerfilAluno/PerfilAluno';
import PerfilEdit from './PerfilEdit/PerfilEdit'

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
      <NavBar user={user}/>
      <Container fixed className ="containerHome">
        <Router>
            <Switch>
              <Route path="/home"> 
                <Container maxWidth="md" className ="containerHome">
                  <div className='Listas'>
                    <h2> Alunos </h2>
                    <Container className ="containerAlunos">
                      <Row>
                        <ListaAlunos/>
                      </Row>
                    </Container >

                    <h2> Professores </h2>
                    <Container className ="containerProfessores">
                      <ListaProfessores/>
                    </Container>
                  </div>
                </Container>
              </Route>

              <Route path="/perfil/:id">
                <PerfilAluno />
              </Route>
              <Route path="/editUser/:id">
                <PerfilEdit/>
              </Route>

            </Switch>
          </Router>
        </Container>
        <Footer/>
    </div>
  )
}