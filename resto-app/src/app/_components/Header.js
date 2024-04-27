"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'

const Header = () => {

    const [details,setDetails] = useState(null);
    const router = useRouter();
    const fetchLocalStorage =()=>{ const dataFromLocalStorage = localStorage.getItem('restaurantUser');

   if (dataFromLocalStorage) {
      setDetails(JSON.parse(dataFromLocalStorage));
    }else{
      router.push("/restaurant")
    }}

  useEffect(()=>{
    fetchLocalStorage();
  },[])

  const logout = ()=>{
    localStorage.removeItem("restaurantUser")
    router.push("/restaurant")
  }
  return (
    <nav className='header-wrap'>
      <div className='logo'>
        <p className='logo'>< span className='logo-span'>B</span>ur< span className='logo-span'>G</span>er</p>
      </div>
      <div>
        <ul className='uls'>
          <li className='lis'><Link href="#">Home</Link></li>
          <li className='lis'><Link href="#">Contact</Link></li>
           {
            details && details.email?<> <li className='lis'><Link href="#">Profile</Link></li><li className='lis'><Link href="/restaurant"><button onClick={logout} className='header-button' >Logout</button></Link></li></>:<li className='lis'><Link href="/restaurant"><button className='header-button' >Login</button></Link></li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Header
