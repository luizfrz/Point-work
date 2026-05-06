import Clock from '../components/Clock'
import { useNavigate } from 'react-router-dom'

function Point({ records, setRecords }) {
  const navigate = useNavigate()
  
  const formatTime = (date) => date.toLocaleTimeString('pt-BR')
  const addRecord = (type) => setRecords(prev => [...prev, { type, time: new Date() }])

  return (
    <div style={{ padding:0, margin:0, boxSizing:'border-box' }}>
      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <h1 style={{
           color: '#5f9ea0',
           fontSize:'25px'

        }}>Registrar Ponto <Clock/> </h1>
        
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
            onClick={() => addRecord('Entrada')}
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
            onClick={() => addRecord('Pausa')}
          >
            Pausa
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
            onClick={() => addRecord('Saída')}
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
                margin: '4px ', 
                fontFamily:'system-ui',
                padding: '10px', 
                backgroundColor: '#5f9ea0',
                color:'white',
                width:'30%',
                marginLeft:'35%',
                borderRadius: '5px',
                borderLeft: '4px solid #5f9ea0'
              }}>
                <strong>{record.type}</strong> - {formatTime(record.time)}
              </div>
            ))}
          </div>
        ) : (
          <p style={{
            color: '#d46565',
            fontSize: '20px', 
            marginLeft:'45%', 
            margin:'20px', 
            marginRight:'30px', 
            textAlign:'center' 
          }}>Nenhum registro ainda</p>
        )}
      </div>
    </div>
  )
}

export default Point