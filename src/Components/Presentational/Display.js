import React from 'react';
import './Presentational.scss'

function Display(props){
    const displayPhotos = props.data.map((photo, i) => {
        return (
            <div
                key={i}
                className="display-container"
                >
                <img 
                    src={photo.download_url}
                    alt="picsum placeholders"
                />
                <h1>{photo.author}</h1>
            </div>
        )
    })
    return (
        <div>
            {displayPhotos}
        </div>
    )
}

export default Display;