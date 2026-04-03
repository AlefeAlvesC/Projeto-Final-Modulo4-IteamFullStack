import { useParams, useNavigate } from "react-router-dom";
import { useGastos } from "../contexts/GastosContext";

const PaginaDetalhesEntrada = () => {
    const {id} = useParams();
    const {orcamento, removerOrcamento} = useGastos();
    const navigate = useNavigate();

    const orca = orcamento.find(orca => orca.id === Number(id) );

    if(!orca) {
        return (
            <main className="pagina-detalhes">
                <h1>Orçamento não encontrado</h1>
                <p>Você pode adicionar novos orçamento na outra pagina, clique em/ voltar... </p>
                <button onClick={() => navigate('/')}
                    className="btn-voltar" 
                    style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                >
                    ← Voltar para a lista
                </button>
            </main>
        );
    }

    const handleRemover = () => {
        removerOrcamento(orca.id);
        navigate('/')
    };

    const valorBr = orca.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return (
        <main className="pagina-detalhes">
            <div className="detalhe-card">
                <h1>{orca.nome}</h1>

                <ul className="detalhe-info">
                    <li><strong>Custo: </strong>{valorBr}</li>
                </ul>
                <ul className="detalhe-info">
                    <li><strong>Data da entrada: </strong>{orca.data}</li>
                </ul>

                <div className='botoes-detalhe'>
                
                    <button onClick={() => navigate(-1)} 
                        className="btn-voltar" 
                        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                    >
                        ← Voltar
                    </button>
                    
                    <button onClick={handleRemover} className="btn-remover" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                        Remover Orcamento <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default PaginaDetalhesEntrada;