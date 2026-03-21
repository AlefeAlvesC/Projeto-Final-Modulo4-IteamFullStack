import { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom' 
import { useGastos } from '../contexts/GastosContext'

function FormNovoGasto(){
  const { gastos, adicionarGasto, removerGasto } = useGastos();
  const navigate = useNavigate()
  const location = useLocation()
  const categoriaInicial = location.state?.categoria || ''

  const [form, setForm] = useState({
    nome: '',
    categoria: categoriaInicial,
    data: '',
    valor: '',
    status: ''
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
      data: form.data,
      status: false,
      valor:Number(form.valor),
      tipo: "saida"
    }

    adicionarGasto(novoGasto);
    setForm({ nome: '', categoria: '', data: '', valor: '', status: '' })
    setErroNome('')
    navigate('/lista-gasto')                            
  }
  
  if (!gastos) return null

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form">
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
          <label htmlFor="data">Data *</label>
          <input type="date" name="data" id="data" required
            value={form.data}
            onChange={handleChange}
          />
        </div>
      
        <div>
          <label htmlFor="valor">Valor</label>
          <input type="number" name="valor" id="valor"
            value={form.valor}
            onChange={handleChange}
            required
          />
        </div>
      
        <button type="submit">Adicionar Gasto</button>
      </form>
    </div>
  )

}

export default FormNovoGasto;
