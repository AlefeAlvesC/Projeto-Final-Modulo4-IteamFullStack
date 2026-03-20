import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGastos } from "../contexts/GastosContext";

function AdicionarEntrada() {

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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Ex: Salário"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="valor"
          placeholder="Valor"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="data"
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar Entrada</button>
      </form>
    </main>
  );
}

export default AdicionarEntrada;