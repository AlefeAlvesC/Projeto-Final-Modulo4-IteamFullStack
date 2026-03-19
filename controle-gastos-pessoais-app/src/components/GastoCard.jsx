import { Link } from 'react-router-dom'

function GastoCard({id, nome, categoria= "Geral", valor, pago = false }){
    return (
        <div className="habit-card">
        <div className="habit-card-header">
            <h3>{nome}</h3>
            <span style={{ color: ativo ? '#16a34a' : '#9ca3af' }}>
            {pago ? '✅ Pago' : '🚫Não Pago'}
        </span>
      </div>
        <p>{valor}</p>
        <small>Categoria: {categoria}</small>

    </div>
    )
    
}

export default GastoCard