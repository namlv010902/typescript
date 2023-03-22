import HeadlessTippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css'; // optional
import { getAll } from '../../api/products';


const ProductPage = ({data, onRemove}) => {
  const [products, setProducts] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [price, setPrice] = useState("")
  const [searchValue, setSearchValue] = useState([])
  const [show,setShow] = useState(false)
  
  const fetchAPI =async ()=>{
   await  getAll().then(({data})=>setProducts(data))
   
  }

  useEffect(()=>{
        fetchAPI()
  },[])
 
  
  useEffect(()=>{

    if(searchInput=="") {
      fetchAPI()
      setSearchValue([])
    }else{
      const searchValueInput = products.filter(item =>
      item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
      setSearchValue(searchValueInput)
      
      setProducts(searchValueInput)
    }
    
  },[searchInput])
    console.log(products);
  // set lại data sau khi xóa
  useEffect(() => {
    setProducts(data)
  }, [data])
  const renderSearch =(atrrs)=>{
  return(
    <div className='searchValue'  tabIndex="-1" {...atrrs} >
      <div style={{width:"400px", padding:"0", textAlign:"left", background:"#17B794",borderRadius:"5px", maxHeight:"200px", overflowY:"scroll"} }>
      {searchValue?.map(item=>{
        return(
         <div id='hoverSearch' key={item.id} >
         <Link style={{color:"#fff",marginTop:"30px", textDecoration:"none", margin:"20px"}} to={"/product/"+item.id}>{item.name}</Link>
         </div>    
       )
      }
      )}
      </div>
      </div>
      
  )
  }

  const filterPrice=()=>{
    const value = document.getElementById("price").value
    document.getElementById("showPrice").innerHTML=value
  }
  return (
        
     <div className='App'>
        <ToastContainer />

        <a href="./products/add"><button id='add' >Add product</button>
       
</a> <br />
<input id='price' type="range" min={0} max={1000}  onChange={filterPrice}  />
<span id='showPrice'></span>
      <br />
    <form action="" id='formsearch'>                           
      <HeadlessTippy placement='bottom' theme='light'  visible={true} 
      interactive onClickOutside={()=>setShow(false) }
        render={renderSearch}
      >
      <input onFocus={()=>setShow(true)} placeholder="Search..." value={searchInput} type="search" onChange={ e => setSearchInput(e.target.value)} />
      </HeadlessTippy>
    </form>
     <table className="table table-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
  {products.map((iteam,index)=>{
        const href = `./product/update/${iteam.id}`
       
          return ( <tr key={iteam.id}>
            <td>{index+1}</td>
            <td>{iteam.name}</td>
            <td><img width={200} src={iteam.image} alt="" /></td>
            <td>{iteam.price}K</td>
            <td>
             <button id='remove'  onClick={ ()=> onRemove(iteam.id)} >Remove</button>
          <a href={href} >  <button id='edit' >Update</button></a> 
            </td>
          </tr>)
        
        })}
    
  </tbody>
</table>
     </div>
  )
}

export default ProductPage