

function GastoCard({id, data, nome, categoria= "Geral", valor, status = false }){
  const valorBr = valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

  return (
    
    <div className='gasto-card'>
      
      <p>{data}</p>

      <p>{nome}</p>

      <p style={{ color: status ? '#16a34a' : 'rgba(213, 45, 45, 0.8)' }}>
        {status ? '✅ Pago' : '🚫Não Pago'}
      </p>
      
      <p>{valorBr}</p>
      
      <p>{categoria}</p>
      
        {/*onRemover && (
          <button onClick={onRemover} className="btn-remover-card">
            Remover <i class="fa-solid fa-trash"></i>
          </button>
        )*/}
        </div>
  )
    
}

export default GastoCard