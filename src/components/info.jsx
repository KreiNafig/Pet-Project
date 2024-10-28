import React from 'react'
import hero from '../img/hero.png';

export const Info = () => {
  return (
    <div className="hero">
            <div className="container">
                <div className="hero__row">
                <div className="hero__title">Российский завод силовых машин</div>
                <div className="hero__text">научно-производственное предприятие, занимающееся разработкой и производством силовых машин.</div>
                </div>
                <div className="hero__image">
                <img src={hero} alt="Hero" />
                </div>
            </div>
        </div>
  )
}
