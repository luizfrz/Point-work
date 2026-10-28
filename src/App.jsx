import { Routes, Route } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage.js'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Point from './pages/Point.jsx'
import Register from './pages/Register.jsx'

function App() {
  const [employees, setEmployees] = useLocalStorage('pw:employees', [])
  const [records, setRecords] = useLocalStorage('pw:records', [])

  const removeEmployee = (id) => {
    setEmployees(prev => prev.filter(e => e.id !== id))
    setRecords(prev => prev.filter(r => r.employeeId !== id))
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home employees={employees} records={records} setRecords={setRecords} />} />
        <Route path="/point" element={<Point employees={employees} records={records} setRecords={setRecords} />} />
        <Route
          path="/register"
          element={<Register employees={employees} setEmployees={setEmployees} removeEmployee={removeEmployee} />}
        />
      </Route>
    </Routes>
  )
}

export default App
