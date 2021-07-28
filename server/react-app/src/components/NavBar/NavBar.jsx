import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { Nav, Button } from 'react-bootstrap';

import './NavBar.css'

const [user, setUser] = useState(false);
  useEffect(() => {
     axios.get('/users/me')
      .then((res) => setUser(res.data))
      .catch((err) => history.push('/'));
  });

export default NavBar(){
  return(
    <div className='NavBar'>
      <Nav className='flex-column'>
        <hr />
        <Nav.Item> {user.data_nasc} </Nav.Item>
        <Nav.Item> {user.name} </Nav.Item>
        <Nav.Item> {user.email} </Nav.Item>
        <Button variant="danger" onClick={() => handleLogout()}>Logout</Button> 
      </Nav>
    </div>
  )
}
