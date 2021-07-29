import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useRouteMatch, Link} from 'react-router-dom'
import axios from 'axios'

import './ListaAlunos.css'

export default function ListaAlunos(){

    const match = useRouteMatch();
    const [alunos, setAlunos] = useState(false);

        useEffect(() => {
            axios.get('/users/ultimosalunos')
            .then((res) => setAlunos(res.data))
            .catch((err) => console.log(err.response))
        }, []);

    let loadedListAlunos = [];
    const UserToListGroupItem = (element, index) =>
    <Link to={`${match.path}/user/${element.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{element.name}</Card.Title>
            </Card.Body>
        </Card>    
    </Link>

    
    if(alunos) loadedListAlunos = alunos.map(UserToListGroupItem);

    return(loadedListAlunos);
};