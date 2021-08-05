import './Cadastro.css';
import FormCadastro from './FormCadastro/FormCadastro';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  axios.get('/users/me').then((res) => history.push('/cadastro'))
  .catch((err) => console.log("NAO TA LOGADO"));
  return(
    <div className="Cadastro">
      <section className="teste">
      
      <div className="tamanho">
        <FormCadastro/>
      </div>
      </section>
    </div>
  )
}