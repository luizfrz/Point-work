import Clock from '../components/Clock'
import { useNavigate } from 'react-router-dom'
function Point({ records, setRecords }) {
  const navigate = useNavigate()
  
  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <h1 style={{ color: '#5f9ea0' }}>Registrar Ponto <Clock/> </h1>
        
        <div style={{ margin: '30px 0' }}>
          <button 
            style={{
              padding: '15px 30px',
              backgroundColor: '#5f9ea0',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              margin: '10px',
              cursor: 'pointer'
            }}
            onClick={() => addRecord('entrada')}
          >
            Entrada
          </button>
          
          <button 
            style={{
              padding: '15px 30px',
              backgroundColor: '#5f9ea0',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              margin: '10px',
              cursor: 'pointer'
            }}
            onClick={() => addRecord('pausa')}
          >
            Pausa
          </button>
          
          <button 
            style={{
              padding: '15px 30px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              margin: '10px',
              cursor: 'pointer'
            }}
            onClick={() => addRecord('saída')}
          >
            Saída
          </button>
        </div>
        
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#5f9ea0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          Voltar ao Home
        </button>
      </div>
      
      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(196, 0, 0, 0.1)',
        borderRadius: '10px'
      }}>
        <h3 style={{ color: '#5f9ea0' }}>Registros: {records.length}</h3>
        {records.length > 0 ? (
          <div>
            {records.map((record, index) => (
              <div key={index} style={{ 
                margin: '10px 0', 
                padding: '10px', 
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                borderLeft: '4px solid #5f9ea0'
              }}>
                <strong>{record.type}</strong> - {formatTime(record.time)}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#ec4949' }}>Nenhum registro ainda</p>
        )}
      </div>
    </div>
  )
}

export default Point