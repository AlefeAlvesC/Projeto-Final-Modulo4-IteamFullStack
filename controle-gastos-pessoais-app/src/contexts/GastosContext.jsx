import { createContext, useContext , useState, useEffect} from "react";


export const GastosContext = createContext(null);

export const GastosProvider = ({children}) => {
    conts [gastos, setGastos] = useState(() => {
        const stored = localStorage.getItem('meus-gastos');

        if (!stored) return [
            
        ]

    });
} 


//Hook useGastos personalidos que permite a utilização do contexto
export const useGastos = () =>  {
    useContext(GastosContext);
}