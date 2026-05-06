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
        <button  className="Clear" onClick={Clear}> Limpar os Registros </button>
      </div>

 
      <div className='General'>
        <h1>Visão geral</h1>
        <div>
          <h2>Grafico de Pontos</h2>
        </div>
        <br/>
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
                {record.type}- {formatTime(record.time)}
              </li>
            ))}
          </ul>
        ) : (
          <p className='N-Register'>Nenhum registro ainda</p>
        )}
      </div>
      <div className="ClearAll"> 
      </div>
    </div>
  )
}

export default Home