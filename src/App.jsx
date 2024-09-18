import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import { Expertise } from './Components/Expertise'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Services/>
    <Expertise/>
    <Footer/>

    



    </>
  )
}

export default App
