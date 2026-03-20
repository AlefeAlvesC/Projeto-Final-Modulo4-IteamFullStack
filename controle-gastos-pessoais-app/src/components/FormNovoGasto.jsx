import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useGastos } from '../contexts/GastosContext'

function FormNovoGasto(){
  const { gastos } = useGastos()
  const navigate = useNavigate()


  const [form, setForm] = useState({
    novoNome: '',
    novaDescricao: '',
    novaCategoria: '',
    novoValor: '',
    novoPago: '',
  })
  const [erroNome, setErroNome] = useState('')
  const nomeInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'novoNome') {
      if (value.length > 0 && value.length < 3) {
        setErroNome('O nome deve ter pelo menos 3 caracteres.')
      } else {
        setErroNome('')
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.novoNome.trim() || erroNome) {
      nomeInputRef.current?.focus()
      return
    }

    const novoGasto = {
      id: Date.now(),
      nome: form.novoNome,
      descricao: form.novaDescricao,
      categoria: form.novaCategoria || 'Geral',
      pago: true,
      valor: novoValor,
    }

    adicionarHabit(novoGasto)
    setForm({ novoNome: '', novaDescricao: '', novaCategoria: '', novoPago: '', novoValor: '' })
    setErroNome('')
    navigate('/lista-gasto')                            
  }
  
  if (!gastos) return null

  return (
    <section>
      <form onSubmit={handleSubmit} className="gasto-form">
        <div>
          <label>
            Nome do gasto *
            <input
              type="text"
              name="novoNome"
              value={form.novoNome}
              onChange={handleChange}
              ref={nomeInputRef}
            />
          </label>
          {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              name="novaDescricao"
              value={form.novaDescricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input 
              type="text"
              name="novaCategoria"
              id="categoria"
              value={form.novaCategoria}
            />
          </label>
        </div>
        <div>
          <label>
            Valor
            <input
              type="number"
              name="novoValor"
              value={form.novoValor}
              onChange={handleChange}
            />
          </label>
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
