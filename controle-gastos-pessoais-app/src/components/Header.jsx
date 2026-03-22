import { NavLink } from 'react-router-dom'

const Header = () => {

    return(
        <header>
            <div className="header-logo">
                <strong>Gerenciador de Gastos</strong>
                {/*<p className="header-logo">Gerenciador dos seus Gastos Pessoais</p>*/}
            </div>
            <nav className="header-nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/lista-gasto"
                    end
                    className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
                >
                    Gastos
                </NavLink>
            </nav>

            <button className='button-burger'><i className='fa-solid fa-bars'></i></button>
        </header>
    );
};

export default Header;

