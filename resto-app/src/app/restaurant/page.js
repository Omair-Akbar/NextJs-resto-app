"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import RestaurantLogin from '../_components/RestaurantLogin'
import RestaurantSignUp from '../_components/RestaurantSignUp'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { useRouter } from 'next/navigation'


const Resturant = () => {
       const fetchLocalStorage =()=>{ const dataFromLocalStorage = localStorage.getItem('restaurantUser');
       if (dataFromLocalStorage) { 
        router.push("/restaurant/dashboard")
       }}

    const router = useRouter();
    useEffect(()=>{
        fetchLocalStorage();
        
    })

    let [login, setLogin] = useState(true)
    const toggle = () => {
        setLogin(!login)
    }
    return (
        <>
            <Header/>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }
            <div>{
                login ? <p className='toggel-text'>Don't have an account? <button className='toggle-button' onClick={toggle}>SignUp</button></p> : <p className='toggel-text'>Already have an account? <button className='toggle-button' onClick={toggle}>Login</button></p>
            }</div>
            <Footer/>
        </>
    )
}

export default Resturant
