// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'
import { useGastos } from '../contexts/GastosContext'
import GastosSugests from '../components/GastosSugests'
import CardResumo from '../components/CardResumo';

function PaginaInicio() {
  const { gastos , orcamento} = useGastos()

  let saldo = 0;

  let entrada = orcamento.reduce((acumula, valorAtual) => 
    acumula + Number(valorAtual.valor),
  0);

  let saida = gastos.reduce((acumula, valorAtual) => {
    return acumula + Number(valorAtual.valor);
  }, 0);
  
  saldo = entrada - saida;

  return (
    <main className="pagina-inicio">
      <section className='intro'>
        <h1>Meus Gastos Pessoais</h1>
        <br />
        <p>Seu painel de controle pessoal para gerenciar seus gastos financeiros.</p>
      </section>

      <section className='resumo'>
        < CardResumo saldo={saldo} name="Saldo"/>
        < CardResumo saldo={entrada} name="Entradas"/>
        < CardResumo saldo={saida} name="Saídas"/>
        <Link 
          to="/lista-gasto" 
          className="btn-primario" 
          style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}
        >
          Ver meus gastos →
        </Link>
      </section>
      {/* 
            <div className="resumo">
                <div className="resumo-card">
                    <strong>{gastos.length}</strong>
                    <span>Gastos Totais</span>
                </div>
            </div>
            */}
      <section className="add-nova-transa">
        <h2>Nova Movimentação de Saldo</h2>
        
        <div className='add-buttons'>
          <Link 
            to="/adicionar" 
            className='btn-entrada btn-primario' 
            style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }} 
            state={{form: "entrada"}}
          >
            Adicionar Entrada
          </Link>

          <Link 
            to="/adicionar" 
            className='btn-saida btn-primario' 
            style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }} 
            state={{form: "saida"}}
          >
            Adicionar Saída
          </Link>
        </div>
        
        <GastosSugests />
      </section>
      

    </main>
  )
}

export default PaginaInicio
