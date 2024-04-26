import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


const RestaurantSignUp = () => {

    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")
    const [street,setStreet] = useState("")
    const [phone_n,setPhone_n] = useState("")
    const [password,setPassword] = useState("")
    const [c_password,setC_password] = useState("")
    const router = useRouter();
    let [error,setError] = useState(false)
    let [passwordError,setPasswordError] = useState(false)

    const handleSignUp = async () => {
        if(password!==c_password){
            setPasswordError(true);
            return false
        }else{
            setPasswordError(false);
        }
        if(!email || !city || !street || !phone_n || !password || !c_password ){
        setError(true);
        return false
        }else{
            setError(false);
        
        }
        
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email,city,street,phone_n,password})
        })
        
        response = await response.json( )
        if(response.success){
            const {result} = response
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            router.push("/restaurant/dashboard")
        }
    }

  return (
    <>
      <h1 className='login-page-heading'>SignUp</h1>
      <div className='input-main'>
                <div>
                    <input  className='input-box' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    {
                        error && !email && <span className='input-error'>Enter Email!</span>
                    }
                </div>
                <div>
                    <input  className='input-box' type='text' placeholder='City' value={city} onChange={(e)=>{setCity(e.target.value)}} />
                    {
                        error && !city && <span className='input-error'>Enter City!</span>
                    }
                </div>
                <div>
                    <input  className='input-box' type='text' placeholder='Street no.' value={street} onChange={(e)=>{setStreet(e.target.value)}} />
                    {
                        error && !street && <span className='input-error'>Enter Street!</span>
                    }
                </div>
                <div>
                    <input  className='input-box' type='text' placeholder=' Number' value={phone_n} onChange={(e)=>{setPhone_n(e.target.value)}} />
                    {
                        error && !phone_n && <span className='input-error'>Enter Number!</span>
                    }
                </div>
                <div>
                    <input  className='input-box' type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    {
                        error && !password && <span className='input-error'>Enter Password!</span>
                    }
                </div>
                <div className='password-field'>
                    <input  className='input-box' type='password' placeholder='Confirm Password' value={c_password} onChange={(e)=>{setC_password(e.target.value)}} />
                    {passwordError && <span  className='input-error'>Password doesn't match!</span>}
                    {
                        error && !c_password && <span className='input-error'>Enter a Confirm password</span>
                    }
                </div>
                <div>
                    <button onClick={handleSignUp} className='login-button'>SignUp</button>
                </div>
            </div>
    </>
  )
}

export default RestaurantSignUp
