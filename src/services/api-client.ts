import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'ea3b6d3e7a3c4c1d90e3f63753b7e42e'
    },
 });