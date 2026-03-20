// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'
import GastosSugests from '../components/GastosSugests'

function PaginaInicio() {
    const { gastos } = useGastos()

    return (
        <main className="pagina-inicio container">
            <h1>Meus Gastos Pessoais</h1>
            <p>Seu painel de controle pessoal para gerenciar seus gastos financeiros.</p>

            {/* 
            <div className="resumo">
                <div className="resumo-card">
                    <strong>{gastos.length}</strong>
                    <span>Gastos Totais</span>
                </div>
            </div>
            */}
            <GastosSugests />
            

            <Link to="/lista-gasto" className="btn-primario" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Ver meus gastos →
            </Link>
        </main>
    )
}

export default PaginaInicio
