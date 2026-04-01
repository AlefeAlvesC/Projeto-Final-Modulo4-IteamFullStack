import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import PaginaInicio from './pages/PaginaInicio'
import PaginaGastos from './pages/PaginaGastos'
import PaginaDetalhesGasto from './pages/PaginaDetalhesGasto'
import PaginaDetalhesEntrada from './pages/PaginaDetalhesEntrada'
import PaginaFormulario from './pages/PaginaFormulario'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'
function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<PaginaInicio/>}/>
        <Route path='/lista-gasto' element={<PaginaGastos/>}/>
        <Route path='/gastos/:id' element={<PaginaDetalhesGasto/>}/>
        <Route path='/entrada/:id' element={<PaginaDetalhesEntrada/>} />
        <Route path='/adicionar' element={<PaginaFormulario/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
