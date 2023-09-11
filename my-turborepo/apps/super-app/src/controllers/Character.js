import Axios from "axios";

class Character {

    getCharacters = (nameStartsWith) => {
        return new Promise((resolve, reject) => {
            Axios.get('characters', {
                params: {
                    ...Axios.defaults.params,
                    nameStartsWith: nameStartsWith,
                    orderBy: name,
                }
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(res.data);
                });
        });
    }

}

export default Character;