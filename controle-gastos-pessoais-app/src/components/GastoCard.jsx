import { Link } from 'react-router-dom'

function GastoCard({id, data, nome, categoria= "Geral", valor, status = false }){
  return (
    <div className='gasto-card'>
      <span>{data}</span>

      <h3>{nome}</h3>

      <span style={{ color: status ? '#16a34a' : '#9ca3af' }}>
        {status ? '✅ Pago' : '🚫Não Pago'}
      </span>
      
      <p>{valor}</p>
      
      <small>{categoria}</small>
      
      {/* Link para a página de detalhes — usa o id do hábito na URL */}
      <Link to={`/gastos/${id}`} className="btn-detalhes">
        Ver detalhes
      </Link>

        {/*onRemover && (
          <button onClick={onRemover} className="btn-remover-card">
            Remover <i class="fa-solid fa-trash"></i>
          </button>
        )*/}
    </div>
  )
    
}

export default GastoCard