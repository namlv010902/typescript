import React from 'react'
import axios from 'axios';
const ProductPage = ({products,setProducts}) => {
    console.log(products);
   
 const removeProduct=async (id)=>{
  const confrim = window.confirm("Delete product")
  if(confrim){
      await axios.delete("http://localhost:3000/products/"+id)
.then(()=>{
  const newProduct = products.filter(iteam=> iteam.id != id)
  setProducts(newProduct)
})
  }


 
 }

  return (
     <div className='App'>
        <a href="./product/add"><button className="btn btn-primary">Add product</button>
</a>
     <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
  {products.map((iteam,index)=>{
          
          return ( <tr key={iteam.id}>
            <td>{index+1}</td>
            <td>{iteam.name}</td>
            <td>{iteam.price}</td>
            <td>
             <button className="btn btn-danger" onClick={ (e)=> removeProduct(iteam.id, e)} >Remove</button>
             <button className='btn btn-info'>update</button>
            </td>
          </tr>)
        
        })}
    
  </tbody>
</table>
     </div>
  )
}

export default ProductPage