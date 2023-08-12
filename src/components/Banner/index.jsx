
import './style.css'

function Banner(props) {
  if (props.page === 'home') {
    return (
      <section className="banner">
        <section className="banner-about">

        <h1>Bonjour ! Je suis </h1>
        <h2>Nathan TITECA</h2>
        <h3>Développeur Front-End Junior</h3>


        </section>
      </section>
    )
  }
}

export default Banner
