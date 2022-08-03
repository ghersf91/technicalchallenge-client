import axios from 'axios'

class PhoneService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }

    getPhones() {
        return this.api.get('/')
    }

    getOnePhone(id) {
        return this.api.get(`getOneProject/${id}`)
    }
}

const phonesService = new PhoneService()

export default phonesService