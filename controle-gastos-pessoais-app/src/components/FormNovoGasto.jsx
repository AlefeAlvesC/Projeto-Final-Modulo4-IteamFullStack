import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useGastos } from '../contexts/GastosContext'

function FormNovoGasto(){
  const { gastos, adicionarGasto, removerGasto } = useGastos();
  const navigate = useNavigate()


  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    valor: '',
    pago: '',
  })

  const [erroNome, setErroNome] = useState('')
  const nomeInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'nome') {
      if (value.length > 0 && value.length < 3) {
        setErroNome('O nome deve ter pelo menos 3 caracteres.')
      } else {
        setErroNome('')
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.nome.trim() || erroNome) {
      nomeInputRef.current?.focus()
      return
    }

    const novoGasto = {
      id: Date.now(),
      nome: form.nome,
      categoria: form.categoria || 'Geral',
      valor: form.valor,
      pago: false,
    }

    adicionarGasto(novoGasto);
    setForm({ nome: '', categoria: '', valor: '', pago: '' })
    setErroNome('')
    navigate('/lista-gasto')                            
  }
  
  if (!gastos) return null

  return (
    <section>
      <form onSubmit={handleSubmit} className="gasto-form">
        <div>
          <label htmlFor="nome">Nome do gasto *</label>
          <input type="text" name="nome" id="nome"
            value={form.nome}
            onChange={handleChange}
            ref={nomeInputRef}
          />
          {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>

        <div>
          <label htmlFor="categoria">Categoria</label>
          <input type="text" name="categoria" id="categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="data">Valor *</label>
          <input type="date" name="data" id="data" required
            value={form.valor}
            onChange={handleChange}
          />
        </div>
      
        <div>
          <label htmlFor="valor">Pago</label>
          <input type="number" name="valor" id="valor"
            value={form.pago}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit">Adicionar Gasto</button>
      </form>

      {/*
      {habits.length === 0 && (
        <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
      )}

      
      <ul>
        {gastos.map((gastos) => (
          <HabitCard
            key={gastos.id}
            id={gastos.id}
            nome={gastos.nome}
            descricao={gastos.descricao}
            valor={gastos.valor}
            pago={gastos.pago}
            categoria={gastos.categoria}
          />
        ))}
      </ul>
      */}
    </section>
  )

}

export default FormNovoGasto;
