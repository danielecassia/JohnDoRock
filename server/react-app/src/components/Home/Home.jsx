import { useState, useEffect } from 'react';
import { Nav, Button, Container, Navbar } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Logo from '../../assets/logonova.png';
import './Home.css';

import ListaAlunos from './ListaAlunos/ListaAlunos';
import ListaProfessores from './ListaProfessores/ListaProfessores';

export default function Home(){
    const [user, setUser] = useState(false);
    useEffect(() => {
        axios.get('/users/me')
        .then((res) => setUser(res.data))
        .catch((err) => history.push('/'));
    });

    const history = useHistory();
    function handleLogout() {
      axios.get('/users/logout');
      history.push('/');
    }

    return(
      <div className='Home'>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img
          src={Logo}
          width='120px'
          height='100px'
          className='d-inline-block align-top'  
          alt=''
      />
      </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> {user.name} </Nav.Link>
          <Nav.Link> {user.email} </Nav.Link>
          <Button variant="danger" onClick={() => handleLogout()}>Logout</Button> 
        </Nav>
        </Container>
      </Navbar>

      <div>
        <ListaAlunos/>
        <ListaProfessores/>
      </div>
    </div>
    )
}