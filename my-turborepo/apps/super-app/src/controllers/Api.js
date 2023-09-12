import Axios from 'axios';

import Character from './character';

const MARVAL_API_KEY = "0fc46b6d7134b6d6868dadd01d76346d";
const MARVAL_BASE_URI = "https://gateway.marvel.com/v1/public/";

class Api {
    constructor() {
        Axios.defaults.baseURL = MARVAL_BASE_URI;
        Axios.defaults.params = { apikey: MARVAL_API_KEY }

        this.character = new Character();
    }
}

export default Api;