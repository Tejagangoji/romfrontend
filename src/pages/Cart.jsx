import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Cart() {
  const [cart, setcart] = useState([]);
  const cartproducts = cart.map(item => item.productid);
  const total = cartproducts.reduce((tot, item) => {
    return Number(tot) + Number(item.price);
  }, 0);
  const placeanorder = () => {
    axios.post(`http://localhost:5000/placeanorder`, {userid: localStorage.getItem("userlogin"), products: cartproducts, total: total}).then(res => { toast(res.data);  }).catch(err => toast(err.response.data))
  }
  const deletecart = (id) => {
    axios.delete(`http://localhost:5000/removefromcart/${id}/${localStorage.getItem("userlogin")}`).then(res => { toast(res.data); window.location.reload() }).catch(err => toast(err.response.data))
  }
  useEffect(() => {
    axios.get(`http://localhost:5000/getthecartwith/${localStorage.getItem("userlogin")}`).then(res => { setcart(res.data) }).catch(err => toast(err.response.data));
  }, []);
  return (
    <div className='cart'>
      <div className='cartproducts'>
        <div className="menudiv">
          {cartproducts.map((item, index) => {
            return (
              <div className='menuitemdiv' key={index}>
                <div className='menuitemp1'>
                  <img className='menuitemp1img' src={item.image} alt="" />
                </div>
                <div>
                  <div className='menuitemtitle'>{item.name}</div>
                  <div className='menuitemprice'>RS: {item.price} /-</div>
                  <div><button onClick={() => deletecart(item._id)} className='menuitemaddbtn'>Delete</button></div>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ paddingLeft: "2rem" }}>
          <h2>Total: {total}</h2>
          <button onClick={placeanorder} className='menuitemaddbtn'>Place an order</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
