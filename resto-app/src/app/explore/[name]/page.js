"use client"
import CustomerHeader from '@/app/_components/CustomerHeader'
import Footer from '@/app/_components/Footer'
import React, { useEffect, useState } from 'react'

const page = (props) => {
  const name = props.params.name
  const [resDetail, setResDetail] = useState();
  const [foodItems, setFoodItems] = useState([]);
  const [cartData, setCartData] = useState();
  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  // const cartStorage  = (JSON.parse(localStorage.getItem('cart')));
  const [cartIds, setCardIds] = useState(cartStorage ? () => cartStorage.map((item) => {
    return item._id
  }) : [])
  const [removeCartData, setRemoveCartData] = useState()


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
  const addToCard = (item) => {
    setCartData(item);
    let localCartIds = cartIds;
    localCartIds.push(item._id);
    setCardIds(localCartIds)
    setRemoveCartData()
  }

  const removeFromCart = (id) => {
    setRemoveCartData(id);
    let localIds = cartIds.filter(item => item != id);
    setCardIds(localIds)
  }

  return (
    <>
      <CustomerHeader cartData={cartData} removeCartData={removeCartData} />
      <div className='main-page-banner' >
        <h1 className='explore-heading'>{decodeURI(name)}</h1>
      </div>

      <div className='wrap-detail'>
        <h3 className="heading">Detail</h3>
        <hr />
        <h5 className='detail'>Contact : {resDetail?.phone_n}</h5>
        <hr />
        <h5 className='detail'>City : {resDetail?.city}</h5>
        <hr />
        <h5 className='detail'>Street : {resDetail?.street}</h5>
        <hr /></div>
      <h3 className='heading'>Foods</h3>

      <div className='item-wrap'>
        {
          foodItems.length > 0 ? foodItems.map((item) => (
            <>  <hr />
              <div className='item'>

                <div className='item-div1'>
                  <div className='image-name'>
                    <img className='food-image' src={item.path} />
                  </div>
                  <div>
                    <h3 className='food-name'>Name : {item.name}</h3>
                    <p className='food-detail'>{item.description}</p>
                    {
                      cartIds.includes(item._id) ?
                        <button onClick={() => removeFromCart(item._id)} className='food-button'>Remove from cart</button> :
                        <button onClick={() => addToCard(item)} className='food-button'>Add to cart</button>
                    }
                  </div>
                </div>
                <div className='price-div'>
                  <p className='price'>Price : {item.price} </p>
                </div>
              </div>
              <hr />
            </>
          )) : <h1>No food item added</h1>
        }
      </div>
      <Footer />
    </>
  )
}

export default page
