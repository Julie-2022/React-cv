import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/profileMoi.png" alt="profil-pic"></img>
          <h3>Julie Zebda, Ranvial</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <Link exact="true" to="/">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link exact="true" to="/competences">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </Link>
          </li>
          <li>
            <Link exact="true" to="/portfolio">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link exact="true" to="/contact">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          {/* <p>fromJulie - 2022</p> */}
          <a href="https://github.com/Julie-2022/React-cv">reactCv</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation
