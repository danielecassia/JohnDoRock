import { ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import './Lista.css'

export default function Lista(){

    const match = useRouteMatch();
    const [lista, setLista] = useState(false);

        useEffect(() => {
            axios.get('/users')
            .then((res) => setLista(res.data))
            .catch((err) => console.log(err.response))
        }, []);

    // else if(props.show === 'professores'){
    //     useEffect(() => {
    //         axios.get('/users')
    //         .then((res) => setLista(res.data))  
    //         .catch((err) => console.log(err.response))
    //     }, []); 
    // }

    let loadedListUsers = [];
    const UserToListGroupItem = (element, index) => 
        <Link to={`${match.path}/user/${element.id}`}>
            <ListGroup.Item>{element.name}</ListGroup.Item>
        </Link>
    
    if(lista) loadedListUsers = lista.map(UserToListGroupItem);

    return(
        <ListGroup >
            {loadedListUsers}
        </ListGroup>
    )
};