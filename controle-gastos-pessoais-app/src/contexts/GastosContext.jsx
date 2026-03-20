import { createContext, useContext , useState, useEffect} from "react";


export const GastosContext = createContext(null);

export const GastosProvider = ({children}) => {
    const [gastos, setGastos] = useState(() => {
        const stored = localStorage.getItem('meus-gastos');

        if (!stored) return [
            {id: "1", nome: "Rancho" , categoria: "Comida", valor: "500", pago: false}
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

    return(
        <GastosContext.Provider value={{gastos}}>
            {children}
        </GastosContext.Provider>
    );
} 


//Hook useGastos personalidos que permite a utilização do contexto
export const useGastos = () =>  {
    return useContext(GastosContext);
}