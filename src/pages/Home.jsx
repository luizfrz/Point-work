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

  const entrada = records.filter(r => r.type?.toLowerCase() === "entrada").length
  const pausa = records.filter(r => r.type?.toLowerCase() === "pausa").length
  const saida = records.filter(r => r.type?.toLowerCase() === "saída").length


  const chartData = {
    labels: ["entrada", "pausa", "saida"],
    datasets: [
      {
        data: [
          entrada,
          pausa,
          saida
        ],
        backgroundColor: ["#12a712", "#c7aa08","#ca2557"],
        borderWidth:1,
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
        <button  className="Clear" onClick={Clear}> Limpar os Registros </button>
      </div>

 
      <div className='General'>
        <h1>Visão geral</h1>
        <div>
          <h2> Pontos batido no dia </h2>
          <Doughnut  data={chartData} />
        </div>
        <br/>
        <div>
          <span> Total de registros: {records.length}</span>
        </div>
      </div>

      <div className='Last'>
        <h1> Últimos registros</h1>
        {records.length > 0 ? (
          <ul >
            {records.slice(-5).map((record, index) => (
              <li className='Records' key={index}> 
                {record.type}- {formatTime(record.time)}
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