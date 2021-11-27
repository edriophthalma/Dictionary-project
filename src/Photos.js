import React from "react";
import "./Photos.css";

export default function(props)  {
    if (props.photos) {
       
    return (
        <div className="photos">
            <section><div className="row">
                {props.photos.map(function(photo, index) {
                    return (
                        
                        <div className="col-lg-4 d-flex justify-content-center">
                        <img src={photo.src.tiny} key={index} className="img-flex" /> 
                          </div>                )
                })} </div>
            </section>

        </div>);
} else { return null;}
}