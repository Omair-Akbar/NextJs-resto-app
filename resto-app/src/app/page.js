"use client"
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { MdLocationPin } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Home() {
  const [location, setLocation] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selected, setSelected] = useState("");
  const [showCity, setShowCity] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadLocation();
    loadRestaurants();
  }, [])

  const loadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/location")
    response = await response.json();
    if (response.success) {
      setLocation(response.result)
    }
  }


  const loadRestaurants = async (params) => {
    let url="http://localhost:3000/api/customer";
    if(params?.location){
      url=url+"?location="+params.location
    }
    let response = await fetch(url);
    response = await response.json()
    if (response.success) {
      setRestaurants(response.result)
    }
  }

  const handleListItem = (e) => {
    setSelected(e)
    setShowCity(false)
    loadRestaurants({location:e});
  }
  return (<>
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1 className="banner-text">Food Delivery App</h1>
        <div className="input-wrapper">
          <div>
            <input onClick={() => { setShowCity(true) }} type="text" value={selected} placeholder="Select City" className="select-input" />
            <span className="location-icon"><MdLocationPin /></span>
            <ul className="locations">
              {showCity && location.map((item) => (
                <li onClick={() => handleListItem(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Search food"  className="search-input" />
            <span className="restaurant-icon"><IoRestaurantSharp /></span>
          </div>
        </div>
      </div>  
         <h3 className="restaurant-heading">Restaurants</h3>
      <div className="restaurants-wrap">
   
        {
          restaurants.map((item)=>(
            <div className="restaurant">
              <img className="restaurant-inner-image" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"/>
             <div>
              <h3 className="name">{item.email}</h3>
              <h5>Location : {item.city}</h5>
              <h5>Street : {item.street}</h5>
              <h5>Contact : {item.phone_n}</h5>
              <button onClick={()=>router.push("/explore/"+item.email+"?id="+item._id)}>View page</button>
              </div>
              
            </div>
          ))
        }
      </div>
      <Footer />
    </main>
    
  </>
  );
}