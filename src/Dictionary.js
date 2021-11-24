import React, { useState } from "react";
import axios from "axios";
import "./Dictionary";
import DictionaryResults from "./DictionaryResults";

export default function Dictionary(props) {

    const [word, searchWord] = useState("");
    const [definition, getDefinition] = useState(null);
function wordSearch(response) {
 console.log(response.data[0]);
    getDefinition(response.data[0]);


    }
    function search() { 
        
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
     axios.get(apiUrl).then(wordSearch);
     
}
function handleSubmit(event) {
    event.preventDefault();
    search();
}

function getWord(event) {
    searchWord(event.target.value); 

}


    return (<div className="mainpage">
        <section>
        <form onSubmit={handleSubmit}>
        
        <input type="search" onChange={getWord}></input>
        </form>
        </section>
        <DictionaryResults definition={definition}/>
    </div>);
}