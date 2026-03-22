// src/pages/PaginaGastos.jsx

import GastosList from '../components/GastosList'
import { useGastos } from '../contexts/GastosContext'

function PaginaGastos() {
    const {gastos} = useGastos()

    if (!gastos) return (
        <main>
            <p>Nenhum Gasto Cadastrado</p>
        </main>
    );

    return (
        <main className="pagina-gastos container">
            <h1>Meus Gastos Pessoais</h1>
            <GastosList />
            {gastos.length===0 && (<p>Nenhum Gasto Cadastrado</p>)}

            {/*Futuramente mostrar as entradas tbm*/}
        </main>
    )
}

export default PaginaGastos