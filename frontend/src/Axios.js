import axios from 'axios'

const Instance = axios.create(
    {
        baseURL : 'http://localhost:8080/v1',
    }
)

export default Instance