import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [product, setProduct] = useState([])
  useEffect(()=>{
         fetch("http://localhost:3000/products")
       .then((response)=>response.json())
       .then(data =>setProduct(data))
  },[])

 const removeProduct=async (id)=>{
  const confrim = window.confirm("Delete product")
  if(confrim){
      await axios.delete("http://localhost:3000/products/"+id)
.then(()=>{
  const newProduct = product.filter(iteam=> iteam.id != id)
  setProduct(newProduct)
})
  }


 
 }
  return (
    <div className="App">
     <table width={1000} >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((iteam,index)=>{
          
          return ( <tr key={iteam.id}>
            <td>{index+1}</td>
            <td>{iteam.name}</td>
            <td>{iteam.price}</td>
            <td>
             <button onClick={ (e)=> removeProduct(iteam.id, e)} >Remove</button>
            </td>
          </tr>)
        
        })}
       
      </tbody>
     </table>
    </div>
  )
}

export default App
