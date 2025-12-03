import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StatesOfMatter from './components/StatesOfMatter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <StatesOfMatter/>
   </>
  )
}

export default App
