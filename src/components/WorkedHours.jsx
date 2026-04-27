function WorkedHours({ records }) {
  return (
    <div>
      <h1>Horas trabalhadas</h1>
      {records.length > 0 ? (
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {record.type} - {record.time.toLocaleTimeString('pt-BR')}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </div>
  )
}

export default WorkedHours
