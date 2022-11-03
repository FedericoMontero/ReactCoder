import React from 'react'
import logo from "../img/logo.png";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Icon from '@mui/material/Icon';



const Navbar = () => {


  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} className='logo'></img>
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
                        <a href="#" class="notification">
                        <span>Inbox</span>
                        <span class="badge">7</span>
                        </a>
                    </ul>

                </div>
            </div>
        </nav>
        <div className='Filtros'>
            <ul className='indice1'>
                <li>
                    <a href='#'>Championes</a>
                </li>
                <li>
                    <a href='#'>Remeras</a>
                </li>
                <li>
                    <a href='#'>Pantalones</a>
                </li>
            </ul>
        </div>
        <div class="cards">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto 1</Card.Title>
        <Card.Text>
          Descripcion del producto
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    </div>

    
  )
}

export default Navbar
