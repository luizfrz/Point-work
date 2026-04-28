import { PiClockCountdownBold } from "react-icons/pi"
import { MdOutlineLockClock } from "react-icons/md"
import { GiArchiveRegister } from "react-icons/gi"
import { MdOutlineWork } from "react-icons/md"
import { IoIosPersonAdd } from "react-icons/io"

import { useNavigate } from 'react-router-dom'
import "../styles/App.css"

function Home({ records, setRecords }) {
  const navigate = useNavigate()
  const Clear = () => setRecords([])
  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div>
      <div className='container'>
        <h1>Point Work <PiClockCountdownBold/></h1>

       <div>
      <br />
    </div>
        <button onClick={() => navigate('/point')}>
          <MdOutlineWork/> Registrar ponto
        </button>
      </div>


      <div className='General'>
        <h1 className='Vision'>Visão geral</h1>
        <div>
          <span><IoIosPersonAdd/> Total Colaboradores: 1</span>
        </div>
        <div>
          <span><MdOutlineLockClock/> Total de registros: {records.length}</span>
        </div>
      </div>

      <div className='Last'>
        <h1><GiArchiveRegister/> Últimos registros</h1>
        {records.length > 0 ? (
          <ul>
            {records.slice(-5).map((record, index) => (
              <li key={index}>
                <strong>{record.type}</strong> - {formatTime(record.time)}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum registro ainda</p>
        )}
      </div>
      <div className="ClearAll"> 
        <button  className="Clear" onClick={Clear}>
        Limpar os Registros
      </button>
      </div>
    </div>
  )
}

export default Home