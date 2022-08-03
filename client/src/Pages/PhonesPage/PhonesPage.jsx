import { useState, useEffect, useContext } from "react"
import { Container } from 'react-bootstrap'
import PhoneCard from './../../Components/PhoneCard/PhoneCard'
import phonesService from './../../services/phone.services'


const PhonesPage = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        loadPhones()
    }, [])


    const loadPhones = () => {
        phonesService
            .getPhones()
            .then(({ data }) => {
                setPhones(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <h1>Browse through our phones </h1>
            <PhoneCard />

        </Container>
    )
}

export default PhonesPage