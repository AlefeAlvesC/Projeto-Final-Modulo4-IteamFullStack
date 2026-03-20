import GastoCard from './GastoCard'
import {useGastos} from '../contexts/GastosContext'

const GastosList = () => {
    const {gastos} = useGastos();

    return (
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
    ) 
};

export default GastosList;