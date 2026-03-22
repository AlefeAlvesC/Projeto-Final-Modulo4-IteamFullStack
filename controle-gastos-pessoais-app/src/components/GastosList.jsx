import GastoCard from './GastoCard'
import {useGastos} from '../contexts/GastosContext'
import { Link } from 'react-router-dom';

const GastosList = () => {
    const {gastos} = useGastos();

    return (
        <div className='movimento-lista'>
            <ul className='lista-header'>
                    <li>Data</li>
                    <li>Nome</li>
                    <li>Status</li>
                    <li>Valor</li>
                    <li>Categoria</li>
            </ul>

            <div className='lista-dados'>
                {
                    gastos.map((gasto) => (
                        <Link to={`/gastos/${gasto.id}`} className="link-detalhes" key={gasto.id}>
                            <GastoCard
                                id={gasto.id}
                                data={gasto.data}
                                nome={gasto.nome}
                                categoria={gasto.categoria}
                                valor={gasto.valor}
                                status={gasto.status}
                            />
                        </Link>
                    ))
                }  
            </div>
        </div>
    ) 
};

export default GastosList;