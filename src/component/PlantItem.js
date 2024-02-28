import React from 'react';
import CareScale from './CareScale';



const PlantItem = ({ name, cover, category, id, water, light }) => {
    const displayUrl = (e) => {
        console.log(e.target.src);
    }

    return (

        <div key={id} className="card" style={{ width: '18rem' }}>
            <img onClick={displayUrl} src={`${cover}`} className="card-img-top" alt={`${name} cover`} style={{ height: '350px' }} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p><span className='bg-warning border rounded p-1' style={{ width: 'auto', height: 'auto', fontSize: '10px' }}>{category}</span></p>
                <p className="card-text"><CareScale scaleValue={water} careType='water' /></p>
                <p className="card-text"><CareScale scaleValue={light} careType='light' /></p>
            </div>
        </div>

    );
};

export default PlantItem;



