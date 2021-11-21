import React, { useState } from "react";
import "./Dictionary";

export default function Dictionary() {

    const [word, searchWord] = useState("");

    function search(event) {
     event.preventDefault()
     alert (`Looking for ${word}`);
    }
function getWord(event) {
    searchWord(event.target.value)
   
    
}

    return (<div>
        <form onSubmit={search}>
        <input type="submit" value="search">
        </input>
        <input type="search" onChange={getWord}></input>
        </form>
    </div>);
}