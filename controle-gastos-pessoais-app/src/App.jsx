import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import PaginaInicio from './pages/PaginaInicio'
import PaginaGastos from './pages/PaginaGastos'
import PaginaDetalhes from './pages/PaginaDetalhes'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<PaginaInicio/>}/>
        <Route path='/lista-gasto' element={<PaginaGastos/>}/>
        <Route path='/gastos/:id' element={<PaginaDetalhes/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
