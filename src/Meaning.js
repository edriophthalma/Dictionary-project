import React from "react";

export default function Meaning(props) {
 console.log(props.meaning);
 return (
     <div className="properties">
         <h4>{props.meaning.partOdSpeech}</h4>
         {props.meaning.definition.map(function (definition, index) 
         {return (
             <div key={index}>
                 <h4>{definition.definition}</h4>
             </div>
         );
        })}
     </div> ); }
