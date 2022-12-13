import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Planes(){
    const [planes, setplanes] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_planes",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                //setEmail(response.data)
                setplanes(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {planes.map((plane) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={plane.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + plane.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{plane.productCode}  {plane.productName}</Card.Title>
                                <Card.Text>
                                    {plane.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={`${plane.productCode}`} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={plane.productCode} size='lg'>Buy now!</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Planes
