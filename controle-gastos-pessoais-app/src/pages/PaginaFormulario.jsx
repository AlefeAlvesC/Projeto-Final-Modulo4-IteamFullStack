import { useState } from 'react';
import FormNovoGasto from '../components/FormNovoGasto';
import FormNovaEntrada from '../components/FormNovaEntrada';

const PaginaFormulario = () => {
    const [tipoForm, setTipoForm] = useState(true);

    const chamaFormEntrada = () => {
        setTipoForm(true);
    }

    const chamaFormSaida = () => {
        setTipoForm(false);
    }



    return(
        <main>
            <section>
                <div className='nova-transa'>
                    <div className='transa-title'>
                        <h3>Nova transação</h3>
                    </div>
                    
                    <div className='type-form'>
                        <button 
                            className='button-entrada' 
                            onClick={chamaFormEntrada}
                            style={tipoForm ? {backgroundColor : "green"} : {backgroundColor : "white"} }
                        >
                            Entrada
                        </button>
                            
                        <button 
                        className='button-saida' 
                        onClick={chamaFormSaida}
                        style={!tipoForm ? {backgroundColor : "red"} : {backgroundColor : "white"}  }
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
                
            </section>
            
            
            
        </main>
    );    
}

export default PaginaFormulario