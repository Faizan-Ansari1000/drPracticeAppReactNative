import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'https://dr-practice-app-backend.vercel.app',
})

export default ApiInstance;
