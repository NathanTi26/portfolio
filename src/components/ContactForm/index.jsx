import './style.css'

import React from 'react'

function ContactForm(props) {
  if (props.page === 'home') {
    return (
      <div className="form">
        
<h1> Me contacter </h1>

<div className="form-section">
                <div className="text-form">
                    <p><a className="link" href="mailto:nathan.titeca26@gmail.com"></a></p>

                </div>
            
                <form className="formulaire" action="#contact" method="post" id = "form" name="sendmail"
                        onsubmit="return validate(event);">

                    <div className="names-input">
                        <div className="form-input form-lastname  formData">
                            <label>Nom</label>
                            <input className="text-control" type="text" id="lastname" name="lastname" placeholder="Nom"></input>
                        </div>
                        <div className="form-input form-firstname formData">
                            <label>Prénom</label>
                            <input className="text-control" type="text" id="firstname" name="firstname" placeholder="Prénom"></input>
                        </div>
                    </div>

                    <div className="form-input formData">
                        <label>Email</label>
                        <input  className="text-control" type="text" id="email" name="email" placeholder="Email"></input>
                    </div>
                    <div className="form-input formData">
                        <label>Sujet</label>
                        <input className="text-control" type="text" id="subject" name="subject" placeholder="Sujet"></input>
                    </div>
                    <div className="form-input formData">
                        <label>Votre message</label>
                        <textarea className="message text-control" id="message" name="message" placeholder="Votre message"></textarea> 
                    </div>

                    <button id="submit-message-form"  name="sendmail" value="sendmail" className="submit-message" type="submit">Envoyer mon message</button>
                </form>
            </div>
            </div>

    )
  }
}

export default ContactForm
// {React.Children.toArray(
//   datas.map((data) => (
//     <Link to={`/apartment/${data.id}`}>
//       <div className="card">
//         <img src={data.cover} alt={data.title} />
//         <h2>{data.title}</h2>
//       </div>
//     </Link>
//   ))
// )}