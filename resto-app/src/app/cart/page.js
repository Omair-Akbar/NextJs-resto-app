"use client"
import React, { useEffect, useState } from 'react'
import CustomerHeader from '../_components/CustomerHeader'
import Footer from '../_components/Footer'
import { TAX } from "../lib/constant"
import { DELIVERY_CHARGES } from '../lib/constant'

const cart = () => {
  const [itemArray, setItemArray] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [foodPrice] = useState(sumOfPrices(itemArray))
  let tax = TAX * foodPrice

  function sumOfPrices(arr) {
    let sum = 0;
    arr.forEach(item => {
      sum += item.price;
    });
    return sum;
  }
  return (
    <>
      <CustomerHeader />
      <h1 style={{ fontSize: "38px",backgroundColor:"silver", padding: "15px",color:"black" }} className='heading'>CART</h1>
      <div className='item-wrap'>
        <hr />
        {itemArray.map((item) => (<>
          <div className='item'>
            <div className='item-div1'>
              <div className='image-name'>
                <img className='food-image' src={item.path}></img>
              </div>
              <div>
                <h3>{item.name}</h3>
                <p style={{ margin: "7px 0px 7px 0px" }}>{item.description}</p>
                <button onClick={() => removeFromCart(item._id)} style={{ padding: "0px", margin: "10px 0px 0px 0px" }} className='food-button'>Remove from cart</button>
              </div>
            </div>
            <div className='price-div'>
              <p className='price'>Price : {item.price}</p>
            </div>
          </div>
          <hr />
        </>
        ))}

      </div>
      <div className='total-wrapper'>
        <div className='row'>
          <span>Food price : </span>
          <span>{foodPrice}</span>
        </div>
        <div className='row'>
          <span>Tax : </span>
          <span>{tax}</span>
        </div>
        <div className='row'>
          <span>delivery charges : </span>
          <span>{DELIVERY_CHARGES}</span>
        </div>
        <div className='row'>
          <span>Total amount : </span>
          <span>{foodPrice+tax+DELIVERY_CHARGES}</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default cart;
