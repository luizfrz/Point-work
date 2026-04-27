import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import WorkedHours from './components/WorkedHours'

function App() {
  const [records, setRecords] = useState([])
  
  return (
    <Routes>
      <Route path="/" element={<Home records={records} setRecords={setRecords} />} />
      <Route path="/workedhours" element={<WorkedHours records={records} />} />
    </Routes>
  )
}

export default App
