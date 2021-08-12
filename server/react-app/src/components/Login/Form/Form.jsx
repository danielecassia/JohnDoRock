import { useState } from 'react';
import './Form.css';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../../../assets/john_do_rock_cortada.png';
import axios from 'axios';
import {} from 'react-bootstrap'

export default function Form() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setSenha(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    axios.post('/users/login', {email, senha}).then((res) => history.push('/home'))
    .catch((err) => alert(err.message));
  }

  return(
    <div className="Form">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="container2">
          <img src={Logo} 
            alt="logo"
            width="50%"
            height="50%"
            padding="0"
          />
          <br/>

          <div id="Email">
            <input type="text"placeholder="Digite seu email" name="email" 
            required onChange={handleEmailChange} value={email} />
          </div>

          <div id="Password">
            <input id="form-bottom" type="password" placeholder="Digite sua senha" name="password" 
            required onChange = {handlePasswordChange} value={senha}/>
          </div>
            <button type="submit"><Link>Entrar</Link></button>
            <Link to='/cadastro'><button>Cadastrar</button></Link>
          
          <br className="unselectable"/>
          <br className="unselectable"/>

        </div>
      </form>
    </div>
  )
}