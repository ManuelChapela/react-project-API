import React from 'react'

const GifGridItem = ( {img, keyy} ) => {

    console.log( keyy, img );
    
    return (
        <div className="card">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}

export default GifGridItem;
