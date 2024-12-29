import axios from "axios"

const HOST="http://localhost:7000/api"
const axiosService=axios.create({
    baseURL:HOST
})

export default axiosService