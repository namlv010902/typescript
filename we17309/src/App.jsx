import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/admin/Products'
import Detailproduct from './pages/Detail'
import CreatProuduct from './pages/admin/CreateProuduct'
import UpdateProduct from './pages/admin/Updateproduct'
import { toast } from 'react-toastify';
import { getAll, remove, add, update } from './api/products'

function App() {
  const [products, setProducts] = useState([])
  console.log(products);
  const onRemove = async (id) => {
    const confrim = window.confirm("Delete product")
    if (confrim) {
      await remove(id)
      await getAll().then(({ data }) => setProducts(data))
      toast.success("Delete Successfully!", {
        position: toast.POSITION.TOP_RIGHT

      });
    }
  }

  const onHandAdd = (products) => {
    add(products)
  }
  const onHandUpdate=(id,products)=>{
    update(id,products)
  }
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin/products/add' element={<CreatProuduct onHandAdd={onHandAdd} />} />
        <Route path='/admin/products' element={<ProductPage data={products} onRemove={onRemove} />} />
        <Route path='/product/:id' element={<Detailproduct products={products} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProduct onHandUpdate={onHandUpdate}  />} />

      </Routes>

    </div>
  )
}

export default App
