import React from 'react';
import '../styles/Banner.css';
import leaf from '../assets/leaf.png'

const Banner = () => {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={leaf} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
};

export default Banner;