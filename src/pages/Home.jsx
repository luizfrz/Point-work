import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { exportRecordsToExcel } from '../utils/exportExcel.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const types = ['Entrada', 'Pausa', 'Saída']

function Home({ employees, records, setRecords }) {
  const today = new Date().toDateString()
  const todayRecords = records.filter(r => new Date(r.time).toDateString() === today)
  const nameOf = (id) => employees.find(e => e.id === id)?.name ?? 'Removido'

  const chartData = {
    labels: types,
    datasets: [
      {
        data: types.map(type => todayRecords.filter(r => r.type === type).length),
        backgroundColor: ['#16a34a', '#d97706', '#dc2626'],
        borderWidth: 2,
      },
    ],
  }

  const handleExport = async () => {
    try {
      await exportRecordsToExcel(employees, records)
    } catch (error) {
      console.error(error)
      window.alert(`Não foi possível exportar: ${error.message}`)
    }
  }

  const clearRecords = () => {
    if (window.confirm('Apagar todos os registros de ponto?')) setRecords([])
  }

  return (
    <div className="grid">
      <div className="stats">
        <div className="card stat">
          <span className="stat-value">{employees.length}</span>
          <span className="stat-label">Colaboradores</span>
        </div>
        <div className="card stat">
          <span className="stat-value">{todayRecords.length}</span>
          <span className="stat-label">Pontos hoje</span>
        </div>
        <div className="card stat">
          <span className="stat-value">{records.length}</span>
          <span className="stat-label">Total de registros</span>
        </div>
      </div>

      <div className="grid two-col">
        <section className="card">
          <h2>Pontos batidos no dia</h2>
          {todayRecords.length > 0 ? (
            <div className="chart">
              <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          ) : (
            <p className="empty">Nenhum ponto batido hoje.</p>
          )}
        </section>

        <section className="card">
          <h2>Últimos registros</h2>
          {records.length > 0 ? (
            <ul className="list">
              {[...records].reverse().slice(0, 5).map(record => (
                <li key={record.id} className="list-item">
                  <div>
                    <strong>{nameOf(record.employeeId)}</strong>
                    <small>{record.type}</small>
                  </div>
                  <small>{new Date(record.time).toLocaleString('pt-BR')}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty">Nenhum registro ainda.</p>
          )}
          {records.length > 0 && (
            <div className="actions">
              <button className="btn btn-sm" onClick={handleExport}>
                Exportar Excel
              </button>
              <button className="btn btn-danger btn-sm" onClick={clearRecords}>Limpar registros</button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
