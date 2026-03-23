// src/pages/PaginaDetalhes.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'

function PaginaDetalhes() {
    const { id } = useParams()
    const { gastos, removerGasto, toggleGasto } = useGastos()
    const navigate = useNavigate()

    // useParams retorna string — comparar com === exige conversão
    const gasto = gastos.find(h => h.id === Number(id))

    if (!gasto) {
        return (
            <main className="pagina-detalhes">
                <h1>Gasto não encontrado</h1>
                <p>Você pode adicionar novos gastos na outra pagina, clique em/ voltar... </p>
                <button onClick={() => navigate('/')}>
                    ← Voltar para a lista
                </button>
            </main>
        )
    }

    const handleRemover = () => {
        removerGasto(gasto.id)
        navigate('/')
    }

    return (
        <main className="pagina-detalhes">
            <div className="detalhe-card">
                <h1>{gasto.nome}</h1>

                <ul className="detalhe-info">
                    <li><strong>Categoria: </strong> {gasto.categoria || 'Geral'}</li>
                    <li><strong>Custo: </strong>{gasto.valor}</li>
                    <li><strong>Status: </strong> {gasto.status ? "Está pago ✅" : "Pagamento pendente ⚠️"}</li>
                </ul>

                <div className='botoes-detalhe'>
                
                    <button onClick={() => navigate(-1)} 
                        className="btn-voltar" 
                        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                    >
                        ← Voltar
                    </button>

                    <button onClick={() => toggleGasto(gasto.id)} 
                        className='btn-alterar'
                        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                    >
                        Alterar Status
                    </button>
                    
                    <button onClick={handleRemover} className="btn-remover" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                        Remover Gasto <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default PaginaDetalhes