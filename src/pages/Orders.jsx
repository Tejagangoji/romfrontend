import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Orders() {
    const [order, setorder] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getorders").then(res => { setorder(res.data) }).catch(err => toast(err.response.data));
    }, [])
    return (
        <div className='order'>
            {order.length > 0 && order.map((ord) => {
                return(
                    <div key={ord._id} className="anorder">
                        {ord.userid.name}: RS: {ord.total} /- 
                    </div>
                )
            })}
            <ToastContainer />
        </div>
    )
}
