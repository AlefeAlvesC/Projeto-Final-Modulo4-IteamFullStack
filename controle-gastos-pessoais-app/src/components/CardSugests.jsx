import { Link } from "react-router-dom";

const CardSugests = ({name, children}) => {
    return(
        <div>
            <Link to="/adicionar-gasto">{children} {name}</Link>
        </div>
    )
};

export default CardSugests;