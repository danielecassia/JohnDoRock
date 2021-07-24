import './Login.css';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  axios.get('/users/me').then((res) => history.push('/home'))
  .catch((err) => console.log("NAO TA LOGADO"));
  return(
    <div className="Login">
      <section className="container">
      <div className="left">
        <Welcome />
      </div>
      <div className="right">
        <Form />
      </div>
      </section>
    </div>
  )
}