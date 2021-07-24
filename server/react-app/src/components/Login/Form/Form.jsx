import { useState } from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/john_do_rock_cortada.png';
import axios from 'axios';

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
    .catch((err) => alert(err));
  }

  return(
    <div className="Form">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="container2">
          <img src={Logo} 
            alt="logo"
            width="406px"
            height="313px"
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
            {/* <span className="forgotpsw">
              <Link to="/"> 
                Esqueci minha senha
              </Link>
            </span> */}
          </div>
            <button type="submit">Entrar</button>
            <button type="submit">Cadastrar</button>
          
          <br className="unselectable"/>
          <br className="unselectable"/>

        </div>
      </form>
    </div>
  )
}