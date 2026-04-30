import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Point from './pages/Point.jsx'
import Register from './pages/Register.jsx'

function App() {
  const [records, setRecords] = useState([])
  
  return (
    <Routes>
      <Route path="/" element={<Home records={records} setRecords={setRecords} />} />
      <Route path="Register" element={<Register records={records} setRecords={setRecords} />} />
      <Route path="/point" element={<Point records={records} setRecords={setRecords} />} />
    </Routes>
  )
}

export default App