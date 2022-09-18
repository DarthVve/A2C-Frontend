//THIS FILE WILL SERVE AS THE BASE_URL CONNECTING TO THE SERVER 
import axios from 'axios';
const mainAxios = axios.create({
    baseURL: 'http://localhost:3003'
});

export { mainAxios };