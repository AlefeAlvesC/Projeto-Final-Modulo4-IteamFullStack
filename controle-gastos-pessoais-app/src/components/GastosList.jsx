import GastoCard from './GastoCard'
import {useGastos} from '../contexts/GastosContext'

const GastosList = () => {
    const {gastos} = useGastos();

    return (
        <div>
        <ul className='div-lista'>
            <li>Data</li>
            <li>Nome</li>
            <li>Status</li>
            <li>Valor</li>
            <li>Categoria</li>
            <li>Link</li>
        </ul>
        <div>
            {
                gastos.map((gasto) => (
                    <GastoCard
                        key={gasto.id}
                        id={gasto.id}
                        data={gasto.data}
                        nome={gasto.nome}
                        categoria={gasto.categoria}
                        valor={gasto.valor}
                        status={gasto.status}
                    />
                ))
            }
            </div>
        </div>
    ) 
};

export default GastosList;