import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-jj.firebaseio.com/'
});

export default instance;