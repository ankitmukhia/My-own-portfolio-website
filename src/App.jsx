import { BrowserRouter as Router } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {
  return (
    <Router>
        <div className="realative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
              <Contact />
              <StarsCanvas />
        </div>
    </Router>
 
  )
}

export default App
