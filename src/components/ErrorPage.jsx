import React from 'react'
import {Link} from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <>
    <div className="error">Страница не найдена</div>
    <div className="errorCode">404</div>
    <Link to="/" className="errorButton">Вернуться обратно на Главную</Link>
    </>
  )
}
