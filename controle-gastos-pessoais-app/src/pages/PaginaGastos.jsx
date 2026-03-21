// src/pages/PaginaGastos.jsx

import GastosList from '../components/GastosList'
import { useGastos } from '../contexts/GastosContext'

function PaginaGastos() {
    const {gastos} = useGastos()
    return (
        <main className="pagina-gastos container">
            <h1>Meus Gastos Pessoais</h1>
            <GastosList />
            {gastos.length===0 && (<p>Nenhum Gasto Cadastrado</p>)}
        </main>
    )
}

export default PaginaGastos