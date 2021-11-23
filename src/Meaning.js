import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
 console.log(props.meaning);
 return (<div className="results">
   
   <h4>{props.meaning.partOfSpeech}</h4>
     <p>Definition: {props.meaning.definitions[0].definition}</p>
     <p>Synonyms: <Synonyms synonyms={definition.synonyms} /></p>

    
     </div>);
}