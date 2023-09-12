import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";

import './SuggestionDropDown.css';

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
        <div className="suggestion-drop-down-container">
            <input
                className="suggestion-input"
                placeholder="Search your hero..."
                onChange={(e) => setInput(e.target.value)}
            />
            {suggested.length > 0 &&
                <datalist className="suggestion-data-list">
                    {
                        suggested.map((element) => (
                            <option
                                key={element.id}
                                value={element.name}
                                onClick={() => alert(element.name)}
                            >
                                {element.name}
                            </option>
                        ))
                    }
                </datalist>
            }
        </div>
    )

}