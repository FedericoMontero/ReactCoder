import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getFirestore, docs, getDocs, collection} from 'firebase/firestore';


import Navbar from './components/navigation/Navbar'
import inicio from './components/pages/Inicio'
import Pedido from './components/pages/Pedido'
import perfil from './components/pages/Perfil'
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';



function App() {
  const [allProducts, setAllProducts]=useState(null);



  useEffect(()=>{
    const db=getFirestore();
    const getProductsCollection=collection(db, 'products');
    getDocs(getProductsCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data() }));
        setAllProducts(products);
      })
  },[]);
console.log('allProducts', allProducts)






  return (
    <div className="App">
      
      {allProducts && allProducts.map((product)=>(
        <Card key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default App;
