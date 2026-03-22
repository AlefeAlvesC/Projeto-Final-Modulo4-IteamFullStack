import { createContext, useContext, useState, useEffect } from "react";

export const GastosContext = createContext(null);

export const GastosProvider = ({ children }) => {
    const [gastos, setGastos] = useState(() => {
        const stored = localStorage.getItem('meus-gastos');

        //Gasto tem:
        //id, nome, categoria, valor, data, status

        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }

    });

    const [orcamento, setOrcamento] = useState(() => {
        const orcamStored = localStorage.getItem("meu-orcamento");

        //Orcamento deve ter:
        //id, nome, valor, data,

        try{
            return JSON.parse(orcamStored);
        }catch{
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("meus-gastos", JSON.stringify(gastos));
        localStorage.setItem("meu-orcamento", JSON.stringify(orcamento));
    }, [gastos, orcamento])

    const adicionarGasto = (novoGasto) => {
        if(gastos) {
            setGastos(prev => ([...prev, novoGasto]));
        }else{
            setGastos([novoGasto])
        }   
    };

    const removerGasto = (id) => {
        setGastos(prev => (prev.filter(gasto => gasto.id !== id)));
    };

    const adicionarOrcamento = (novoOrcamento) => {
        if(orcamento){
            setOrcamento(prev => ([...prev, novoOrcamento]));
        }else{
            setOrcamento([novoOrcamento])
        }
        
    };

    const removerOrcamento = (id) => {
        setOrcamento(prev => prev.filter(orc => orc.id !== id));
    };

    return(
        <GastosContext.Provider value={{gastos, orcamento, adicionarGasto, removerGasto, adicionarOrcamento, removerOrcamento}}>
            {children}
        </GastosContext.Provider>
    );
}


//Hook useGastos personalidos que permite a utilização do contexto
export const useGastos = () => {
    return useContext(GastosContext);
}