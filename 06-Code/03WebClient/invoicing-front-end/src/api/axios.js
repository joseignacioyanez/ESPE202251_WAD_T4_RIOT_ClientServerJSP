// Author: Jose Ignacio Yanez
// Based on: https://www.youtube.com/watch?v=X3qyxo_UTR4

import axios from 'axios';

export default axios.create({
    baseURL: 'http://34.127.120.76:3005/'
});