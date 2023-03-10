import React from "react"

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Permaculture</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnées</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span>Économie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Nouvelles Technologies</span>
        </li>
      </ul>
    </div>
  )
}

export default Hobbies
