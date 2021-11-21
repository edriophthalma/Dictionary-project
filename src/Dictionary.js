import React, { useState } from "react";
import axios from "axios";
import "./Dictionary";

export default function Dictionary() {

    const [word, searchWord] = useState("");
function wordSearch(response) {
    console.log(response.data[0]);
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
    </div>);
}