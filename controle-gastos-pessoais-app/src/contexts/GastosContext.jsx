import { useContext , useState, useEffect} from "react";
import { GastosContext } from "./GastosContext";

export const GastosProvider = ({children}) => {
    const [gastos, setGastos] = useState(() => {
        const stored = localStorage.getItem('meus-gastos');

        if (!stored) return [
            {id: "1", nome: "Rancho" , categoria: "Comida", valor: "500", pago: false, data: "3/20/2026"},
        ];

        try{
            return JSON.parse(stored);
        }catch{
            return [];
        }

    });

    useEffect(() => {
        localStorage.setItem("meus-gastos", JSON.stringify(gastos));
    }, [gastos])

    const adicionarGasto = (novoGasto) => {
        setGastos(prev => ([...prev, novoGasto]));
    }

    const removerGasto = (id) => {
        setGastos(prev => (prev.filter(gasto => gasto.id !== id)));
    }

    return(
        <GastosContext.Provider value={{gastos, adicionarGasto, removerGasto}}>
            {children}
        </GastosContext.Provider>
    );
} 


//Hook useGastos personalidos que permite a utilização do contexto
export const useGastos = () =>  {
    return useContext(GastosContext);
}