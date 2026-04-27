import { useNavigate } from 'react-router-dom'
const clearall = () => setRecords([])

function Clearegister() {
  return (
    <>
      <div>
       <button className='Cleanregister' onClick={clearall}>Limpar OS REGISTROS</button>
      </div>
    </>
  )
}
export default App
