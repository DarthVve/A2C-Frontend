import axios from 'axios';

const BASE_URL = import.meta.env.REACT_APP_BASE_URL;

export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json"}
});