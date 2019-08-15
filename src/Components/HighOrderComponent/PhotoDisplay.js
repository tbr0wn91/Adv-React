import React from 'react';
import HOC from './HOC';
import './HigherOrderComponent.scss'

function PhotoDisplay(props){
    const displayPhotos = props.data.map((photo, i) => {
        return (
            <div
                key={i}
                className="display-container">
                <img 
                    src={photo.download_url}
                    alt="picsum placeholders"
                />
                <h1>{props.author}</h1>
            </div>
        )
    })
    return (
        <div>
            <h1>Photo Display w/HOC</h1>
            {displayPhotos}
        </div>
    )
}

export default HOC(PhotoDisplay, "https://picsum.photos/v2/list");