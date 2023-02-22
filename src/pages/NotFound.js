import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="notFound">
      <h3>Oups ! La page que vous demandez n'existe pas.</h3>
      <Link exact="true" to="/">
        <i className="fas fa-home"></i>
        <span>Retour sur la page d'accueil</span>
      </Link>
    </div>
  )
}

export default NotFound
