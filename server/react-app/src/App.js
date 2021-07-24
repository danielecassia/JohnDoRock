import axios from 'axios';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './components/Login/Login';
import './App.css';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"> 
            <Login />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
