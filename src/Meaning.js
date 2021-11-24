import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
 console.log(props.meaning);
 return (<div className="results">
     
   <h2>{props.meaning.partOfSpeech}</h2>
   {props.meaning.definitions.map(function (definition, index) {
       return (
        <div key={index}> 
   
     <h3>Definition: {props.meaning.definitions[0].definition}</h3>
     <p>Synonyms: <Synonyms synonyms={definition.synonyms} /></p>

    
     </div>);})}
     </div>);

}