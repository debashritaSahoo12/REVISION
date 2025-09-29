import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/weather'
import LightBoxGallery from './components/LightBoxGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LightBoxGallery/>
    </>
  )
}

export default App
