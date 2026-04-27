import { useNavigate } from 'react-router-dom'
import Clock from '../components/Clock'
import { FaRegClock } from "react-icons/fa"
import "../styles/App.css"

function Home({ records, setRecords }) {
  const navigate = useNavigate()

  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const Cleanall = () => setRecords([])
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div>
      <div className='container'>
      <h1>Point Work <FaRegClock />  </h1>
       </div>
        <div className='Button-point'>
         <p> <Clock /> </p>
         <span>Registre seu ponto</span>
         <br/>
        <button onClick={() => addRecord('entrada')} className='pointInitial'>Entrada</button>
        <button onClick={() => addRecord('pausa')} className='pointPause'>Pausa</button>
        <button onClick={() => addRecord('saída')} className='pointExit'>Saída</button>
        <button onClick={() => navigate('/workedhours')}>Ver Horas</button>
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

export default Home
