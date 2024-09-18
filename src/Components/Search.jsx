import { Fragment, useState } from "react";
import axios from 'axios';
import Result from "./Result";

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(true);
    
    const searchHandler = async (e) => {
        e.preventDefault();
        setResults([]);
        if(!searchQuery){
            return;
        }
        setResponse(true)
        setLoading(true)

    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}`)
        const characters = response.data.results;
        await setAtributes(characters)
        console.log(characters)
    } catch(error) {
        console.error("Erro na busca: ", error)
    }
    }

    const setAtributes = async (characters) => {
        try {
            const promises = characters.map(async(character) =>{
                character.homeworld = await getHomeworld(character.homeworld)
                character.species = await getSpecies(character.species)
                return character
            });
            const updatedCharacters = await Promise.all(promises);
            setResults(updatedCharacters);
            setLoading(false);

            if (updatedCharacters.length === 0) {
                setResponse(false)
            } else {
                setResponse(true)
            }
        } catch(error) {
            console.error("Erro ao buscar atributos: ", error)
        }
    }

    const getHomeworld  = async (homeWorld) =>{
        try {
            const response = await axios.get(homeWorld);
            return response.data.name
        } catch(error) {
            console.error("Erro ao buscar planeta natal: ", error)
        }
    }

    const getSpecies = async (species) => {
        try {
            const response = await axios.get(species);
            return response.data.name || "Humano";
        } catch(error) {
            console.error("Erro ao buscar Espécie: ", error)
        }
    }

    return (
        <Fragment>
            <form onSubmit={searchHandler}>
            <div className="input-group mb-3">
                <input className="form-control center"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar Personagem ..."
                type="text">
                </input>
                <button className="btn2">Buscar</button>
                </div>
            </form>
            <div id="form2">
            {!response && <p>Nenhum Resultado.</p>}
            {loading && <p>Buscando...</p>}
            {results.length > 0 && <Result character={results}/>}
            </div>
        </Fragment>
    )


}

export default Search;