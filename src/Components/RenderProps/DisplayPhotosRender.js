import React from 'react';

function PhotoDisplayRender(props){
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
            <h1>Photo Display w/Render Props</h1>
            {displayPhotos}
        </div>
    )
}

export default PhotoDisplayRender;