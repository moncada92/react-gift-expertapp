import React from 'react';

const GifGridItem = ({ id, title, url }) => {

    console.log(id)
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;