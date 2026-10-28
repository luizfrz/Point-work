import { useState } from 'react'

const emptyForm = { name: '', role: '', email: '' }

function Register({ employees, setEmployees, removeEmployee }) {
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const employee = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      role: form.role.trim(),
      email: form.email.trim(),
      createdAt: new Date().toISOString(),
    }
    setEmployees(prev => [...prev, employee])
    setForm(emptyForm)
  }

  const handleRemove = (employee) => {
    if (window.confirm(`Remover ${employee.name}? Os pontos dele também serão apagados.`)) {
      removeEmployee(employee.id)
    }
  }

  return (
    <div className="grid two-col">
      <section className="card">
        <h2>Cadastrar colaborador</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Cargo
            <input name="role" value={form.role} onChange={handleChange} required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </label>
          <button className="btn" type="submit">Cadastrar</button>
        </form>
      </section>

      <section className="card">
        <h2>Colaboradores <span className="badge">{employees.length}</span></h2>
        {employees.length > 0 ? (
          <ul className="list">
            {employees.map(employee => (
              <li key={employee.id} className="list-item">
                <div>
                  <strong>{employee.name}</strong>
                  <small>{employee.role}{employee.email && ` · ${employee.email}`}</small>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(employee)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">Nenhum colaborador cadastrado.</p>
        )}
      </section>
    </div>
  )
}

export default Register
