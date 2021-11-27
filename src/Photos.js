import React from "react";
import "./Photos.css";

export default function(props)  {
    if (props.photos) {
       
    return (
        <div className="photos">
            <section>
                {props.photos.map(function(photo, index) {
                    return (
                        <div className="col-3">
                        <img src={photo.src.tiny} key={index} /> 
                        </div>                   )
                })}
            </section>

        </div>);
} else { return null;}
}