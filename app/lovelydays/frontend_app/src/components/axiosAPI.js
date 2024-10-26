import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/auth/',
    timeout: 5000,
    headers: {
        'Authoritzation' : 'JWT' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})