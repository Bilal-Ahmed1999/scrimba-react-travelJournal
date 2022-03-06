import React from 'react'


export default function Card(props) {
    console.log(props)
    return (



        <div className='card'>
            <img src={props.imageUrl} className='card-image'></img>
            <div className='side-content'>
                <span className="location"><i className="fas fa-map-marker-alt"></i>{props.location}</span>
                <span className="map"><a href={props.googleMap} target="_blank">View on Google Maps</a></span>
                <h1>{props.title}</h1>
                <p>{props.description}.</p>
            </div>
        </div>





    )
}

