import Axios from 'axios';

import Character from './character';

const MARVAL_API_KEY = process.env.MARVEL_PUBLIC_API;
const MARVAL_BASE_URI = process.env.MARVEL_BASE_URI;

class Api {
    constructor() {
        Axios.defaults.url = MARVAL_BASE_URI;
        Axios.defaults.params = { apiKey: MARVAL_API_KEY }

        this.character = new Character();
    }
}

export default Api;