import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
        <div>
          <header>
            <NavBar />
          </header>

          <main>
            <Home />
          </main>
          
          <footer>
            <Footer />
          </footer>
        </div>
  )
}

export default App
