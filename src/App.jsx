import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Form from './components/Form'

function App() {

  return (
    <div class="scrollbar-hide md:scrollbar-default">
      <header>
        <NavBar />
      </header>
      <main>
        <section id='welcome'>
          <Welcome />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='hobbies'>
          <Hobbies />
        </section>
        <section id='contact'>
          <Form />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
