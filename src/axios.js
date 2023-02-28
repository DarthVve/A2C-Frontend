import axios from 'axios';
import Cookies from 'js-cookie'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = Cookies.get('token');

export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    withCredentials: true
});