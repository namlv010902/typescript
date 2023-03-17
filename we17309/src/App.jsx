import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import axios from 'axios'
import { Route, Routes, useParams } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/Products'
import Detailproduct from './pages/Detail'
import CreatProuduct from './pages/CreatProuduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
         fetch("http://localhost:3000/products")
       .then((response)=>response.json())
       .then(data =>setProducts(data))
  },[])
 
//  const removeProduct=async (id)=>{
//   const confrim = window.confirm("Delete product")
//   if(confrim){
//       await axios.delete("http://localhost:3000/products/"+id)
// .then(()=>{
//   const newProduct = product.filter(iteam=> iteam.id != id)
//   setProduct(newProduct)
// })
//   }


 
//  }
  return (
    <div className="App">
      
     <Routes>
    <Route path='/' element={<HomePage  />}/> 
    <Route path='/product/add' element={<CreatProuduct  />}/> 
    <Route path='/products' element={<ProductPage products = {products}  setProducts={setProducts} />}/> 
    <Route path='/product/:id' element={<Detailproduct products = {products}  />}/> 

     </Routes>

    </div>
  )
}

export default App
