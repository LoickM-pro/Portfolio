import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Form from './components/Form'

function App() {

  return (
        <div>
          <header>
            <NavBar />
          </header>

          <main>
            <Home />
            <Projects />
            <Skills />
            <Hobbies />
            <Form />
          </main>
          
          <footer>
            <Footer />
          </footer>
        </div>
  )
}

export default App
