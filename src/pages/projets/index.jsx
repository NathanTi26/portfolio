/*import Collapse from "../../components/collapse";*/
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import ApartmentsDatas from '../../assets/data/projets.json'
import React from 'react'
import '../../css/style.scss'



function Projets() {
  const { id } = useParams()
  const data = ApartmentsDatas.find((data) => data.id === id)
  if (!data) {
    return <Error />
  }
  return (
    <main>
      <div className="main-content">
      <Slideshow
        pictures={data.pictures}
        picturesLength={data.pictures.length}
      />
      <article className="apartment-details">
        <div className="details-left">
          <h2 className="apartment-title">{data.title}</h2>
          <p className="apartment-location">{data.location}</p>

        </div>

      </article>
      <article className="apartment-information">
        <div className="collapse-left">
          <Collapse
            collapseTitle={<h2 className="collapse-title">Description du projet</h2>}
            collapseDesc={<p className="description">{data.description}</p>}
          />
        </div>
        <div className="collapse-right">
          <Collapse
            className="collapse-right"
            collapseTitle={<h2 className="collapse-title">Langages</h2>}
            collapseDesc={data.equipments.map((equipments, index) => (
              <li key={`${index}-${equipments}`} className="equipments-list">
                {equipments}
              </li>
            ))}
          />
        </div>
      </article>
      </div>
    </main>
  )
}

export default Projets