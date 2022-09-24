import React from "react";
import image from "/src/assets/icon.png"

export default function Info(props) {
    return (
        <div className="info-div">
            <img className="info-image" src={`${props.imageUrl}`}/>
            <section className="info-section">
                <p className="info-section-p">
                    <img className="info-section-img" src={image}/>
                    &nbsp;&nbsp;
                    <span className="info-location">{props.location}</span>
                    &nbsp;&nbsp;
                    <span><a className="info-location-link" href={props.googleMapsUrl} target="_blank">View on Google maps</a></span>
                </p>
                <h1 className="info-title">{props.title}</h1>
                <h4 className="info-date">{props.startDate} - {props.endDate}</h4>
                <p className="info-description">{props.description}</p>
            </section>
        </div>
    )
}