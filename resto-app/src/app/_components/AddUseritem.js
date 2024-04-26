import React from 'react'
import { useState } from 'react'


const AddUseritem = () => {

    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [path, setPath] = useState("");
    let [description, setDescription] = useState("");

    const handleAddItem = async () => {
        console.log(name, price, path, description)
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if (restaurantData) {
            resto_id = restaurantData._id;
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "post",
            body: JSON.stringify({ name, price, path, description,resto_id})
        });
        response = await response.json();
        if(response.success){
            alert("food item successfully added ")
        }

    }
    return (<>
        <h1 className='login-page-heading'>Add new item</h1>

        <div className='input-main'>
            <div><input  value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' className='input-box' type='text' /></div>
        </div>

        <div className='input-main'>
            <div><input  value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Price' className='input-box' type='text' /></div>
        </div>

        <div className='input-main'>
            <div><input  value={path} onChange={(e) => { setPath(e.target.value) }} placeholder='Paste image path' className='input-box' type='text' /></div>
        </div>

        <div className='input-main'>
            <div><input  value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='description' className='input-box' type='text' /></div>
        </div>

        <div className='input-main'>
            <button onClick={handleAddItem} className='login-button'>Add item</button>
        </div>
    </>
    )
}

export default AddUseritem;
