import { useState } from 'react'
import { Link } from 'react-router-dom'
import Clock from '../components/Clock'

const types = ['Entrada', 'Pausa', 'Saída']

function Point({ employees, records, setRecords }) {
  const [employeeId, setEmployeeId] = useState('')

  const formatTime = (iso) => new Date(iso).toLocaleTimeString('pt-BR')
  const addRecord = (type) =>
    setRecords(prev => [...prev, { id: crypto.randomUUID(), employeeId, type, time: new Date().toISOString() }])

  const selected = records.filter(r => r.employeeId === employeeId)

  if (employees.length === 0) {
    return (
      <section className="card center">
        <h2>Registrar ponto</h2>
        <p className="empty">Cadastre um colaborador antes de registrar o ponto.</p>
        <Link className="btn" to="/register">Cadastrar colaborador</Link>
      </section>
    )
  }

  return (
    <div className="grid two-col">
      <section className="card center">
        <h2>Registrar ponto</h2>
        <div className="clock"><Clock /></div>

        <label className="form">
          Colaborador
          <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
            <option value="">Selecione...</option>
            {employees.map(e => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
        </label>

        <div className="actions">
          {types.map(type => (
            <button key={type} className="btn btn-lg" disabled={!employeeId} onClick={() => addRecord(type)}>
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Registros <span className="badge">{selected.length}</span></h2>
        {!employeeId ? (
          <p className="empty">Selecione um colaborador.</p>
        ) : selected.length > 0 ? (
          <ul className="list">
            {[...selected].reverse().map(record => (
              <li key={record.id} className="list-item">
                <strong>{record.type}</strong>
                <small>{formatTime(record.time)}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">Nenhum registro localizado.</p>
        )}
      </section>
    </div>
  )
}

export default Point
