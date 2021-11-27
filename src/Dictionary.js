import React, { useState } from "react";
import axios from "axios";
import DictionaryResults from "./DictionaryResults";
import Photos from "./Photos";
import "./Dictionary.css";
export default function Dictionary(props) {

    const [word, searchWord] = useState("");
    const [definition, getDefinition] = useState(null);
    const [photo, getPhoto] = useState(null);
    const [loaded, putLoaded] = useState(false);

function wordSearch(response) {
 
    getDefinition(response.data[0]);


    }
    function handlepexels(response) {
        getPhoto(response.data.photos);
        

    }
    function search() { 
        
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
     axios.get(apiUrl).then(wordSearch);

     let pexelsApiKey = "563492ad6f917000010000011d2d301f220c40aeb13252eced62daaf";
     let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
     let headers = { Authorization: `Bearer ${pexelsApiKey}`};
     axios.get(pexelsApiUrl, { headers: headers }).then(handlepexels);

     
}
function handleSubmit(event) {
    event.preventDefault();
    search();
}

function getWord(event) {
    searchWord(event.target.value); 

}

function load() {
    putLoaded(true);
search();
}

if (loaded) {
    return (<div className="mainpage">
      
        <form onSubmit={handleSubmit}>
        
        <input type="Search" onChange={getWord} className="Button" placeholder="Type a word" defaultValue={props.defaultWord}></input>
        </form>
        
        <DictionaryResults definition={definition}/>
        <Photos photos={photo}/>
    </div>);
} else {
    load();
    return "...";
}
}