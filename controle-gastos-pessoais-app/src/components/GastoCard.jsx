import { Link } from 'react-router-dom'

function GastoCard({id, nome, categoria= "Geral", valor, pago = false }){
    return (
        <div className="gasto-card">
        <div className="gasto-card-header">
            <h3>{nome}</h3>
            <span style={{ color: ativo ? '#16a34a' : '#9ca3af' }}>
            {pago ? '✅ Pago' : '🚫Não Pago'}
        </span>
      </div>
        <p>{valor}</p>
        <small>Categoria: {categoria}</small>
      <div className="gasto-card-acoes">
        {/* Link para a página de detalhes — usa o id do hábito na URL */}
        <Link to={`/gastos/${id}`} className="btn-detalhes">
          Ver detalhes
        </Link>
        < br/>

        {onRemover && (
          <button onClick={onRemover} className="btn-remover-card">
            Remover <i class="fa-solid fa-trash"></i>
          </button>
        )}
      </div>

        </div>
    )
    
}

export default GastoCard