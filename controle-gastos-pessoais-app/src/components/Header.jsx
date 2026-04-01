import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use'

const Header = () => {
    const menu = useRef(null);
    const menuBtn = useRef(null);
    const [abrirMenu, setAbrirMenu] =  useState(false);

    const toggleMenu = () => {
        setAbrirMenu(!abrirMenu);
    }

    
    useClickAway(menu, () => {
        if(menuBtn.current && !menuBtn.current.contains(event.target)) {
            setAbrirMenu(false);
        }
        
    });


    window.addEventListener('resize', () => setAbrirMenu(false));

    return(
        <header >
            <div className="header-logo">
                <strong>Gerenciador de Gastos</strong>
                {/*<p className="header-logo">Gerenciador dos seus Gastos Pessoais</p>*/}
            </div>
            <nav ref={menu} className={abrirMenu ? "header-nav aberto": "header-nav"}>
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

            <button ref={menuBtn} className='button-burger' onClick={toggleMenu}><i className='fa-solid fa-bars'></i></button>
        </header>
    );
};

export default Header;

