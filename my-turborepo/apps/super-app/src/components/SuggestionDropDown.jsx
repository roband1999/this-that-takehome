import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";

export default function SuggestionDropDown() {
    const api = useContext(ApiContext);

    const [input, setInput] = useState("");
    const [suggested, setSuggested] = useState([]);

    useEffect(() => {
        const fetchCharacterNames = async () => {
            if (input.length == 0) {
                setSuggested([]);
                return;
            }
            try {
                const { results } = await api.character.getCharacters(input);
                if (results) {
                    setSuggested(results.map((character) => ({
                        id: character.id,
                        name: character.name
                    })))
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchCharacterNames();
    }, [input])

    return (
        <>
            <input
                placeholder="Search your hero"
                onChange={(e) => setInput(e.target.value)}
            />
            <datalist style={{ display: 'block' }}>
                {
                    suggested.length > 0 && suggested.map((element) => (
                        <option
                            key={element.id}
                            value={element.name}
                        >
                            {element.name}
                        </option>
                    ))
                }
            </datalist>
        </>
    )

}