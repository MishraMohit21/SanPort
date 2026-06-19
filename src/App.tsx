import { Hero } from './components/Hero'
import { About } from './components/About'
import { Companies } from './components/Companies'
import { Industries } from './components/Industries'
import { Competencies } from './components/Competencies'
import { Achievements } from './components/Achievements'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Companies />
        <Competencies />
        <Achievements />
        <Industries />
      </main>
      <Footer />
    </>
  )
}

export default App
