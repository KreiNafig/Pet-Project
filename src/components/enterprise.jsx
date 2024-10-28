import React from 'react'
import aboutOne from '../img/about__one.png';
import aboutTwo from '../img/about__two.png';

export const Enterprise = () => {
  return (
    <div className="about">
            <div className="container">
                <div className="about__title">О предприятии</div>
                <div className="about__row">
                    <div className="columns__column">
                        <div className="columns__item">
                            <div className="item__row">
                                <div className="item__body">
                                    <div className="item__text">
                                        <p>За 20 лет развития в структуре завода сформирован мощный производственный потенциал, научно-технический центр, испытательная лаборатория, современная база, учебный центр и широкая сеть региональных и международных представительств в Российской Федерации, Республике Беларусь, Узбекистане и Казахстане.</p><p>Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации серийных и разработке новых приборов, призванные в наибольшей степени удовлетворять возрастающие требования наших заказчиков.</p>
                                    </div>
                                <div className="item__image"><img src={aboutOne} alt="About One" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns__column">
                        <div className="columns__item">
                            <div className="item__row">
                                <div className="item__body">
                                    <div className="item__text__2">
                                        В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что необходимо для успешного решения задачи автоматизации технологических процессов на любом предприятии. Все средства измерения производства «ПИОНЕР» внесены в Государственный реестр СИ и имеют необходимые разрешительные документы.
                                    </div>
                                <div className="item__image"><img src={aboutTwo} alt="About Two" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
