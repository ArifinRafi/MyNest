import './App.css'
import { NavbarSimple } from './components/NewNavbar'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './assets/pages/Services'

function App() {

  return (
    <div className="text-3xl ">
      <NavbarSimple></NavbarSimple>
      <Home></Home>
      <Services></Services>
      
    </div>
  )
}

export default App
