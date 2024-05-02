"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CustomerHeader = (props) => {

  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cartNumber, setCartNumber] = useState(cartStorage?.length);  
  const [cartArray, setCartArray] = useState([]);
  let localCart;
  useEffect(() => {
    if (props.cartData) {
      if (cartNumber) {
        localCart = JSON.parse(localStorage.getItem('cart'))
        localCart.push(props.cartData);
        setCartArray(localCart);
        setCartNumber(cartNumber+1)
        localStorage.setItem('cart', JSON.stringify(localCart))
      } else {
        setCartNumber(1);
        localStorage.setItem('cart', JSON.stringify([props.cartData]))
      }




      // if (cartNumber) {
      //   addItemToArray(props.cartData);
      //   setCartItem(myArray);
      //   setCartNumber(cartNumber+1)
      //   localStorage.setItem('cart', JSON.stringify(myArray))

      // } else {
      //   setCartNumber(1)
      //   setCartItem([props.cartData])
      //   localStorage.setItem('cart', JSON.stringify([props.cartData]));

      // }
      
    }
  }, [props.cartData])


  return (
    <nav className='header-wrap'>
      <div className='logo'>
        <p className='logo'>< span className='logo-span'>B</span>ur< span className='logo-span'>G</span>er</p>
      </div>
      <div>
        <ul className='uls'>
          <li className='lis'><Link href="/">Home</Link></li>
          <li className='lis'><Link href="#">Cart({cartNumber ? cartNumber : 0})</Link></li>
          <li className='lis'><Link href="#">Contact us</Link></li>
          <li className='lis'><Link href="/restaurant">Add restaurant</Link></li>
          <li className='lis'><Link href="/restaurant"><button className='header-button' >Login</button></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default CustomerHeader
