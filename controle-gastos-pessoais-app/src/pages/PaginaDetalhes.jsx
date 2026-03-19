// src/pages/PaginaDetalhes.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'

function PaginaDetalhes() {
    const { id } = useParams()
    const { gastos, removerGasto } = useGastos()
    const navigate = useNavigate()

    // useParams retorna string — comparar com === exige conversão
    const gasto = gastos.find(h => h.id === Number(id))

    if (!gasto) {
        return (
            <main className="pagina-detalhes container">
                <h1>Hábito não encontrado</h1>
                <button onClick={() => navigate('/gastos')}>
                    ← Voltar para a lista
                </button>
            </main>
        )
    }

    const metaAtingida = gasto.diasFeitos >= gasto.meta

    const handleRemover = () => {
        removerGasto(gasto.id)
        navigate('/gastos')
    }

    return (
        <main className="pagina-detalhes container">
            <button onClick={() => navigate(-1)} className="btn-voltar">
                ← Voltar
            </button>

            <div className="detalhe-card">
                <h1>{gasto.nome}</h1>
                <p>{gasto.descricao}</p>

                <ul className="detalhe-info">
                    <li><strong>Categoria:</strong> {gasto.categoria || 'Geral'}</li>
                    <li><strong>Meta semanal:</strong> {gasto.meta} dias</li>
                    <li><strong>Dias feitos:</strong> {gasto.diasFeitos}</li>
                    <li>
                        <strong>Status:</strong>{' '}
                        <span style={{ color: gasto.ativo ? '#16a34a' : '#9ca3af' }}>
                            {gasto.ativo ? '✅ Ativo' : '⏸️ Pausado'}
                        </span>
                    </li>
                    {metaAtingida && (
                        <li>🏆 Meta da semana atingida!</li>
                    )}
                </ul>

                <button onClick={handleRemover} className="btn-remover">
                    Remover Gasto
                </button>
            </div>
        </main>
    )
}

export default PaginaDetalhes