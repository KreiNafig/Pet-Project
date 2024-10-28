import React from 'react'
import news1 from '../img/news1.png';
import news2 from '../img/news2.png';
import news3 from '../img/news3.png';
import {Link} from 'react-router-dom';

export const News = () => {
  return (
    <div className="news">
            <div className="container">
                <div className="news__title">Новости</div>
                <div className="news__body">
                    <div className="news__row">
                        <div className="news__column">
                            <div className="news__item">
                                <div className="news__image"><img src={news1} alt="News 1" /></div>
                                <div className="news__text">НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления…</div>
                                <div className="news__bottom__row">
                                    <div className="news__ready"><Link to="/newsText" className="news__ready__h">Читать далее</Link></div>
                                    <div className="news__date">20.07.2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="news__column">
                            <div className="news__item">
                                <div className="news__image"><img src={news2} alt="News 2" /></div>
                                <div className="news__text">Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!</div>
                                <div className="news__bottom__row">
                                    <div className="news__ready"><Link to="/newsText" className="news__ready__h">Читать далее</Link></div>
                                    <div className="news__date">18.07.2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="news__column">
                            <div className="news__item">
                                <div className="news__image"><img src={news3} alt="News 3" /></div>
                                <div className="news__text">Перенос сроков проведения запланированных работ в 2020 году</div>
                                <div className="news__bottom__row">
                                    <div className="news__ready"><Link to="/newsText" className="news__ready__h">Читать далее</Link></div>
                                    <div className="news__date">20.06.2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
