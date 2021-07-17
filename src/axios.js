import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-mike-js.herokuapp.com'
});

export default instance
