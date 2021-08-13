import { Card, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './ListaAlunos.css'

export default function ListaAlunos() {

    // const match = useRouteMatch();
    const [alunos, setAlunos] = useState(false);

    useEffect(() => {
        axios.get('/users/ultimosalunos')
            .then((res) => setAlunos(res.data))
            .catch((err) => console.log(err.response))
    }, []);

    let loadedListAlunos = [];
    const UserToListGroupItem = (element, index) =>
    <Col>
        <Link to={`/perfil/${element.id}`} style={{ textDecoration: 'none' }} >
            <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {element.name} <br />
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Link>
    </Col>
 


    if (alunos) loadedListAlunos = alunos.map(UserToListGroupItem);

    return (loadedListAlunos);
};