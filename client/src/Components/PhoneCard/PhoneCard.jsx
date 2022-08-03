import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useEffect } from 'react'
import phonesService from './../../services/phone.services'


function PhoneCard({ id, name, manufacturer, description }) {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{manufacturer}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    );
}

export default PhoneCard
