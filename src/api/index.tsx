import axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const api = axios.create({
   baseURL: baseUrl,
   params: {},
});
