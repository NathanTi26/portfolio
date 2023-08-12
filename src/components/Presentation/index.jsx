import './style.css'

import React from 'react'

function Presentation(props) {
  if (props.page === 'home') {
    return (
      <div className="profil">


        <div className="profil-card">

          <h2>Qui suis-je?</h2>
          
          <h3>

        Nathan Titeca, né le 25 décembre 1997 dans le Nord de la france. 
        <br></br>
        <br></br>Après un parcours classique menant à un Bac Economique et Social, je me suis lancé dans le monde du travail et après divers éxpérience dont les plus marquantes sont liés au commerce, j'ai décidé de suivre une voix qui m'avait depuis toujours passionné.
        <br></br>
        <br></br>C'est alors que j'ai commencé une formation sur la plateforme OpenClassRoom afin d'obtenir un diplome de développeur WEB de niveau Bac + 2. 


          </h3>

        </div>

        <div className="profil-card">

<h2>Mes informations</h2>
<h3><b>Adresse : </b> 11 rue du Docteur Paul Jean, 59600 Maubeuge</h3>
<h3><b>Téléphone : </b> 0623172742 </h3>
<h3><b>Email : </b> nathan.titeca26@gmail.com</h3>
<h3><b>LinkedIn : </b> X</h3>
</div>
      </div>
    )
  }
}

export default Presentation
