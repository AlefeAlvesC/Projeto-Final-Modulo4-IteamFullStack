// src/pages/PaginaGastos.jsx

import GastosList from '../components/GastosList'
import EntradaList from '../components/EntradaList';
import { useGastos } from '../contexts/GastosContext'

function PaginaGastos() {
    const {gastos, orcamento} = useGastos()

    let tamanhoGastos = 0;
    if (gastos) {
        tamanhoGastos =  gastos.length
    }
    
    let tamanhoOrcamento = 0;
    if (orcamento) { 
        tamanhoOrcamento = orcamento.length
    }

    return (
        <main className="pagina-gastos container">
            <h1>Movimentações</h1>
            <div className='container-movimento'>
                <p className='title'>Entradas</p>  
                {
                    tamanhoOrcamento === 0 ? 
                        (<p>Nenhum Entrada Cadastrado</p>) 
                        :
                    <EntradaList />
                }  
            </div>
            
            <div className='container-movimento'>
                <p className='title'>Meus gastos</p>
                {
                    tamanhoGastos === 0 ? 
                        (<p>Nenhum Gasto Cadastrado</p>) 
                        :
                    <GastosList />
                }
                
            </div>
           

            {/*Futuramente mostrar as entradas tbm*/}
        </main>
    )
}

export default PaginaGastos