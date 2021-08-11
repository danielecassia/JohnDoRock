import { ListGroup, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import './ListaProfessores.css'

export default function Lista(){

    const match = useRouteMatch();
    const [professores, setProfessores] = useState(false);

    useEffect(() => {
        axios.get('/users/professores')
        .then(
            (res) => setProfessores(res.data))
        .catch((err) => console.log(err.response))
    }, []); 


    let loadedProffs = [];
    const UserToListGroupItem = (element, index) =>
        <tr>
            <td>
                <Link to={`/perfil/${element.UserId}`} style={{ textDecoration: 'none' }} >
                   {element.name}
                </Link>
            </td>
            <td>
                <Link to={`/perfil/${element.UserId}`} style={{ textDecoration: 'none' }} >
                    {element.UserId}

                </Link>
            </td>
        </tr>

    
    if(professores) loadedProffs = professores.map(UserToListGroupItem);

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
                        {loadedProffs}
                    </tbody>
                </Table>
            </ListGroup>
        </div>
    )
};