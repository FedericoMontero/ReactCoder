import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Navbar from './components/navigation/Navbar'
import inicio from './components/pages/Inicio'
import Pedido from './components/pages/Pedido'
import perfil from './components/pages/Perfil'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
