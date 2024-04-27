"use client"
import Header from '@/app/_components/Header'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AddUseritem from '@/app/_components/AddUseritem'
import { useState } from 'react'
import FooditemsList from '@/app/_components/FooditemsList'
import Footer from '@/app/_components/Footer'

const dashboard = () => {
  const router = useRouter();

  let [toggle , setToggle] = useState(true);

  const fetchLocalStorage = () => {
    const dataFromLocalStorage = localStorage.getItem('restaurantUser');
    if (!dataFromLocalStorage) {
      router.push("/restaurant")
    }
  }

  useEffect(() => {
    fetchLocalStorage();

  })

  return (
    <>
      <Header />
      <button className='login-button' onClick={()=>setToggle(!toggle)}>{toggle ? "Add new item":"Dashboard"}</button>
     {
      toggle? <FooditemsList/>:<AddUseritem/>
     }
     <Footer/>
    </>
  )
}

export default dashboard
