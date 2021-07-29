import { ListGroup, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import './ListaProfessores.css'

export default function Lista(){

//criar rota para             axios.get('/todosProfessores')

    const match = useRouteMatch();
    const [professores, setProfessores] = useState(false);

        useEffect(() => {
            axios.get('users/professores')
            .then((res) => setProfessores(res.data))
            .catch((err) => console.log(err.response))
        }, []);


    let loadedProffs = [];
    const UserToListGroupItem = (element, index) =>
        <tr>
            <td>
                <Link to={`${match.path}/user/${element.id}`} style={{ textDecoration: 'none' }} >
                    {element.id}
                </Link>
            </td>
            <td>
                <Link to={`${match.path}/user/${element.id}`} style={{ textDecoration: 'none' }} >
                   {element.name}
                </Link>
            </td>
            <td>
                <Link to={`${match.path}/user/${element.id}`} style={{ textDecoration: 'none' }} >
                    {element.email}
                </Link>
            </td>
        </tr>

    
    if(professores) loadedProffs = professores.map(UserToListGroupItem);

    return(
        <ListGroup >
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Identificação</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    </tr>
                </thead>
                <tbody> 
                    {loadedProffs}
                </tbody>
            </Table>
        </ListGroup>
    )
};