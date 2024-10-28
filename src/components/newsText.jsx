import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchText } from '../redux/slice/getText';
import {Link} from 'react-router-dom'

export const NewsText = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.text)
    
    useEffect(() => {
        dispatch(fetchText())
        console.log(data)
    }, [])

  return (
      <>
      <div className="contaienr">
        <div className="container">
            <div className="newsTitle">Новость</div>
            <div className="newsText">{!data ? 'Загрузка новости' : data}</div>
            <Link to="/news" className="buttonNews">Вернуться обратно</Link>
        </div>
      </div>
      </>
    )
}
