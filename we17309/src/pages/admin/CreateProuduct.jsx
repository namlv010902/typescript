import React from 'react'
import { useEffect, useState } from 'react'
import { add } from '../../api/products'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as yup from "yup"

const CreatProuduct = ({ onHandAdd }) => {
  const [valueInput, setValueInput] = useState({})
  
  const navigate = useNavigate();

  const productValidate= yup.object({
    name:yup.string().required(),
    price:yup.number().required("price is a required field"),
    image:yup.string().required(),
  })
  const onHandChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    console.log({...valueInput, [name]:value});
  }

  const formSubmit = (e) => {
    e.preventDefault();
   
    productValidate.validate(valueInput, {abortEarly:false})
    .then(()=>{
      onHandAdd(valueInput)
      console.log(valueInput);
  
      toast.success("Add Successfully!", {
        position: toast.POSITION.TOP_RIGHT
      })
      // navigate("/admin/products")
    })
    .catch(({errors})=>{
      document.getElementById("nameErr").innerHTML = errors[0]
      document.getElementById("priceErr").innerHTML = errors[1]
      document.getElementById("imgErr").innerHTML = errors[2]
       console.log(errors);
      
    })
   
  }
 

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit} >
        <div className="form-group">
          <label >ProductName</label>
          <input type="text" name='name'  onChange={onHandChange} className="form-control" />
          <span id='nameErr'></span>
        </div>
        <div className="form-group">
          <label >Price</label>
          <input type="number" min={0} name='price'  onChange={onHandChange} className="form-control" />
          <span id='priceErr'></span>

        </div>
        <div className="form-group">
          <label >Image</label>
          <input type="text" name='image' onChange={onHandChange} className="form-control" id="image" />
          <span id='imgErr'></span>

        </div>
        <button type="submit" id='btn' className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default CreatProuduct