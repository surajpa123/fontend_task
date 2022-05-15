import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cavalox from './Components/Cavalox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Cavalox/>
    </div>
  )
}

export default App
