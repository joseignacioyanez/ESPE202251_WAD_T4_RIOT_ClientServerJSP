// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4

import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3005/'
});