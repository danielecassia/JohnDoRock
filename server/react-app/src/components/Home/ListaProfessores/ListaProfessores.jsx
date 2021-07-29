import { ListGroup } from 'react-bootstrap'
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
        <Link to={`${match.path}/user/${element.id}`} style={{ textDecoration: 'none' }} >
            <ListGroup.Item>{element.name}</ListGroup.Item>
        </Link>
    
    if(professores) loadedProffs = professores.map(UserToListGroupItem);

    return(
        <ListGroup >
            {loadedProffs}
        </ListGroup>
    )
};