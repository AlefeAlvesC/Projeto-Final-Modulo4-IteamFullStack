import { Link } from "react-router-dom";

const CardSugests = ({ name, children }) => {

    const categoriaParaPassar = name === "Criar com categoria personalizada" ? "" : name;

    return (
        <Link to="/adicionar" state={{ categoria: categoriaParaPassar }} className="div-nome-card" style={{ textDecoration: 'none', color: 'white' }}>
            {children} {name}
        </Link>
    )
};

export default CardSugests;