"use client"
import CustomerHeader from '@/app/_components/CustomerHeader'
import React, { useEffect, useState } from 'react'

const page = (props) => {
  const name = props.params.name
  const [resDetail, setResDetail] = useState();
  const [foodItems, setFoodItems] = useState([]);
  const [cartData, setCartData] = useState();

  useEffect(() => {
    loadRestaurantDetail();
  }, [])
 
  const loadRestaurantDetail = async () => {
    const id = props.searchParams.id
    let response = await fetch(`http://localhost:3000/api/customer/${id}`)
    response = await response.json();
    if (response.success) {
      setResDetail(response.detail)
      setFoodItems(response.foodItems)
    }
  }
  const addToCard = (item)=>{
   setCartData(item);
  }


  return (
    <div>
      <CustomerHeader cartData={cartData} />
      <div className='main-page-banner' >
        <h1 className='explore-heading'>{decodeURI(name)}</h1>
      </div>

      <div className='wrap-detail'>
        <h3 className="heading">Detail</h3>
        <hr/>
        <h5 className='detail'>Contact : {resDetail?.phone_n}</h5>
        <hr/>
        <h5 className='detail'>City : {resDetail?.city}</h5>
        <hr/>
        <h5 className='detail'>Street : {resDetail?.street}</h5>
      <hr/></div>
      <h3 className='heading'>Foods</h3>

      <div className='wrap-food'>
        {
         foodItems.length>0 ? foodItems.map((item) => (
            <div className='food'>
              <img className='food-image' src={item.path} />
              <div>
                <h3 className='food-name'>Name : {item.name}</h3>
                <p  className='food-price'>Price : {item.price} rs</p>
                <p  className='food-detail'>{item.description}</p>
                <button onClick={()=>addToCard(item)} className='food-button'>Add to cart</button>
              </div>

            </div>
          )):<h1>No food item added</h1>
        }
      </div>
    </div>
  )
}

export default page
