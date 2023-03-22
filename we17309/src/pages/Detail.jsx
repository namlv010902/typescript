import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Detailproduct = ({products}) => {
  console.log(products); 
 const  {id} = useParams()
  products.find(item => item.id === id);
// if (!check_product) {
//   const notFound = "Sản phẩm ko tồn tại"
//   console.log(notFound);

// }
// Sản phẩm với ID đã được tìm thấy, xử lý tiếp theo

 console.log(id);
 const [product, setProducts] = useState([])
 useEffect(()=>{
        fetch(`http://localhost:3000/products/${id}`)
      .then((response)=>response.json())
      .then(data =>setProducts(data))
      
 },[])

  return (
    <div>
     <h1>Name: {product.name}</h1>
     <h1>Price: {product.price}K</h1>
     <img src={product.image} width={250} alt="" />
     </div>
  )
}

export default Detailproduct