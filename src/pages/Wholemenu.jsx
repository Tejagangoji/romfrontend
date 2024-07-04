import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Wholemenu() {
    const [products, setproducts] = useState([]);
    const biryani = products.length > 0 ? products.filter(item => item.category === "biryani") : [];
    const burger = products.length > 0 ? products.filter(item => item.category === "burger") : [];
    const breakfast = products.length > 0 ? products.filter(item => item.category === "breakfast") : [];
    const milkshakes = products.length > 0 ? products.filter(item => item.category === "milkshakes") : [];

    useEffect(() => {
        axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data));
    }, []);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Menu</h1>
            <h2 style={{ paddingLeft: "1rem" }}>Biryani Menu</h2>
            <div className="menudiv">
                {biryani.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ paddingLeft: "1rem" }}>Burger Menu</h2>
            <div className="menudiv">
                {burger.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{ paddingLeft: "1rem" }}>Breakfast Menu</h2>
            <div className="menudiv">
                {breakfast.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 style={{paddingLeft: "1rem"}}>MilkShakes Menu</h2>
            <div className="menudiv">
                {milkshakes.map((item, index) => {
                    return (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='menuitemtitle'>{item.name}</div>
                                <div className='menuitemprice'>RS: {item.price} /-</div>
                                <div><button className='menuitemaddbtn'>Add</button></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}
