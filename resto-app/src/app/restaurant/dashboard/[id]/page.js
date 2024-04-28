"use client"
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';


const Editfooditems = (props) => {
    let foodId = props.params.id;
    const router = useRouter();
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [path, setPath] = useState("");
    let [description, setDescription] = useState("");
    let [error, setError] = useState(false);

    useEffect(() => {
        hadleLoadFoodItem();
    }, [])

    const hadleLoadFoodItem = async () => {
        let response = await fetch(`http://localhost:3000/api/restaurant/foods/edit/${foodId}`)
        response = await response.json();
        if (response.success) {
            setName(response.result.name);
            setPrice(response.result.price);
            setPath(response.result.path);
            setDescription(response.result.description);
        }
    }

    const handleEditFoodItem = async () => {
        if (!name || !price || !path || !description) {
            setError(true);
            return false;
        }
        else {
            setError(false);
        }
        let response = await fetch(`http://localhost:3000/api/restaurant/foods/edit/${foodId}`, {
            method: "put",
            body: JSON.stringify({ name, price, path, description })
        })
        response = await response.json();
        if (response.success) {

            router.push('/restaurant/dashboard')
        }
        else {
            alert("Something went wrong");
        }
    }
    return (
        <>
            <Header />
            <div className='edit-page'>
                <h1 className='login-page-heading'>Edit food item</h1>
                <div className='input-main'>
                    <div>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} className='input-box' type='text' placeholder='Name' />
                        {error && !name && <span className='input-error'>Enter name!</span>}
                    </div>
                    <div>
                        <input value={price} onChange={(e) => { setPrice(e.target.value) }} className='input-box' type='text' placeholder='Price' />
                        {error && !price && <span className='input-error'>Enter Price!</span>}

                    </div>
                    <div>
                        <input value={path} onChange={(e) => { setPath(e.target.value) }} className='input-box' type='text' placeholder='Paste image path' />
                        {error && !path && <span className='input-error'>Enter path!</span>}
                    </div>
                    <div>
                        <input value={description} onChange={(e) => { setDescription(e.target.value) }} className='input-box' type='text' placeholder='Description' />
                        {error && !description && <span className='input-error'>Enter description!</span>}
                    </div>
                    <div>
                        <button onClick={handleEditFoodItem} className='login-button'>Save changes</button>
                    </div>
                    <div>
                        <button onClick={() => { router.push("/restaurant/dashboard") }} className='login-button'>Back to food list</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Editfooditems;
