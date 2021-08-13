import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import './FormAddProfessor.css'

export default function FormAddProfessor(){

    const history = useHistory();
    let { id } = useParams();
    const [formValues, setFormValues] = useState({
        professor: '',
      })
    
      const inputChange = (event) => {
        if(event.target.name === "professor")
          setFormValues({...formValues, professor: event.target.value})
      }
    
      function handleSubmit(event){
        console.log(formValues);
        event.preventDefault();
        axios.put(`/users/addprofessor/${id}`, formValues)
        .then((res) => history.push(`/perfil/${id}`))
        // .then((res => console.log(res)))
        .catch((err) => alert(err.message));
      }

    const [professores, setProfessores] = useState(false);

    useEffect(() => {
        axios.get('/users/professores')
        .then(
            (res) => setProfessores(res.data))
        .catch((err) => console.log(err.response))
    }, []); 


    let loadedProffs = [];
    const UserToListGroupItem = (element, index) =>
        <option value={element.id}>{element.name}</option>

    
    if(professores) loadedProffs = professores.map(UserToListGroupItem);

    return(
        <Form method="POST" onSubmit={handleSubmit} className="formAtualizar">
            <h5>Selecione o professor:</h5>
            
            <select name="professor" id="selectProfessor" required onChange={inputChange}>
                <option value=""> </option>
                {loadedProffs}
            </select> 

            <div className="botoesFormPerfil">
                <Button variant="primary" type="submit">Salvar</Button>
                <Button variant="danger"><Link to={`/perfil/${id}`}>Cancelar</Link></Button>       
            </div>
        </Form>
      )
};