import { useState } from 'react'
import './App.css'
import Login from './componts/login'
import Signup from './componts/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Login/>
  <Signup/>
    </>
  )
}

export default App
