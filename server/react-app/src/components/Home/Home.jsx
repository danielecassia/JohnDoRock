import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

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
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
      setSearchTerm(event.target.value);
  };

  return(
    
    
        <div className='Home'>
          <NavBar/>
          <Container maxWidth="md">
            <div className = 'Listas'>
              <h2> Alunos </h2>
              <div className='containerAlunos'>
                <ListaAlunos/> 
              </div>


              <h2> Professores </h2>
              {/* <input type="text" placeholder="Pesquisar" value={searchTerm} onChange={handleChange}/>
              <Button variant="primary" onClick={() => handleChange()}>Pesquisar</Button> */}

              <ListaProfessores/> 
            
          
            
            </div>
          </Container> 
      </div>
  )
}