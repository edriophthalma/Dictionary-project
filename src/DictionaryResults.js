import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./DictionaryResults.css";

export default function DictionaryResults(props) {
    console.log(props.definition);
if (props.definition) {
  
    return (<div className="Results">
        <section>
<h4>{props.definition.word}</h4></section>

{props.definition.phonetics.map(function(phonetic, index) {
    return (<div key={index}> <section>
    <Phonetic phonetic={phonetic} />
    </section></div>);
})}
{props.definition.meanings.map(function(meaning, index) {
    return <div key={index}><Meaning meaning={meaning}/></div>;
})}
<section>
<h4>Origin: {props.definition.origin}</h4></section>
</div>);
} else { return null;}}