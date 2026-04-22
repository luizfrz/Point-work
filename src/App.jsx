import { useState } from 'react'
import Clock from './components/Clock'
import WorkedHours from './components/WorkedHours'

import "./styles/App.css";

function Userecords() {
  const [records, setRecords] = useState([])

  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const Cleanall = () => setRecords([])
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return { records, formatTime, Cleanall, addRecord }
}
function App() {
  const {records, Cleanall, addRecord, formatTime} = Userecords()
  return (
    <>
      <div>
        <h2>Point Work<Clock/></h2>
        <span>Bem vindo ao Point work, Registre seu ponto!</span>
        <div>
          <button onClick={() => addRecord('entrada')}>Entrada</button>
          <button onClick={() => addRecord('pausa')}>Pausa</button>
          <button onClick={() => addRecord('saída')}>Saída</button>
          <button className='Cleanregister' onClick={Cleanall}>Limpar Registros</button>
        </div>
        <h3>Registros de pontos</h3>
        {records.length > 0 && (
          <div>
            <ul>
              {records.map((record, index) => (
               <li key={index} className={record.type === 'entrada' ? 'entrada' : 'saida'}>
               {record.type === 'entrada'
              ? 'Entrada'
              : record.type === 'pausa'
              ? 'Pausa'
              : 'Saída'} - {formatTime(record.time)}
            </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <h1>Horas Trabalhadas</h1>
        <WorkedHours records={records}/>
      </div>
    </>
  )
}
export default App
