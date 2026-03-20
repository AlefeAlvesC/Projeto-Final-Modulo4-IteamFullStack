// src/pages/PaginaGastos.jsx

import GastosList from '../components/GastosList'

function PaginaGastos() {
    return (
        <main className="pagina-gastos container">
            <h1>Meus Gastos Pessoais</h1>
            <GastosList />
        </main>
    )
}

export default PaginaGastos