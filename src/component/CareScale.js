import React from 'react';
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

const CareScale = ({ scaleValue, careType }) => {
    const scaleType =
        careType === 'light' ? (
            <img src={sun} alt='sun-icon' />
        ) : (
            <img src={water} alt='water-icon' />
        );

    const range = [1, 2, 3];

    const need = (value, type) => {
        const mot = type === 'light' ? 'd\'ensoleillement' : 'd\'arrosage';
        switch (value) {
            case 1:
                alert('cette plante a besoin de peu ' + mot);
                break;
            case 2:
                alert('cette plante a besoin de modérement ' + mot);
                break;
            case 3:
                alert('cette plante a besoin de beaucoup ' + mot);
                break;
        }

    }


    return (
        <div >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span onClick={() => need(scaleValue, careType)} key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>)
}

export default CareScale;