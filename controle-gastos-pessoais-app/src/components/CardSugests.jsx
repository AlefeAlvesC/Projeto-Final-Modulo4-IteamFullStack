import { Link } from "react-router-dom";

const CardSugests = ({ name, children }) => {

    const categoriaParaPassar = name === "Criar com categoria personalizada" ? "" : name;

    return (
        <Link to="/adicionar" state={{ categoria: categoriaParaPassar }} className="card-sugests" style={{ textDecoration: 'none', color: 'white' }}>
            <div>
                {children} {name}
            </div>
        </Link>
    )
};

export default CardSugests;