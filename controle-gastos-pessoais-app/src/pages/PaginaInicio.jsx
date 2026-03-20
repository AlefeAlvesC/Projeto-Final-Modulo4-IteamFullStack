// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'
import GastosSugests from '../components/GastosSugests'

function PaginaInicio() {
  const { gastos } = useGastos()

  let saldo = 0;

  gastos.forEach((g) => {
    if (g.tipo === "entrada") {
      saldo += Number(g.valor);
    } else {
      saldo -= Number(g.valor);
    }
  });

  console.log(gastos)

  return (
    <main className="pagina-inicio-container">
      <h1>Meus Gastos Pessoais</h1>
      <p>Seu painel de controle pessoal para gerenciar seus gastos financeiros.</p>
      <div className="bloco-inicio-txt">
        <h2>Saldo: R$ {saldo}</h2>
      </div>
      {/* 
            <div className="resumo">
                <div className="resumo-card">
                    <strong>{gastos.length}</strong>
                    <span>Gastos Totais</span>
                </div>
            </div>
            */}
      <div className="bloco-inicio-txt">
        <GastosSugests />
      </div>
      <div className='div-botão'>
        <Link to="/lista-gasto" className="btn-primario" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
          Ver meus gastos →

        </Link>

        <Link to="/adicionar-entrada" className='btn-primario' style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }} >
          Adicionar Entrada
        </Link>
      </div>
    </main>
  )
}

export default PaginaInicio
