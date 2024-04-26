"use client"
import React from 'react'
import "./style/style.css"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const RestaurantLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [userError, setUserError] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
       
        if(!email || !password){
            setError(true);
            return false
        }else{
            setError(false)
        }
  
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email,password,login:true})
        })
        response = await response.json();
        if(response.success){
            const {result} = response;
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            router.push("restaurant/dashboard")

        }else{
            setUserError(true);
        }
    }

    return (
        <>
            <h1 className='login-page-heading'>Login</h1>
            <div className='input-main'>
                <div>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='input-box' type='text' placeholder='Email' />
                    { error && !email && <span className='input-error'>Enter email!</span>}
                </div>
                <div>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='input-box' type='password' placeholder='Password' />
                    { error && !password && <span className='input-error'>Enter Password!</span>}
                    {userError && <span className='input-error'>404 - User not found!</span>}
                </div>
                <div>
                    <button onClick={handleLogin} className='login-button'>Login</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantLogin
