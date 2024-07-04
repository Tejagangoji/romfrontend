import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../../styles/admin/adminlome.css'

export default function Adminhome() {
  const [product, setproduct] = useState({ name: "", image: "", price: "", category: "" });
  const [products, setproducts] = useState([]);
  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/addproduct", product).then(res => { toast(res.data) }).catch(err => toast(err.response.data))
  }
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:5000/deleteproduct/${id}`).then(res => { toast(res.data) }).catch(err => toast(err.response.data))
  }
  useEffect(() => {
    axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data))
  }, [])
  return (
    localStorage.getItem("adminlogin") ?
      <div>
        <Button variant="contained">Logout</Button>
        <Button variant="contained"><Link className='link' to={'/orders'}>Orders</Link></Button>
        <div className="addproduct">
          <form onSubmit={submitHandler}>
            <input onChange={changeHandler} type="text" placeholder='name' name='name' />
            <input onChange={changeHandler} type="text" placeholder='image' name='image' />
            <input onChange={changeHandler} type="text" placeholder='price' name='price' />
            <select onChange={changeHandler} name="category">
              <option value="">Select its category</option>
              <option value="biryani">Biryani</option>
              <option value="burger">Burger</option>
              <option value="breakfast">Breakfast</option>
              <option value="milkshakes">Milk shakes</option>
            </select>
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className='productslists'>
          {products.length > 0 && products.map((item) => {
            return (
              <div key={item._id}>
                <div className="itemimg">
                  <img className='itemproimg' src={item.image} alt="" />
                </div>
                <div className="itemdeta">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div><button onClick={() => deleteHandler(item._id)}>Delete</button></div>
                </div>
              </div>
            )
          })}
        </div>
        <ToastContainer />
      </div>
      : <Navigate to={'/adminlogin'} />
  )
}
