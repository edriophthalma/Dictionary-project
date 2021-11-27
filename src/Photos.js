import React from "react";
import "./Photos.css";

export default function Photos(props)  {
    if (props.photos) {
       
    return (
        <div className="photos">
            <section><div className="row">
                {props.photos.map(function(photo, index) {
                    return (
                        
                        <div className="col-lg-4 d-flex justify-content-center">
                        <img src={photo.src.tiny} key={index} className="img-flex" alt="visual examples" /> 
                          </div>                )
                })} </div>
            </section>

        </div>);
} else { return null;}
}