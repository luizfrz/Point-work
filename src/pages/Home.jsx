
import { useNavigate } from 'react-router-dom'
import "../styles/Home.css"

function Home({ records, setRecords }) {
  const navigate = useNavigate()
  const Clear = () => setRecords([])
  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div>
      <div className='container'>
        <h1>Point Work</h1>

       <div>
      <br />
    </div>
        <button onClick={() => navigate('/point')}> Registrar ponto  </button>
        <button onClick={()=> navigate('/Register')}>Cadastrar colaborador</button>
      </div>

 
      <div className='General'>
        <h1>Visão geral</h1>
        <br/>
        <div>
          <span> Total Colaboradores: </span>
        </div>
        <div>
          <span> Total de registros: {records.length}</span>
        </div>
      </div>

      <div className='Last'>
        <h1> Últimos registros</h1>
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