import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
 return (
 <ul>
  
  {props.synonyms.map(function (synonym, index) {
    return <div key={index}>{synonym}</div>;})}
      
    
     </ul>);
} else {return null;} }
