import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get, update } from '../../api/products'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const UpdateProduct = ({onHandUpdate}) => {
  
  const { id } = useParams()
  console.log(id);
  const [products, setProducts] = useState([])
  const [valueInput, setValueInput] = useState({})
  useEffect(() => {
    get(id).then(({ data }) => {
    
     setProducts(data);
     setValueInput(data)
    })
  }, [])
  const onHandChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setValueInput({...valueInput, [name]:value});
   
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    onHandUpdate(id,valueInput)
    toast.success("Update Successfully!", {
      position: toast.POSITION.TOP_RIGHT
    })
    navigate("/admin/products")
   console.log(valueInput);
  }


  const navigate = useNavigate()
 

    
   



  


  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label >ProductName</label>
          <input type="text" onChange={onHandChange} name='name'className="form-control" defaultValue={products.name} id="name" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label >Price</label>
          <input type="text" onChange={onHandChange} name="price" defaultValue={products.price} className="form-control" id="price" />

        </div>
        <br />
        <div className="form-group">
          <label >Image</label>
          <input type="text" name='image' onChange={onHandChange} defaultValue={products.image} className="form-control" id="image" />

        </div>
        <img width={250} src={products.image} alt="" /><br />
        <button type="submit" onClick={(e) => onSubmit(e)} className="btn btn-primary">Submit</button>
      </form>


    </div>
  )
}

export default UpdateProduct