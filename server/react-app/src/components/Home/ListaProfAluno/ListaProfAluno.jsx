import { ListGroup, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import './ListaProfAluno.css'

export default function Lista(props){

    const match = useRouteMatch();
    const [alunos, setAlunos] = useState(false);
    useEffect(() => {
        axios.get(`/users/profAluno/${props.userid}`)
        .then(
            (res) => setAlunos(res.data))
        .catch((err) => console.log(err.response))
    }, []); 

    let loadedProfAluno = [];
    const UserToListGroupItem = (element, index) =>
        <tr>
            <td>
                <Link to={`/perfil/${element.UserId}`} style={{ textDecoration: 'none' }} >
                   {element.name}
                </Link>
            </td>
            <td>
                <Link to={`/perfil/${element.UserId}`} style={{ textDecoration: 'none' }} >
                    {element.instrumento}

                </Link>
            </td>
        </tr>

    
    if(alunos) loadedProfAluno = alunos.map(UserToListGroupItem);

    return(
        <div className='ListaProfessores'>
            <ListGroup>
                <Table triped bordered hover>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Instrumento</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {loadedProfAluno}
                    </tbody>
                </Table>
            </ListGroup>
        </div>
    )
};