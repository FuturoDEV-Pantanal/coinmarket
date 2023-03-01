import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Cotacoes from './pages/Cotacoes';
import Relatorios from './pages/Relatorios';
import Usuarios from './pages/Usuarios';
import './App.css';


function App() {
  return ( 

    <BrowserRouter>
      <div className="App">
        
        <Cabecalho />

        <Routes>

          <Route path="/" element= { <Cotacoes /> } />
          <Route path="usuarios" element= { <Usuarios /> } />
          <Route path="relatorios" element= { <Relatorios /> } />
         
        </Routes>
        
        <Rodape />

      </div>
    </BrowserRouter>
  );
}

export default App;
