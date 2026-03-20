

// src/components/HabitList.jsx — só as alterações relevantes

import { useState, useRef } from "react";
import {Date, useNavigate } from "react-router-dom"; // ← adicionar
import GastoCard from "./GastoCard";
import {  useGastos } from "../contexts/GastosContext";

function GastosList() {
  const { gastos, adicionarGasto, removerGasto } = useGastos();
  const navigate = useNavigate(); // ← adicionar

  const [form, setForm] = useState({
    novoNome: "",
    novaCategoria: "",
    valor: "",
    pago: "", 
  });
  const [erroNome, setErroNome] = useState("");
  const nomeInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "novoNome") {
      if (value.length > 0 && value.length < 3) {
        setErroNome("O nome deve ter pelo menos 3 caracteres.");
      } else {
        setErroNome("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.novoNome.trim() || erroNome) {
      nomeInputRef.current?.focus();
      return;
    }

    const novoGasto = {
      id: Date.now(),
      nome: form.novoNome,
      categoria: form.novaCategoria || "Geral",
      valor: parseInt(form.valor),
      pago: form.pago,
    };

    adicionarGasto(novoGasto);
    setForm({
      novoNome: "",
      novaCategoria: "",
      valor: "",
      pago: "",
     
    });
    setErroNome("");
    navigate("/lista-gasto"); // ← redireciona após salvar
  };

  if (!gastos) return null;

  return (
    <section>
      <form onSubmit={handleSubmit} className="habit-form">
        <div>
          <label>
            Nome do Gasto*
            <input
              type="text"
              name="novoNome"
              value={form.novoNome}
              onChange={handleChange}
              ref={nomeInputRef}
            />
          </label>
          {erroNome && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>{erroNome}</p>
          )}
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              name="novaCategoria"
              value={form.novaCategoria}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Valor a pagar
            <input
              type="number"
              name="valor"
              value={form.valor}
              onChange={handleChange}
             
            />
          </label>
        </div>
        <button type="submit">Adicionar gasto</button>
      </form>

      {gastos.length === 0 && (
        <p>Nenhum gasto cadastrado ainda. Que tal começar?</p>
      )}

      <ul>
        {gastos.map((gasto) => (
          <GastoCard
            key={gasto.id}
            id={gasto.id}
            nome={gasto.nome}
            categoria={gasto.categoria}
            valor={gasto.valor}
            pago={gasto.pago}
            onRemover={() => removerGasto(gasto.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default GastosList;