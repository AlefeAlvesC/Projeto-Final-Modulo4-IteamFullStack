import { useGastos } from "../contexts/GastosContext";
import EntradaCard from "./EntradaCard";

const EntradaList = () => {
    const {orcamento} = useGastos();

    return (
        <div className='movimento-lista'>
            <ul className='entrada-header'>
                    <li>Data</li>
                    <li>Nome</li>
                    <li>Valor</li>
            </ul>

            <div className='lista-dados'>
                {
                    orcamento.map((orca) => (
                            <EntradaCard
                                key={orca.id}
                                id={orca.id}
                                data={orca.data}
                                nome={orca.nome}
                                valor={orca.valor}
                            />
                    ))
                }  
            </div>
        </div>
    )
};

export default EntradaList;