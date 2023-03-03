import axios from "axios";


export const paymentRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})