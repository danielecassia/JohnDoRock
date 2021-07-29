import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, Button, Container, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logonova.png';

import './NavBar.css'

export default function NavBar(){
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
    // <Nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    //     a
    //   </div>
    // </Nav>

    <div className='NavBar'>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="left" href="#home">
            <img
              src={Logo}
              width='120px'
              height='100px'
              className='d-inline-block align-top'  
              alt=''
            />
        </Navbar.Brand>
            <Nav className="me-auto right">
              <Nav.Item className="NomeUsuario"> {user.name} </Nav.Item>
              <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
            </Nav>
      </Navbar>
    </div>
  )
}
