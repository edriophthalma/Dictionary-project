import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetics);
    return  (
        <div className="listen">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Pronunciation
            </a> {props.phonetic.text}
        </div>);
}