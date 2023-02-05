// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4

import axios from 'axios';
const BASE_URL = 'http://localhost:3005/';

export default axios.create({
    baseURL: BASE_URL
});

// Use interceptors to this Axios so that we can send the accessToken with our requiests to BAckend
// And also retry
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true,
});