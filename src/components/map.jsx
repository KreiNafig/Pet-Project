import React from 'react'
import map from '../img/map.png';

export const Map = () => {
  return (
    <div className="map">
            <div className="container">
                <div className="map__title">Представительства</div>
                <div className="map__img"><img src={map} alt="Map" /></div>
            </div>
        </div>
  )
}
