import './style.css'
import datas from '../../assets/data/projets.json'
import { Link } from 'react-router-dom'
import React from 'react'

function Card(props) {
  if (props.page === 'home') {
    return (
      <div className="cards" id="projects">
        <h1>Mes réalisations</h1>
      <div className="cards-section">

        {React.Children.toArray(
          datas.map((data) => (
            <Link to={`/projets/${data.id}`}>
              <div className="card">
                <img src={data.cover} alt={data.title} />
                <h2>{data.title}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
      </div>
    )
  }
}

export default Card
