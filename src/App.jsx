import { useState } from 'react'
import './App.css'
import Clock from './components/clock'

function App() {
  const [records, setRecords] = useState([])
  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR')
  }

  const Cleanall = ( ) =>{
    if(records.length < 0 ){
      return null
    }
    else{
      return setRecords ([])
    }
  }
  const Register = () => {
    const now = new Date()
    setRecords([...records, { type: 'entrada', time: now }])
  }

  const RegisterExit = () => {
    const now = new Date()
    setRecords([...records, { type: 'saída', time: now }])
  }
 
  return (
    <>
      <div>
        <h2>Point Work <Clock/></h2>
        <span>Bem vindo ao Point work, Registre seu ponto!</span>
        <div>
          <button onClick={Register}>Registrar Entrada</button>
          <button onClick={RegisterExit}>Registrar Saída</button>
          <button className='Cleanregister' onClick={Cleanall}>Limpar Registros</button>
        </div>
        <h3>Registros de pontos</h3>
        {records.length > 0 && (
          <div>
            <ul>
              {records.map((record, index) => (
               <li key={index} className={record.type === 'entrada' ? 'entrada' : 'saida'}>
                {record.type === 'entrada' ? 'Entrada' : 'Saída'} - {formatTime(record.time)}
            </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
