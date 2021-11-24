import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetics);
    return  (
        <div className="listen">
            <a href={props.phonetic.audio} target="_blank">
                Pronounciation
            </a> {props.phonetic.text}
        </div>);
}