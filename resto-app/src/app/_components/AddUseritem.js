import React from 'react'
import { useState } from 'react'


const AddUseritem = () => {

    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [path, setPath] = useState("");
    let [description, setDescription] = useState("");
    let [error, setError] = useState(false);

    const handleAddItem = async () => {
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
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "post",
            body: JSON.stringify({ name, price, path, description, resto_id })
        });
        response = await response.json();
        if (response.success) {
            alert("food item successfully added ")
        }
        else{
            alert("Something went wrong!")
        }

    }
    return (
        <>
           <h1 className='login-page-heading'>Login</h1>
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
                    <button onClick={handleAddItem}  className='login-button'>Add new item</button>
                </div>
            </div>
        </>
    )
}

export default AddUseritem;
