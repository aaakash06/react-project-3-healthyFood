import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './assets/components/display'
import './App.css'
import Buttons from './assets/components/buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Calcultor</h1>
     <div className="container">


<Display></Display>
<Buttons></Buttons>
     </div>



    </>
  )
}

export default App
