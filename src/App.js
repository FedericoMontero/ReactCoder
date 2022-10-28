import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import navbar from './components/navigation/navbar'
import inicio from './components/pages/inicio'
import pedido from './components/pages/pedido'
import perfil from './components/pages/perfil'


function App() {
  return (
    <div className="App">
      <Router>
        <navbar/>
      </Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">eTienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#">Pedido</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>




    </div>
  );
}

export default App;
