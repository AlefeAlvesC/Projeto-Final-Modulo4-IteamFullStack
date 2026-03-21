import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGastos } from "../contexts/GastosContext";

function FormNovaEntrada() {

  const { adicionarGasto } = useGastos();
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

    console.log("VALOR DIGITADO:", form.valor);  // Debug para verificar o valor digitado

    const novaEntrada = {
      id: Date.now(),
      nome: form.nome,
      categoria: "Entrada",
      data: form.data,
      valor: Number(form.valor),
      tipo: "entrada"
    };

    adicionarGasto(novaEntrada);

    navigate ("/");
  };

  return (
      <main>
      <h2>Adicionar Entrada</h2>
      <section>
      <form onSubmit={handleSubmit} className="div-form-orcamento">
        <div>
        <label htmlFor="nome">Nome do Orçamento *</label>
        <input
          type="text"
          name="nome"
          placeholder="Ex: Salário"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="valor">Valor: </label>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={form.valor}
          onChange={handleChange}
          required
        />
        <label htmlFor="data">Data: </label>
        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          required
        />

        <button className="btn-adicionar-entrada" type="submit">Adicionar Entrada</button>
        </div>
      </form>
      </section>
    </main>
  );
}

export default FormNovaEntrada;