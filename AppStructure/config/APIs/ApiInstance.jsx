import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://dr-practice-app-backend.vercel.app',
})

export default ApiInstance;