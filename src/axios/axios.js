import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://baconipsum.com/api/?type=all-meat&sentences=10'
});

export default instance