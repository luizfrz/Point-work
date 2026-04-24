import { useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Clock from './components/Clock'
import WorkedHours from './components/WorkedHours'
import "./styles/App.css"

function Home() {
  const [records, setRecords] = useState([])
  const navigate = useNavigate()

  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const Cleanall = () => setRecords([])
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div>
      <h2>Point Work <Clock /></h2>
      <span>Bem vindo ao Point work, Registre seu ponto!</span>
      <div>
        <button onClick={() => addRecord('entrada')}>Entrada</button>
        <button onClick={() => addRecord('pausa')}>Pausa</button>
        <button onClick={() => addRecord('saída')}>Saída</button>
        <button className='Cleanregister' onClick={Cleanall}>Limpar Registros</button>
        <button onClick={() => navigate('/workedhours')}>Horas Trab</button>
      </div>
      <h3>Registros de pontos</h3>
      {records.length > 0 && (
        <ul>
          {records.map((record, index) => (
            <li key={index} className={record.type === 'entrada' ? 'entrada' : record.type === 'pausa' ? 'pausa' : 'saida'}>
              {record.type === 'entrada' ? 'Entrada' : record.type === 'pausa' ? 'Pausa' : 'Saída'} - {formatTime(record.time)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workedhours" element={<WorkedHours records={[]} />} />
    </Routes>
  )
}

export default App
