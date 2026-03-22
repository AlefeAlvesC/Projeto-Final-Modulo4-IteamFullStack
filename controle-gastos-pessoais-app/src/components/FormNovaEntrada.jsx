import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGastos } from "../contexts/GastosContext";

function FormNovaEntrada() {

  const { adicionarOrcamento } = useGastos();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    valor: "",
    data: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaEntrada = {
      id: Date.now(),
      nome: form.nome,
      valor: Number(form.valor),
      data: form.data,
    };

    adicionarOrcamento(novaEntrada);

    navigate ("/");
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="nome">Nome do Orçamento *</label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Ex: Salário"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>        
          <label htmlFor="valor">Valor</label>
          <input
            id="valor"
            type="number"
            name="valor"
            placeholder="Valor"
            value={form.valor}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="data">Data</label>
          <input
            id="data"
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn-adicionar-entrada" type="submit">Adicionar Entrada</button>
      </form>
    </div>
  );
}

export default FormNovaEntrada;