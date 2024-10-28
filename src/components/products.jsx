import React from 'react'
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import card4 from '../img/card4.png';
import card5 from '../img/card5.png';
import card6 from '../img/card6.png';
import {Link} from 'react-router-dom';

export const Products = () => {
  return (
    <div class="products">
            <div className="container">
                <div className="products__title">Продукция</div>
                <div className="products__body">
                    <div className="products__row">
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card1} alt="Card 1" /></div>
                                <div className="product__title">Сигнализатор уровня</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card2} alt="Card 2" /></div>
                                <div className="product__title">Датчики давления</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card3} alt="Card 3" /></div>
                                <div className="product__title">ПИД-регуляторы</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card4} alt="Card 4" /></div>
                                <div className="product__title">Калибратор давления</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card5} alt="Card 5" /></div>
                                <div className="product__title">Корректор расхода газа</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                        <div className="products__column">
                            <div className="products__item">
                                <div className="product__image"><img src={card6} alt="Card 6" /></div>
                                <div className="product__title">Манометры</div>
                                <div className="product__info"><Link to="#" className="product__info__color">Подробнее  {">"}</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
