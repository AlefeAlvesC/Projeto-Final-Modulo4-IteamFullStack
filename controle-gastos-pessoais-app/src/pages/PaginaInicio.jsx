// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'
import GastosSugests from '../components/GastosSugests'
import CardInicio from '../components/CardInicio';

function PaginaInicio() {
  const { gastos , orcamento} = useGastos()

  let saldo = 0;

  let entrada = 0;

  let saida = 0;

  
  orcamento.forEach((o) => {
    entrada += Number(o.valor)
  })

  gastos.forEach((g) => {
    saida += Number(g.valor);
  });

  saldo = entrada - saida;

  return (
    <main className="pagina-inicio">
      <h1>Meus Gastos Pessoais</h1>
      <p>Seu painel de controle pessoal para gerenciar seus gastos financeiros.</p>
      <div className='div-inicio-card'>
        < CardInicio saldo ={saldo} name="Saldo total"/>
        < CardInicio saldo ={entrada} name="Entradas"/>
        < CardInicio saldo ={saida} name="Saídas"/>
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
      
      <div className='inicio-buttons'>
        <Link to="/lista-gasto" className="btn-primario" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
          Ver meus gastos →
        </Link>

        <Link to="/adicionar" className='btn-primario' style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }} >
          Adicionar Entrada
        </Link>
      </div>
    </main>
  )
}

export default PaginaInicio
