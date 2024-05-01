"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CustomerHeader = (props) => {

  return (
    <nav className='header-wrap'>
      <div className='logo'>
        <p className='logo'>< span className='logo-span'>B</span>ur< span className='logo-span'>G</span>er</p>
      </div>
      <div>
        <ul className='uls'>
          <li className='lis'><Link href="/">Home</Link></li>
          <li className='lis'><Link href="#">Cart(0)</Link></li>
          <li className='lis'><Link href="#">Contact us</Link></li>
          <li className='lis'><Link href="/restaurant">Add restaurant</Link></li>
          <li className='lis'><Link href="/restaurant"><button className='header-button' >Login</button></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default CustomerHeader
