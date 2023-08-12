import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Presentation from '../../components/Presentation'
import ContactForm from '../../components/ContactForm'
import Skills from '../../components/Skills'

function Home() {
  return (
    <main>
      
      <Banner page="home" />

      <div className="main-content">
      <Presentation page="home" />
      <Card page="home" />
      <Skills page="home" />
      <ContactForm page="home" />
      </div>
    </main>
  )
}

export default Home
