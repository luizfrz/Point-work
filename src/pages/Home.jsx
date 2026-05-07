import { useNavigate } from 'react-router-dom'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/Home.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function Home({ records, setRecords }) {
  const navigate = useNavigate()
  const Clear = () => setRecords([])
  
  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  const Entrance = records.filter(r => r.type === "Entrada").length
  const Stop = records.filter(r => r.type === "Pausa").length
  const Exit = records.filter(r => r.type=== "Saída").length


  const chartData = {
    labels: ["Entrada", "Pausa", "Saída"],
    datasets: [
      {
        data: [
          Entrance,
          Stop,
          Exit 
        ],
        backgroundColor: ["#12a712", "#c7aa08","#ca2557"],
        borderWidth:1,
        respoive: true,
        maintainAspectRatio: false
      },
    ],
  };

  return (
    <div>
      <div className='container'>
        <h1>Point Work</h1>
       <div>
      <br />
    </div>
        <button onClick={() => navigate('/point')}> Registrar ponto  </button>
        <button onClick={()=> navigate('/Register')}>Cadastrar colaborador</button>
        <button className="Clear" onClick={Clear}> Limpar os Registros </button>
      </div>

 
      <div className='General'>
        <h1>Visão geral</h1>
        <div>
          <h2 className='Point-Day'> Pontos batido no dia </h2>

          <div className='Chart-container'>
             <Doughnut className='Data-Graph' data={chartData} />
          </div>

        </div>
        <br/>
        <div>
          <span> Total de registros: {records.length}</span>
        </div>
      </div>

      <div className='Last'>
        <h1> Últimos Registros</h1>
        {records.length > 0 ? (
          <ul >
            {records.slice(-5).map((record, index) => (
              <li className='Records' key={index}> 
                {record.type}: {formatTime(record.time)}
              </li>
            ))}
          </ul>
        ) : (
          <p className='N-Records'>Nenhum registro ainda</p>
        )}
      </div>
      <div className="ClearAll"> 
      </div>
    </div>
  )
}

export default Home