import Axios from "axios";

class Character {

    getCharacters = (nameStartsWith) => {
        return new Promise((resolve, reject) => {
            Axios.get('characters', {
                params: {
                    nameStartsWith: nameStartsWith,
                    orderBy: 'name',
                    ...Axios.defaults.params
                }
            })
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    }

}

export default Character;