import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </main>
     </div>
    </>
  )
}

export default App
