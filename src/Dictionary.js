import React, { useState } from "react";
import axios from "axios";
import "./Dictionary";
import DictionaryResults from "./DictionaryResults";

export default function Dictionary() {

    const [word, searchWord] = useState("");
    const [definition, getDefinition] = useState({});
function wordSearch(response) {
    console.log(response.data[0]);
    getDefinition(response.data[0].meanings[0].definitions[0].definition);


    }
    function search(event) {
     event.preventDefault();
     
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
   
     axios.get(apiUrl).then(wordSearch);
     
}
function getWord(event) {
    
    searchWord(event.target.value); }


    return (<div>
        <form onSubmit={search}>
        <input type="submit" value="search">
        </input>
        <input type="search" onChange={getWord}></input>
        </form>

        <DictionaryResults data={definition}/>
    </div>);
}