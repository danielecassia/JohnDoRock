import { useState } from 'react';
import Logo from '../../assets/john_do_rock_cortada.png';
import React from "react";
import { InputGroup, Form, Container} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "./Cadastro.css";
import axios from 'axios';


export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cargo, setCargo] = useState('');
    const [data_nasc, setDataNasc] = useState('');
    const [nome, setNome] = useState('');
    const [instrumento, setInstrumento] = useState('');
    
    
    const history = useHistory();

    function handleEmailChange(event){
      setEmail(event.target.value);
    }
  
    function handlePasswordChange(event){
      setSenha(event.target.value);
    }

    function handleCargoChange(event){
      setCargo(event.target.value);
    }

    function handleDataNascChange(event){
      setDataNasc(event.target.value);
    }

    function handleNomeChange(event){
      setNome(event.target.value);
    }
    
    function handleInstrumentoChange(event){
      setInstrumento(event.target.value);
    }
    
    function handleSubmit(event){
      event.preventDefault();
      axios.post('/users/login', {email, senha}).then((res) => history.push('/home'))
      .catch((err) => alert(err));
    }

    return(
        <div className="FormCadastro">
            <form method="POST" onSubmit={handleSubmit}>
                <Container fluid className="container2">
                    <img src={Logo} 
                    alt="logo"
                    width="50%"
                    height="50%"
                    padding="0"
                    />
                    <br/>

                    <div id="EmailCadastro">
                        <input type="text" placeholder="Digite seu email" name="email" 
                        required onChange={handleEmailChange} value={email} />
                    </div>

                    <div id="Nome">
                        <input type="text" placeholder="Digite seu nome" name="nome" 
                        required onChange={handleNomeChange} value={nome} />
                    </div>

                    <div id="DataNascimento">
                        <input type="date" placeholder="Digite sua data de nascimento" name="data_nasc" 
                        required onChange={handleDataNascChange} value={data_nasc} />
                    </div>

                    <div id="Instrumento">
                        <input type="text" placeholder="Digite seu instrumento" name="instrumento" 
                        required onChange={handleInstrumentoChange} value={instrumento} />
                    </div>
                    
                    <div id="Cargo">
                        <select className="me-sm-2" id="inlineFormCustomSelect">
                            <option value="">Cargo</option>
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                        </select>
                    </div>

                    <div id="Senha">
                        <input id="form-bottom" type="password" placeholder="Digite sua senha" name="senha" 
                        required onChange = {handlePasswordChange} value={senha}/>
                    </div>

                    <button type="submit">Cadastrar</button>
                    
                    <br className="unselectable"/>
                    <br className="unselectable"/>

                </Container>
            </form>
        </div>
    )
}
