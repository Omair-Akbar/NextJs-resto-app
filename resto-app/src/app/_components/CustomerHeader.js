"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CustomerHeader = (props) => {

  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cartNumber, setCartNumber] = useState(cartStorage?.length);
  const [cartArray, setCartArray] = useState([]);
  const [cartItem, setCartItem] = useState(cartStorage);



  let localCart = [];

  const updateCart = () => {
    setCartArray(JSON.parse(JSON.stringify(localCart)));
  }


  useEffect(() => {
    if (props.cartData) {
      if (cartNumber) {
        try {
          localCart = JSON.parse(localStorage.getItem('cart'))
          localCart.push(props.cartData);
          setCartNumber(cartNumber + 1);
          localStorage.setItem('cart', JSON.stringify(localCart));
          updateCart();
        } catch {
          alert(`something went wrong!`)
          window.location.reload();
        }
      } else {
        setCartNumber(1);
        localStorage.setItem('cart', JSON.stringify([props.cartData]));
        localCart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
      }

    }
  }, [props.cartData])

  useEffect(() => {
    if (props.removeCartData) {
      try {
        setCartItem(JSON.parse(localStorage.getItem('cart')))
        let localCartItem = cartItem.filter((item) => {
          return item._id != props.removeCartData
        })
        setCartItem(localCartItem)
        setCartNumber(cartNumber - 1)
        localStorage.setItem('cart', JSON.stringify(localCartItem))
        localCartItem = JSON.parse(localStorage.getItem('cart'));
        if (localCartItem.length == 0) {
          localStorage.removeItem('cart')
        }
      } catch { alert('Please wait!')
      window.location.reload();
    }

    }
  }, [props.removeCartData])

  return (
    <nav className='header-wrap'>
      <div className='logo'>
        <p className='logo'>< span className='logo-span'>B</span>ur< span className='logo-span'>G</span>er</p>
      </div>
      <div>
        <ul className='uls'>
          <li className='lis'><Link href="/">Home</Link></li>
          <li className='lis'><Link href="/cart">Cart({cartNumber ? cartNumber : 0})</Link></li>
          <li className='lis'><Link href="/contactus">Contact us</Link></li>
          <li className='lis'><Link href="/restaurant">Add restaurant</Link></li>
          <li className='lis'><Link href="/restaurant"><button className='header-button' >Login</button></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default CustomerHeader
