import { useGastos } from "../contexts/GastosContext";
import { Link } from "react-router-dom";
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
                        <Link to={`/entrada/${orca.id}`} className="link-detalhes-e" key={orca.id}>
                            <EntradaCard
                                id={orca.id}
                                data={orca.data}
                                nome={orca.nome}
                                valor={orca.valor}
                            />
                        </Link>
                    ))
                }  
            </div>
        </div>
    )
};

export default EntradaList;