import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Nav, Button, Navbar } from 'react-bootstrap';
import Logo from '../../../assets/logonova.png';

import './NavBar.css'

export default function NavBar(props) {
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   axios.get('/users/me')
  //     .then((res) => setUser(res.data))
  //     .catch((err) => history.push('/'));
  // });

  const history = useHistory();
  function handleLogout() {
    axios.get('/users/logout');
    history.push('/');
  }
  return (
    // <Nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //   <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    //     a
    //   </div>
    // </Nav>

    <div className='NavBar'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              width='120px'
              height='100px'
              className='d-inline-block align-top'
              alt=''
            />
          </Link>
        </Navbar.Brand>


      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="LinkNavBar" href="#home">Home</Nav.Link>
          <Nav.Link className="LinkNavBar" href="#pricing" to='/perfil'>Perfil</Nav.Link>
        </Nav>
        
        <Nav className="grupoUsuario">
          <Button variant="warning" onClick={() => handleLogout()}>Sair</Button>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}