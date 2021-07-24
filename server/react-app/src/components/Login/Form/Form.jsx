import './Form.css';
// import { Link } from 'react-router-dom';
import Logo from '../../../assets/john_do_rock_cortada.png';

export default function Form() {
  return(
    <div className="Form">
      <form method="POST">
        <div className="container2">
          <img src={Logo} 
            alt="logo"
            width="406px"
            height="313px"
            padding="0"
          />
          <br/>

          <div id="Email">
            <input type="text" name="email" placeholder="Digite seu email"
            required/>
          </div>

          <div id="Password">
            <input type="password" name="password" id="form-bottom" placeholder="Digite sua senha"
            required />
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