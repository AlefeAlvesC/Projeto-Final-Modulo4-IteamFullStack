import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormNovoGasto from '../components/FormNovoGasto';
import FormNovaEntrada from '../components/FormNovaEntrada';

const PaginaFormulario = () => {
    const location = useLocation();
    const typeForm = location.state?.form === "entrada" ? true : false;

    const [tipoForm, setTipoForm] = useState(typeForm);

    const chamaFormEntrada = () => {
        setTipoForm(true);
    }

    const chamaFormSaida = () => {
        setTipoForm(false);
    }

    return(
        <main className='main-form'>
            <div className='nova-transa'>
                <div className='transa-title'>
                    <h3>Nova transação</h3>
                </div>
                
                <div className='type-form'>
                    <button 
                        type='button'
                        className='button-entrada' 
                        onClick={chamaFormEntrada}
                        style={
                            tipoForm ? 
                            {backgroundColor : "rgba(37, 157, 37, 0.8)"} : 
                            {backgroundColor : "white", color: "black"} }
                    >
                        Entrada
                    </button>
                        
                    <button 
                        type='button'
                        className='button-saida' 
                        onClick={chamaFormSaida}
                        style={!tipoForm ? 
                            {backgroundColor : "rgba(213, 45, 45, 0.8)"} : 
                            {backgroundColor : "white", color: "black"}  }
                    >
                        Saída
                    </button>
                </div>

                {
                    tipoForm? 
                    <FormNovaEntrada/>
                    :
                    <FormNovoGasto></FormNovoGasto>
                }
                
            </div>
        </main>
    );    
}

export default PaginaFormulario