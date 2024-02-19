import './App.css'
import { NavbarSimple } from './components/NewNavbar'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './assets/pages/Services'
import Homepage from './assets/pages/Homepage'

function App() {

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Homepage></Homepage>
    </div>
  )
}

export default App
