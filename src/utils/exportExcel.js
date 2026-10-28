export async function exportRecordsToExcel(employees, records) {
  const mod = await import('exceljs')
  const Workbook = mod.Workbook ?? mod.default.Workbook

  const workbook = new Workbook()
  const sheet = workbook.addWorksheet('Pontos')

  sheet.columns = [
    { header: 'Colaborador', key: 'name', width: 28 },
    { header: 'Cargo', key: 'role', width: 22 },
    { header: 'Tipo', key: 'type', width: 12 },
    { header: 'Data', key: 'date', width: 14 },
    { header: 'Hora', key: 'time', width: 12 },
  ]
  sheet.getRow(1).font = { bold: true }

  const byId = new Map(employees.map(e => [e.id, e]))

  records
    .filter(r => byId.has(r.employeeId))
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .forEach(record => {
      const employee = byId.get(record.employeeId)
      const date = new Date(record.time)
      sheet.addRow({
        name: employee.name,
        role: employee.role,
        type: record.type,
        date: date.toLocaleDateString('pt-BR'),
        time: date.toLocaleTimeString('pt-BR'),
      })
    })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `pontos-${new Date().toISOString().slice(0, 10)}.xlsx`
  link.click()
  URL.revokeObjectURL(url)
}
