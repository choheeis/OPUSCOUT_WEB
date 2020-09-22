import axios from 'axios';

const config = axios.create({
    baseURL : 'http://13.124.1.55:3000',
    proxy: true,  
    headers : {"Content-type": "application/json",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}
})

export default config;