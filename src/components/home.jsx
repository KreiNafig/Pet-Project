import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import logo from '../img/logo.png';
import line from '../img/line.png';
import logoFooter from '../img/logo__footer.png';

export const Home = () => {
  return (
    <>
    <div className="wrapper">
    <div className="content">
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="image__header">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="header__email">
                        <div className="email__text">
                            <p>По вопросам и предложениям</p><p>pionerrr@sila.ru</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="phone__text">
                            <p>Для консультаций</p><p>+7 (900) 000-00-00</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="line">
                <img src={line} alt="Line" />
                </div>
                <div className="nav">
                    <div className="nav__row">
                                <Link to="/" className="nav__text">Главная</Link>
                                <Link to="/enterprise" className="nav__text">О предприятии</Link>
                                <Link to="/news" className="nav__text">Новости</Link>
                                <Link to="/products" className="nav__text">Продукция</Link>
                                <Link to="/products" className="nav__text">Услуги</Link>
                                <Link to="/fsd" className="nav__text">Поддержка</Link>
                                <Link to="/map" className="nav__text">География поставок</Link>
                                <Link to="/contact" className="nav__text">Контакты</Link>
                                <Link to="#" className="nav__call"><p>перезвоните мне</p></Link>
                    </div>
                </div>
            </div>
        <Outlet/>
    </div>
    <footer className="footer">
        <div className="container">
            <div className="footer__body">
                    <div className="img__footer"><img src={logoFooter} alt="Footer Logo" /></div>
                <div className="footer__row">
                    <div className="footer__column__1">
                        <div className="footer__item">
                            <Link to="/" className="footer__text">Главная</Link>
                            <Link to="/enterprise" className="footer__text">О предприятии</Link>
                            <Link to="/news" className="footer__text">Новости</Link>
                            <Link to="/products" className="footer__text">Продукция</Link>
                            <Link to="/products" className="footer__text">Услуги</Link>
                        </div>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="footer__column__2">
                        <div className="footer__item">
                            <Link to="/fas" className="footer__text">Поддержка</Link>
                            <Link to="/map" className="footer__text">География поставок</Link>
                            <Link to="/contact" className="footer__text">Контакты</Link>
                        </div>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="footer__column__3">
                        <div className="footer__item">
                            <Link to="/fas" className="footer__text">Файлы</Link>
                            <Link to="/fas" className="footer__text">Поддержка</Link>
                            <Link to="#" className="footer__text">Политика конфеденциальности</Link>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__row__bottom">
                        <div className="footer__text__bottom">1994 — 2024 ООО «ПИОНЕР»</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</>
  )
}

