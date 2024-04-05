import axios from 'axios';
import {environment} from "../environments/environment.tsx";

const api = axios.create({
    baseURL: environment.baseUrl,
});

export default api;