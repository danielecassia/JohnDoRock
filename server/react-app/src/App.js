import axios from 'axios';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import './App.css';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
=======
          <Route path="/perfil"> 
            <Perfil />
          </Route> 
>>>>>>> 1b471ff2b6efafe8ec18687faaaf5eac8dc224b6
          <Route path="/home"> 
            <Home />
          </Route> 
          <Route path="/cadastro"> 
            <Cadastro />
          </Route> 
          <Route path="/"> 
            <Login />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
