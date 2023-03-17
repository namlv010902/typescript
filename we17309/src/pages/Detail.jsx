import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Detailproduct = () => {
 const  {id} = useParams()
 
 console.log(id);
 const [products, setProducts] = useState([])
 useEffect(()=>{
        fetch(`http://localhost:3000/products/${id}`)
      .then((response)=>response.json())
      .then(data =>setProducts(data))
      .catch(() => console.log("err"))
 },[])

  return (
    <div>
     <h1>Name: {products.name}</h1>
     <h1>price: {products.price}</h1>
     </div>
  )
}

export default Detailproduct