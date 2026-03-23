

function EntradaCard({id, data, nome, valor}){
  const valorBr = valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

  return (
    
    <div className='entrada-card'>
      
      <p>{data}</p>

      <p>{nome}</p>
      
      <p>{valorBr}</p>

        {/*onRemover && (
          <button onClick={onRemover} className="btn-remover-card">
            Remover <i class="fa-solid fa-trash"></i>
          </button>
        )*/}
    </div>
  )
    
}

export default EntradaCard