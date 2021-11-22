import React from "react";

export default function Meaning(props) {
 console.log(props.meaning);
 return (<div className="results">
   
     <p>{props.meaning.definitions[0].definition}</p>
    
     </div>);
}
