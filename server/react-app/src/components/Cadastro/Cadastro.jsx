import './Cadastro.css';
import FormCadastro from './FormCadastro/FormCadastro';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  axios.get('/users/me').then((res) => history.push('/cadastro'));
  return(
    <div className="Cadastro">
      <section className="sectionCadastro">
      <div className="tamanho">
        <FormCadastro/>
      </div>
      </section>
    </div>
  )
}