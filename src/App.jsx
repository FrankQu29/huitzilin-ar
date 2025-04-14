import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ARViewer from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ARViewer></ARViewer>
    </>
  )
}

export default App
