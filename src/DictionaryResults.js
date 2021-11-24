import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function DictionaryResults(props) {
    console.log(props.definition);
if (props.definition) {
  
    return (<div>
<h4>{props.definition.word}</h4>
{props.definition.phonetics.map(function(phonetic, index) {
    return (<div key={index}> 
    <Phonetic phonetic={phonetic} />
    </div>);
})}
{props.definition.meanings.map(function(meaning, index) {
    return <div key={index}><Meaning meaning={meaning}/></div>;
})}
<h4>Origin: {props.definition.origin}</h4>
</div>);
} else { return null;}}