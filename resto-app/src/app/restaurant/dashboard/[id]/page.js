"use client"
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';


const Editfooditems = (props) => {
    const router = useRouter();
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [path, setPath] = useState("");
    let [description, setDescription] = useState("");
    let [error, setError] = useState(false);

    const handleEditFoodItem = async () => {
        if (!name || !price || !path || !description) {
            setError(true);
            return false;
        }
        else {
            setError(false);
        }
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if (restaurantData) {
            resto_id = restaurantData._id;
        }
       
    }
    return (
        <>
        <Header/>
        <div className='edit-page'>
           <h1 className='login-page-heading'>Edit food item</h1>
            <div className='input-main'>
                <div>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} className='input-box' type='text' placeholder='Name' />
                    { error && !name && <span className='input-error'>Enter name!</span>}
                </div>
                <div>
                    <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='input-box' type='text' placeholder='Price' />
                    { error && !price && <span className='input-error'>Enter Price!</span>}
                  
                </div>
                <div>
                    <input value={path} onChange={(e)=>{setPath(e.target.value)}} className='input-box' type='text' placeholder='Paste image path' />
                    { error && !path && <span className='input-error'>Enter path!</span>}
                </div>
                <div>
                    <input value={description} onChange={(e)=>{setDescription(e.target.value)}} className='input-box' type='text' placeholder='Description' />
                    { error && !description && <span className='input-error'>Enter description!</span>}
                </div>
                <div>
                    <button onClick={handleEditFoodItem}  className='login-button'>Save changes</button>
                </div>
                <div>
                    <button onClick={()=>{router.push("/restaurant/dashboard")}}  className='login-button'>Back to food list</button>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Editfooditems;
