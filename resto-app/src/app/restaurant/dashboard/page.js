"use client"
import Header from '@/app/_components/Header'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AddUseritem from '@/app/_components/AddUseritem'
import { useState } from 'react'

const dashboard = () => {
  const router = useRouter();

  let [AddItem , setAddItem] = useState(false);

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
      <button onClick={()=>setAddItem(true)}>Add new item</button>
      <button onClick={()=>setAddItem(false)}>Dashboard</button>
      {
        AddItem?<AddUseritem/>:<h1>wellcome to Dashboard</h1>
      }
    </>
  )
}

export default dashboard
