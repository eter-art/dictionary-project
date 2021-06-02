// eslint-disable-next-line
import React from "react";
import "./Photos.css";

export default function Photos (props){
    if (props.photos){
    return (
    <section className="Photos">
        <div className="row"> 
    {props.photos.map(function (photo, index){
         // eslint-disable-next-line
          return (
              <div className="col-4" key={index}>
                  <a href={photo.src.original} target="-blank" rel="noreferrrer">
               <img src={photo.src.landscape} alt="" className="img-fluid" />
              </a> 
              </div>
          );
         } )}
    </div>
    </section>
    );
    }else {
        return null;
    }
   }