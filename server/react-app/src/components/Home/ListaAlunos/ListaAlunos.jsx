import { ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import './ListaAlunos.css'

export default function ListaAlunos(){

    const match = useRouteMatch();
    const [alunos, setAlunos] = useState(false);

        useEffect(() => {
            axios.get('/users')
            .then((res) => setAlunos(res.data))
            .catch((err) => console.log(err.response))
        }, []);

    // else if(props.show === 'professores'){
    //     useEffect(() => {
    //         axios.get('/users')
    //         .then((res) => setLista(res.data))  
    //         .catch((err) => console.log(err.response))
    //     }, []); 
    // }

    let loadedListAlunos = [];
    const UserToListGroupItem = (element, index) => 
        <Link to={`${match.path}/user/${element.id}`}>
            <ListGroup.Item>{element.name}</ListGroup.Item>
        </Link>
    
    if(alunos) loadedListAlunos = alunos.map(UserToListGroupItem);

    return(
        <ListGroup >
            {loadedListAlunos}
        </ListGroup>
    )
};