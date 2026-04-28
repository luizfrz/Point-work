import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Point from './pages/Point.jsx'
import WorkedHours from './components/WorkedHours'

function App() {
  const [records, setRecords] = useState([])
  
  return (
    <Routes>
      <Route path="/" element={<Home records={records} setRecords={setRecords} />} />
      <Route path="/point" element={<Point records={records} setRecords={setRecords} />} />
      <Route path="/workedhours" element={<WorkedHours records={records} />} />
    </Routes>
  )
}

export default App