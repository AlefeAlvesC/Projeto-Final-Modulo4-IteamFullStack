// src/pages/PaginaInicio.jsx

import { useGastos } from '../contexts/GastosContext'




// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'

function PaginaInicio() {
  const { gastos } = useGastos()

  const gastosAtivos = gastos.filter(h => h.ativo).length

  return (
    <main className="pagina-inicio">
      <h1>Meus gastos</h1>
      <p>Meus gastos tudinhos... </p>

      <div className="resumo">
        <div className="resumo-card">
          <strong>{gastos.length}</strong>
          <span>gastos cadastrados</span>
        </div>
        <div className="resumo-card">
          <strong>{gastosAtivos}</strong>
          <span>ativos agora</span>
        </div>
      </div>
            <Link to="/habitos" className="btn-primario">
        Ver meus gastos →
      </Link>
    </main>
  )
}

export default PaginaInicio
