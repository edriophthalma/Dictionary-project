import React from "react";
import Meaning from "./Meaning";

export default function DictionaryResults(props) {
    console.log(props.definition);
if (props.definition) {
  
    return (<div>
<h4>{props.definition.word}</h4>
{props.definition.meanings.map(function(meaning, index) {
    return <div key={index}><Meaning meaning={meaning}/></div>;
})}
</div>);
} else { return null;}}