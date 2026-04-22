const DAILY_GOAL_MS = 12 * 3600000 

export default function WorkedHours({ records }) {
  const calcWorked = (recs) => {
    let total = 0
    let lastEntrada = null

    for (const r of recs) {
      if (r.type === 'entrada') {
        lastEntrada = r.time
      } else if ((r.type === 'saída' || r.type === 'pausa') && lastEntrada) {
        total += r.time - lastEntrada
        lastEntrada = null
      }
    }
    if (lastEntrada) total += new Date() - lastEntrada
    return total
  }

  const filterByPeriod = (period) => {
    const now = new Date()
    return records.filter(r => {
      const d = new Date(r.time)
      if (period === 'day') return d.toDateString() === now.toDateString()
      if (period === 'week') {
        const startOfWeek = new Date(now)
        startOfWeek.setDate(now.getDate() - now.getDay())
        startOfWeek.setHours(0, 0, 0, 0)
        return d >= startOfWeek
      }
      if (period === 'month') return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
  }

  const fmt = (ms) => {
    const abs = Math.abs(ms)
    const h = Math.floor(abs / 3600000)
    const m = Math.floor((abs % 3600000) / 60000)
    return `${ms < 0 ? '-' : '+'}${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}min`
  }

  const fmtWorked = (ms) => {
    const h = Math.floor(ms / 3600000)
    const m = Math.floor((ms % 3600000) / 60000)
    return `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}min`
  }

  const countDays = (recs) => {
    const days = new Set(recs.map(r => new Date(r.time).toDateString()))
    return days.size || 1
  }

  const calcBalance = (period) => {
    const recs = filterByPeriod(period)
    const worked = calcWorked(recs)
    const expected = DAILY_GOAL_MS * countDays(recs)
    return worked - expected
  }

  const periods = [
    { label: 'Hoje', key: 'day' },
    { label: 'Semana', key: 'week' },
    { label: 'Mês', key: 'month' },
  ]
  return (
    <div className="worked-hours">
      <h3>Horas Trabalhadas</h3>
      <div className="worked-grid">
        {periods.map(({ label, key }) => {
          const balance = calcBalance(key)
          return (
            <div key={key} className="worked-card">
              <span className="worked-label">{label}</span>
              <span className="worked-value">{fmtWorked(calcWorked(filterByPeriod(key)))}</span>
              <span className={`balance ${balance >= 0 ? 'positive' : 'negative'}`}>
                {fmt(balance)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
